import Script from "next/script";
import "@/styles/global.scss";
import { Providers } from "@/app/providers";
import { Metadata } from "next";

import { getAppConfig } from "@/config";
import { notFound } from "next/navigation";

export function generateMetadata(): Metadata {
  const data = getAppConfig();
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
  const appConfig = getAppConfig();

  if (!appConfig) {
    notFound();
  }

  return (
    <html lang="en" className="govuk-template">
      <title>Digital Planning Register</title>
      <body className={`govuk-template__body`}>
        <Providers>{children}</Providers>
        <Script id="js-detection" strategy="beforeInteractive">
          {`document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');`}
        </Script>
      </body>
    </html>
  );
}
