import Script from "next/script";
import "@/styles/global.scss";
import { Providers } from "./providers";
import { Metadata } from "next";
import { BaseTemplate } from "@/components/layouts/BaseTemplate";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="govuk-template">
      <title>Digital Planning Register</title>
      <body className={`govuk-template__body`}>
        <Providers>
          <BaseTemplate>{children}</BaseTemplate>
        </Providers>
        <Script id="js-detection" strategy="beforeInteractive">
          {`document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');`}
        </Script>
      </body>
    </html>
  );
}
