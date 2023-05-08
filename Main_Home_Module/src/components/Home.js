import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./homePage/NavBar";
import { Banner } from "./homePage/Banner";
import { Companies } from "./homePage/Companies";
import { Contact } from "./homePage/Contact";
import { Footer } from "./homePage/Footer";

export default function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Banner />
      <Companies />
      <Contact />
      <Footer />
    </div>
  );
}

