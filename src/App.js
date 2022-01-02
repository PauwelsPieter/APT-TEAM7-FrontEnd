import './App.css';
import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom'; 
import AllCarsContainer from './containers/all_cars';
import BrandsByCountryContainer from './containers/brands_by_country';
import ModelsByTypeContainer from './containers/models_by_type';
import ModelsByYearContainer from './containers/models_by_year';

const Header = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact activeClassName="active">All cars</NavLink></li>
        <li><NavLink to="/brandsbycountry" activeClassName="active">Brands by country</NavLink></li>
        <li><NavLink to="/modelsbyyear" activeClassName="active">Models by year</NavLink></li>
        <li><NavLink to="/modelsbytype" activeClassName="active">Models by type</NavLink></li>
      </ul>
    </nav>
  );
};

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={AllCarsContainer} />
        <Route path='/brandsbycountry' component={BrandsByCountryContainer} />
        <Route path='/modelsbyyear' component={ModelsByYearContainer} />
        <Route path='/modelsbytype' component={ModelsByTypeContainer} />
      </Switch>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}
export default App;
