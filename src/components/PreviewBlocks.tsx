"use client";

import Blocks from "@/components/Blocks";
import { useLivePreview } from "@payloadcms/live-preview-react";
import { Page } from "payload-types";

export default function PreviewBlocks({
  initialData,
  locale,
}: {
  initialData?: Page | null;
  locale: string;
}) {
  const { data } = useLivePreview({
    serverURL: process.env.NEXT_PUBLIC_SITE_URL || "",
    depth: 3,
    initialData: initialData,
  });

  return <Blocks blocks={data?.blocks || []} locale={locale} />;
}
