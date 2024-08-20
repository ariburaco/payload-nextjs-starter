// const payload = await getPayloadHMR({ config: configPromise });
import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
const payloadSSR = async () => await getPayloadHMR({ config: configPromise });

export default payloadSSR;
