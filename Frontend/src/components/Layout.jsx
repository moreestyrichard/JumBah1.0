import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatbotWidget from "./ChatbotWidget";
import ElephantMascot from "./ElephantMascot";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  const location = useLocation();
  const isAIPlannerPage = location.pathname === "/ai-planner";

  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="layout-main">{children}</main>
      <ChatbotWidget />
      <Footer />
      <ElephantMascot />
    </div>
  );
};

export default Layout;
