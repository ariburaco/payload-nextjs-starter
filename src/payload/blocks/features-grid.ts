import iconField from "@/payload/fields/icon";
import type { Block } from "payload";

const FeaturesGrid: Block = {
  slug: "FeaturesGrid",
  interfaceName: "FeaturesGridBlock",
  fields: [
    {
      name: "preTitle",
      type: "text",
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "features",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 6,
      fields: [
        iconField({ required: true }),
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};

export default FeaturesGrid;
