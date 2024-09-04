// storage-adapter-import-placeholder
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { seoPlugin } from "@payloadcms/plugin-seo";
import {
  HTMLConverterFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import path from "path";
import { buildConfig, Payload } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Media } from "@/payload/collections/Media";
import { Users } from "@/payload/collections/Users";
import { Nav } from "@/payload/globals/Nav";
import { migrations } from "database/migrations";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const IS_DEV = process.env.NODE_ENV === "development";

export default buildConfig({
  collections: [Users, Media],
  globals: [Nav],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    client: {
      // url: "file:./database/replica.db",
      // syncInterval: 10000,
      url: process.env.DATABASE_URL ?? "",
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
    push: false,
    logger: false,
    migrationDir: "./database/migrations",
    prodMigrations: migrations,
  }),
  admin: {
    autoLogin: IS_DEV
      ? {
          email: "dev@payloadcms.com",
          password: "test",
          prefillOnly: true,
        }
      : false,
  },
  async onInit(payload) {
    await createDevUser(payload);
  },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      HTMLConverterFeature({}),
    ],
  }),
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
  sharp: sharp,
});

const createDevUser = async (payload: Payload) => {
  try {
    const existingUsers = await payload.find({
      collection: "users",
      limit: 1,
    });

    if (existingUsers?.docs?.length === 0) {
      await payload.create({
        collection: "users",
        data: {
          email: "dev@payloadcms.com",
          password: "test",
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
