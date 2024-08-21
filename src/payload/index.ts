import "server-only";

import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { User } from "payload-types";
const getPayload = async () => await getPayloadHMR({ config: configPromise });
import { headers as getHeaders } from "next/headers";

export default getPayload;

export async function getCurrentUser(): Promise<User | null> {
  const headers = getHeaders();
  const payload = await getPayload();
  return (await payload.auth({ headers })).user;
}
