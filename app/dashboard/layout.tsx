import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="span3">
              <Sidebar />
            </div>
            <div className="span9">
              <div className="content">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
