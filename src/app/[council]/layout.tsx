import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAppConfig } from "@/config";

export function generateMetadata({
  params,
}: {
  params: { council: string };
}): Promise<Metadata | null> {
  const council = decodeURIComponent(params.council);
  const data = getAppConfig(council);
  if (!data) {
    return null;
  }
  const { name: title, description, image } = data;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: title,
    },
  };
}

export default function SiteLayout({
  params,
  children,
}: {
  params: { council: string };
  children: ReactNode;
}) {
  const council = decodeURIComponent(params.council);
  const data = getAppConfig(council);

  if (!data) {
    notFound();
  }

  return (
    <>
      {data.council?.name}
      {data.council?.logo}
      {children}
    </>
  );
}
