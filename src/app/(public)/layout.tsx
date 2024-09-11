import { getAppConfig } from "@/config";
import { BaseTemplate } from "@/components/layouts/BaseTemplate";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  const appConfig = getAppConfig();

  if (!appConfig) {
    notFound();
  }

  return (
    <BaseTemplate appConfig={appConfig}>public layout: {children}</BaseTemplate>
  );
}
