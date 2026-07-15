import Navbar from "../components/common/layout/Navbar";
import Footer from "../components/common/layout/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;