import { Navbar } from "./components/index";
import GlobalStyle from "./GlobalStyle";
import { Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}
