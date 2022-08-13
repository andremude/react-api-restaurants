import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Restaurants from './components/Restaurants'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App(inputText) {
  return (
    <div className="App">
      <Header />
      {/* <Restaurants /> */}
      <Routes>
        <Route path="/" element={<Restaurants/>}/>
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
