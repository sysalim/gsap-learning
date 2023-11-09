import Footer from "../templates/Footer";
import Header from "../templates/Header";

const Luyout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Luyout;
