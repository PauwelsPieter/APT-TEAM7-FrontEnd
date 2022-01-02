import React, { useState } from "react";
import './App.css';
import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom'; 
import AllCarsContainer from './containers/all_cars';
import BrandsByCountryContainer from './containers/brands_by_country';
import ModelsByTypeContainer from './containers/models_by_type';
import ModelsByYearContainer from './containers/models_by_year';

const Header = () => {
  const [isActive, setActive] = useState(false);

  const handleDisable = () => {
    setActive(false);
  }

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className='navigation'>
      <div className="nav-text">APT-Team7 front-end</div>
      <ul className={isActive ? "active nav-menu" : "nav-menu"}>
        <li><NavLink to="/" exact activeClassName="active" onClick={handleDisable}>All cars</NavLink></li>
        <li><NavLink to="/brandsbycountry" activeClassName="active" onClick={handleDisable}>Brands by country</NavLink></li>
        <li><NavLink to="/modelsbyyear" activeClassName="active" onClick={handleDisable}>Models by year</NavLink></li>
        <li><NavLink to="/modelsbytype" activeClassName="active" onClick={handleDisable}>Models by type</NavLink></li>
      </ul>
      <div className="nav-toggle" onClick={handleToggle}>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </div>
    </nav>
  );
};

const Main = () => {
  return (
    <div className="content">
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
