import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAppConfig, getCouncilList } from "@/config";
import { BaseTemplate } from "@/components/layouts/BaseTemplate";

export function generateStaticParams() {
  const allCouncils = getCouncilList()
    .flatMap((council) => [
      {
        council,
      },
    ])
    .filter(Boolean);

  return allCouncils;
}

export function generateMetadata({
  params,
}: {
  params: { council: string };
}): Metadata {
  const council = decodeURIComponent(params.council);
  const appConfig = getAppConfig(council);
  const { name: title, description, image } = appConfig;

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
  const appConfig = getAppConfig(council);

  if (!appConfig) {
    notFound();
  }

  return (
    <>
      <BaseTemplate appConfig={appConfig}>{children}</BaseTemplate>
    </>
  );
}
