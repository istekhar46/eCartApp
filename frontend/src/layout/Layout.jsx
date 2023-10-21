import Footer from "../components/Footer";
import Header from "../components/Header";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Routers />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
