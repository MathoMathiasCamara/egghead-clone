import { Navbar } from "./components/index";
import GlobalStyle from "./GlobalStyle";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/Sections/BannerSection/Banner";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Banner />
    </Router>
  );
}
