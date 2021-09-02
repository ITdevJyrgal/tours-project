import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/MainPage/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Service from "./components/Service/Service";

function App() {
  return (
<div className='main-page'>
<Route exact path='/' component={() => <MainPage/>}/>
<Route exact path='/tours'  />
<Route exact path='/services' component={ () => <Service/>}  />
<Route exact path='/support'  />
<Route exact path='/contacts' />
</div>
  );
}

export default App;
