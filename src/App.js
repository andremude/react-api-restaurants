import './App.css';
import Restaurants from './components/Restaurants'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Restaurants />
      <Footer />
    </div>
  );
}

export default App;
