import Navbar from "@/components/common/navbar";
import getPayload from "@/payload/payload.ssr";

export default async function Home() {
  const payload = await getPayload();

  const nav = await payload.findGlobal({
    slug: "nav",
  });

  return (
    <main className="container flex h-screen flex-col items-center justify-center gap-4">
      <Navbar nav={nav} />
      <h1 className="text-4xl font-bold">Welcome to Payload</h1>
      <p className="max-w-2xl text-balance text-center text-lg">
        Payload is a headless CMS that lets you build your own CMS with a
        beautiful UI. It's open source and free to use.
      </p>
    </main>
  );
}
