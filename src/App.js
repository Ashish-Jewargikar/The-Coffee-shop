// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Services />
      <Gallery/>
      <Footer/>
    </div>
  );
};

export default App;
