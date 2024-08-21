import getPayload from "@/payload";
import normalizePath from "@/utils/normalizePath";
import { unstable_cache } from "next/cache";

import { draftMode } from "next/headers";
import { Config } from "payload-types";

type Collection = keyof Config["collections"] | string;
type Path = string | string[];
type CacheOption = "noDraft" | true | false;

export const generateDocumentCacheKey = (
  collection: Collection,
  path?: Path,
): string => {
  return `${collection}_path_${normalizePath(path, false)}`;
};

export const generateDocumentCacheParams = (
  collection: Collection,
  path?: Path,
): string[] => {
  return [collection, normalizePath(path)];
};

export const conditionalCache = async <T>(
  fetchFunction: () => Promise<T>,
  cacheKey: string,
  cache: boolean | undefined,
  revalidate: false | number | undefined,
): Promise<T> => {
  if (!cache) {
    return fetchFunction();
  }
  return unstable_cache(fetchFunction, [cacheKey], {
    revalidate,
    tags: [cacheKey],
  })();
};

interface GetDocumentParams<K extends keyof Config["collections"]> {
  collection: K;
  path?: Path;
  depth?: number;
  cache?: CacheOption;
  revalidate?: false | number | undefined;
}

export const getDocument = async <K extends keyof Config["collections"]>({
  collection,
  path,
  depth = 0,
  cache = "noDraft",
  revalidate = false,
}: GetDocumentParams<K>): Promise<Config["collections"][K] | null> => {
  const { isEnabled: draft } = draftMode();
  const payload = await getPayload();

  const normalizedPath = normalizePath(path, false);
  const where = { path: { equals: normalizedPath } };

  const cacheKey = generateDocumentCacheKey(collection, path);
  const shouldCache = draft ? false : !!cache;
  return conditionalCache(
    async () => {
      return await payload
        .find({
          collection,
          draft,
          depth,
          limit: 1,
          overrideAccess: false,
          user: true,
          where,
        })
        .catch((error) => {
          console.error("Error fetching document:", error);
          return null;
        })
        .then((result) => {
          if (!result || !result.docs || result.docs.length === 0) return null;
          return result.docs.at(0) as Config["collections"][K] | null;
        });
    },
    cacheKey,
    shouldCache,
    revalidate,
  );
};
