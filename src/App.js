import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import MainRoutes from "./routes/mainRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
