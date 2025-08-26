import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatbotWidget from "./ChatbotWidget";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="layout-main">{children}</main>
      <ChatbotWidget />
      <Footer />
    </div>
  );
};

export default Layout;
