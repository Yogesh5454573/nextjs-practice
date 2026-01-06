import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Script from "next/script";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Edmin</title>
        <link type="text/css" href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link type="text/css" href="/assets/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" />
        <link type="text/css" href="/assets/css/theme.css" rel="stylesheet" />
        <link type="text/css" href="/assets/images/icons/css/font-awesome.css" rel="stylesheet" />
        <link type="text/css" href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600'
          rel='stylesheet' />
      </head>
      <body>
        <Header />
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="span3">
                <Sidebar />
              </div>
              <div className="span9">
                <div className="content">
                  { children }
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Script src="/assets/scripts/jquery-1.9.1.min.js" strategy="afterInteractive" />
        <Script src="/assets/scripts/jquery-ui-1.10.1.custom.min.js" strategy="afterInteractive" />
        <Script src="/assets/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/scripts/flot/jquery.flot.js" strategy="afterInteractive" />
        <Script src="/assets/scripts/flot/jquery.flot.resize.js" strategy="afterInteractive" />
        <Script src="/assets/scripts/datatables/jquery.dataTables.js" strategy="afterInteractive" />
        <Script src="/assets/scripts/common.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
