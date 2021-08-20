
import './App.css';
import Nav from './Components/NavBar/Nav';


import '../node_modules/bootstrap/dist/css/bootstrap.css'
import FetchingApi from './Components/User/User';
import Counter from './Components/Counter/Counter'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import UseReducerHook from './Components/Hooks/Hooks'
import Post from './Components/Context/Post';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
    <switch>
    <Route exact path ="/user" component ={FetchingApi} />
    <Route exact path ="/counter" component ={Counter} />
    <Route exact path ="/main" component ={Main} />
    <Route exact path ="/home" component ={Home} />
    <Route exact path ="/hooks" component ={UseReducerHook} />
    <Route exact path ="/context" component ={Post} />

    
    </switch>
    </BrowserRouter>  
    
   
    </div>
  );
}

export default App;
