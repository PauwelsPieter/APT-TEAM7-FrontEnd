import './App.css';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>All cars</li>
        <li>Brands by country</li>
        <li>Models by year</li>
        <li>Models by type</li>
      </ul>
    </nav>
  );
};

const Main = () => {
  return (
    <div>
      Content
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
export default App;
