import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Edmin</title>
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap-responsive.min.css" />
        <link rel="stylesheet" href="/assets/css/theme.css" />
        <link rel="stylesheet" href="/assets/images/icons/css/font-awesome.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script src="/assets/scripts/jquery-1.9.1.min.js" strategy="afterInteractive" />
        <Script src="/assets/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/scripts/common.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
