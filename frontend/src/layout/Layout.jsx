import Footer from "../components/footer/Footer";
// import Header from "../components/Header";
import Routers from "../routes/Routers";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Header/>
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
