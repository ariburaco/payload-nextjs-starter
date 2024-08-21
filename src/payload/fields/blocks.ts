import blocks from "@/payload/blocks";
import deepMerge from "deepmerge";
import { Field } from "payload";

type BlocksField = (overrides?: Partial<Field>) => Field;

export const blocksField: BlocksField = (overrides) => {
  return deepMerge<Field, Partial<Field>>(
    {
      name: "blocks",
      type: "blocks",
      blocks,
    },
    overrides || {},
  );
};
