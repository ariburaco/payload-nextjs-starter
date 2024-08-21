import HeroBanner from "./HeroBanner";
import FeaturedGrid from "./FeaturedGrid";
import Faq from "./Faq";
import RichText from "./RichText";
import React from "react";

export type AdditionalBlockProps = {
  blockIndex: number;
  locale: string;
};

const blockComponents = {
  HeroBanner: HeroBanner,
  FeaturesGrid: FeaturedGrid,
  Faq: Faq,
  RichText: RichText,
};

const Blocks = ({ blocks, locale }: any) => {
  return (
    <>
      {blocks
        ?.filter(
          (block: any) =>
            block &&
            block.blockType &&
            blockComponents.hasOwnProperty(block.blockType),
        )
        .map((block: any, ix: number) => {
          // @ts-ignore
          const BlockComponent = blockComponents[block.blockType] ?? null;
          return BlockComponent ? (
            <BlockComponent
              key={ix}
              {...block}
              blockIndex={ix}
              locale={locale}
            />
          ) : null;
        })}
    </>
  );
};

export default Blocks;
