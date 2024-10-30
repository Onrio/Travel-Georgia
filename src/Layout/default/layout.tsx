import Header from "@/components/Header/index";
import Footer from "@/components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { PageContainer } from "@/components/page-container/page-container";

const Layout = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  );
};

export default Layout;
