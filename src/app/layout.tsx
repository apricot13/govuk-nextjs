import { BaseTemplate } from "@/components/layouts/BaseTemplate";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/styles/global.scss";

// export const viewport: Viewport = {
//   themeColor: "#0b0c0c",
// };

// export const metadata: Metadata = {
//   title: "Digital planning register",
//   description:
//     "Find planning applications submitted through the Open Digital Planning system for your local council planning authority.",
// };

{
  /* <link rel="icon" sizes="48x48" href="/assets/images/favicon.ico"> */
}
{
  /* <link rel="icon" sizes="any" href="/assets/images/favicon.svg" type="image/svg+xml"> */
}
{
  /* <link rel="mask-icon" href="/assets/images/govuk-icon-mask.svg" color="#0b0c0c"> */
}

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
