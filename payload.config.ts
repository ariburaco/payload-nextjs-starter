// storage-adapter-import-placeholder
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";

import { Media } from "@/collections/Media";
import { Users } from "@/collections/Users";

import { en } from "payload/i18n/en";
import { Nav } from "@/globals/Nav";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    autoLogin: {
      email: "dev@payloadcms.com",
      password: "test",
      prefillOnly: true,
    },
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: "users",
      limit: 1,
    });

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: "users",
        data: {
          email: "dev@payloadcms.com",
          password: "test",
        },
      });
    }
  },

  collections: [Users, Media],
  globals: [Nav],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL ?? "",
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
  }),
  sharp,
  plugins: [
    uploadthingStorage({
      collections: {
        [Media.slug]: true,
      },
      options: {
        apiKey: process.env.UPLOADTHING_SECRET,
        acl: "public-read",
      },
    }),
    seoPlugin({
      // collections: ["pages"],
      // uploadsCollection: "media",
      // generateTitle: ({ doc }) => `${doc.title} | Payload`,
      // generateDescription: ({ doc }) => doc.excerpt,
    }),
  ],
  email: nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_USER || "",
    defaultFromName: "Payload",
    // Nodemailer transportOptions
    transportOptions: {
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
});
