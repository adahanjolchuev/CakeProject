import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import MainRoutes from "./routes/mainRoutes";
import loader from "../src/images/loader.svg";
import { useMainContext } from "./components/context/mainContext";

function App() {
  const { load } = useMainContext();

  return !load ? (
    <center
      style={{
        height: "90vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: "210px",
          height: "210px",
        }}
        src={loader}
        alt=""
      />
    </center>
  ) : (
    <>
      <div className="App">
        <Header />
        <MainRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
