import React from "react";
import Main from "./Main";
import Header from "./Header";
import About from "./About";
import Feedback from "./Feedback";
import Footer from "./Footer";
import ScrollToTop from "./Scroll_to_top";

const Home = () => {
  const [showBtn, setShowBtn] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <div className="home mt-160">
      <Header />
      <Main />
      <About />
      {showBtn && <ScrollToTop />}
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;
