import Layout from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} closeOnClick pauseOnHover={false}/>
      <Layout/>
    </>
  );
}

export default App;
