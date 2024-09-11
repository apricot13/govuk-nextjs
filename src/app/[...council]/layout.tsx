import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAppConfig, getCouncilList } from "@/config";
import { BaseTemplate } from "@/components/layouts/BaseTemplate";

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
