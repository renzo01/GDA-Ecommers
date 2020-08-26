import React from "react";
import Navbar from "./components/Header/Navbar/Navbar.component";
import Footer from "./components/Commons/Footer/Footer.component";
import MainPage from "./components/Body/MainPage/MainPage.component";

function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
