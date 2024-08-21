// storage-adapter-import-placeholder
import { Media } from "@/payload/collections/Media";
import { Pages } from "@/payload/collections/Pages";
import { Users } from "@/payload/collections/Users";
import { Nav } from "@/payload/globals/Nav";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { seoPlugin } from "@payloadcms/plugin-seo";
import {
  HTMLConverterFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";
import {} from "@payloadcms/plugin-nested-docs";
import { COLLECTION_SLUG_PAGE } from "@/payload/collections/config";
import generateBreadcrumbsUrl from "@/payload/utils/generateBreadcrumbsUrl";
import { nestedDocsPlugin } from "@payloadcms/plugin-nested-docs";
import { SiteSettings } from "@/payload/globals/site-settings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const IS_DEV = process.env.NODE_ENV === "development";

export default buildConfig({
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

  collections: [Users, Media, Pages],
  globals: [SiteSettings, Nav],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      HTMLConverterFeature({}),
    ],
  }),
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
    nestedDocsPlugin({
      collections: [COLLECTION_SLUG_PAGE],
      generateURL: generateBreadcrumbsUrl,
      breadcrumbsFieldSlug: "breadcrumbs",
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
