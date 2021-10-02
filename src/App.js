import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Confirmed from './components/confired/Confirmed';
import Header from './components/Header/Header';
import Review from './components/review/Review';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
     
     
      <BrowserRouter>
      <Header></Header>
      <Switch>
<Route path = "/shop">
  <Shop></Shop>
</Route>
<Route exact path = "/">
  <Shop></Shop>
</Route>
<Route exact path = "/orders">
 <Review></Review>
</Route>
<Route path ="/Confirmed">
  <Confirmed/>
</Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
