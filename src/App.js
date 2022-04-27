import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './myRoutes/MyRoutes';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <MyRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
