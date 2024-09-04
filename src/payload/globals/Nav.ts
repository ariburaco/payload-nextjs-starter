import { GlobalConfig } from "payload";

export const Nav: GlobalConfig = {
  slug: "nav",
  fields: [
    {
      name: "logo",
      label: "Logo",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: {
        mimeType: { contains: "image" },
      },
      access: {
        read: () => true,
        create: () => true,
        update: () => true,
      },
    },
    {
      name: "cta",
      label: "CTA",
      type: "text",
      required: true,
      access: {
        read: () => true,
        create: () => true,
        update: () => true,
      },
    },
  ],
};
