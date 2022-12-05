import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children, blog }) => {
  return (
    <>
      <Navigation blog={blog}/>
      <main className="layoutMain">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
