import { BaseTemplate } from "@/components/layouts/BaseTemplate";
import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/global.scss";

export const metadata: Metadata = {
  title: "Digital planning register",
  description:
    "Find planning applications submitted through the Open Digital Planning system for your local council planning authority.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="govuk-template">
      <title>Digital Planning Register</title>
      <body className={`govuk-template__body`}>
        <BaseTemplate>{children}</BaseTemplate>
        <Script id="js-detection" strategy="beforeInteractive">
          {`document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');`}
        </Script>
      </body>
    </html>
  );
}
