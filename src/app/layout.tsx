import Script from "next/script";
import "@/styles/global.scss";
import { AppProvider } from "./provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="govuk-template">
      <title>Digital Planning Register</title>
      <body className={`govuk-template__body`}>
        <AppProvider>{children}</AppProvider>
        <Script id="js-detection" strategy="beforeInteractive">
          {`document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');`}
        </Script>
      </body>
    </html>
  );
}
