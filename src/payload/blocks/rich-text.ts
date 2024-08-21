import type { Block } from "payload";

const RichText: Block = {
  slug: "RichText",
  interfaceName: "RichTextBlock",
  fields: [
    {
      name: "content",
      type: "richText",
    },
  ],
};

export default RichText;
