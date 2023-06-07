import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Pricing from './Pricing';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={ <Navbar /> }>

            <Route index element={ <Home /> } />
            <Route path='About' element={ <About /> } />
            <Route path='Services' element={ <Services /> } />
            <Route path='Pricing' element={ <Pricing /> } />
            <Route path='Contact' element={ <Contact /> } />
            <Route path='Login' element={ <Login /> } />
            <Route path='Signup' element={ <Signup /> } />
            <Route path='*' element={ <NotFound /> } />

          </Route>
      </Routes>
    </Router>
  );
}

export default App;
