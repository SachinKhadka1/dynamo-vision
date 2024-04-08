
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Portfolio from "./components/Portfolio/Portfolio";
import Packages from "./components/Packages/Packages"
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <Router>
<Routes>
<Route path="/" exact component={Portfolio} />
      <Route path="/packages" component={Packages} />
      <Route path="/cart" component={Cart} />
</Routes>
  </Router>
  );
}

export default App;
