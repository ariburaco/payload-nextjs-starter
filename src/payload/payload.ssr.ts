import "server-only";

import { headers as getHeaders } from "next/headers";

// const payload = await getPayloadHMR({ config: configPromise });
import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { User } from "payload-types";
const getPayload = async () => await getPayloadHMR({ config: configPromise });

export default getPayload;

export async function getCurrentUser(): Promise<User | null> {
  const headers = getHeaders();
  const payload = await getPayload();
  return (await payload.auth({ headers })).user;
}
