// import { useState } from "preact/hooks";
// import preactLogo from "./assets/preact.svg";
// import viteLogo from "/vite.svg";
import { Link, Route, Switch } from "wouter-preact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import "./index.css";
import img1 from "./assets/01.jpg";
import img2 from "./assets/02.jpg";
import img3 from "./assets/03.jpg";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Vendors from "./components/vendors/Vendors";
import About from "./components/about/About";
import Sponsors from "./components/sponsors/Sponsors";
import Contact from "./components/contact/Contact";
import Volunteers from "./components/volunteers/Volunteers";

export function App() {
  return (
    <>
      {/* Navigation */}
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/vendors" component={Vendors} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/volunteers" component={Volunteers} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}
