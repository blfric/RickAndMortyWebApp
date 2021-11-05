import NavBar from './Navbar';
import Footer from './Footer';

const MainContainer = ({ children }) => {

  return (
    <main className="main-container">
      <NavBar />
      <div className="chlid-container">
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default MainContainer;