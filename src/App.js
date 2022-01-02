import logo from './logo.svg';
import './App.css';
import {NavLink, Link, Route, Switch, Redirect} from 'react-router-dom'
import About from './views/about'
import Home from './views/home'
import Ref from './views/ref'
import Context from './views/context'
import ChildContext from './views/childContext'
import Temperature from './views/temperature';
import ForwordRef from './views/formordRef';
import UseState from './views/react-hooks/useState' 
import UseContext from './views/react-hooks/useContext' 
import UseEffect from './views/react-hooks/useEffect';
import UseReducer from './views/react-hooks/useReducer';
import setState from './views/setState';

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React 路由案例</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/*导航路由链接*/}
            <NavLink to="/about/false" className="list-group-item">About</NavLink>
            <NavLink to="/home" className="list-group-item">Home</NavLink>
            <NavLink to="/ref" className="list-group-item">Ref</NavLink>
            <NavLink to="/context" className="list-group-item">Context</NavLink>
            <NavLink to="/childContext" className="list-group-item">ChildContext</NavLink>
            <NavLink to="/forwordRef" className="list-group-item">forwordRef</NavLink>
            <NavLink to="/temperature" className="list-group-item">状态提升</NavLink>
            <NavLink to="/useState" className="list-group-item">useState</NavLink>
            <NavLink to="/useContext" className="list-group-item">useContext</NavLink>
            <NavLink to="/useEffect" className="list-group-item">useEffect</NavLink>
            <NavLink to="/useReducer" className="list-group-item">useReducer</NavLink>
            <NavLink to="/setState" className="list-group-item">setState</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <Switch>
                <Route path="/about/:isLogin" component={About}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/ref" component={Ref}></Route>
                <Route path="/context" component={Context}></Route>
                <Route path="/childContext" component={ChildContext}></Route>
                <Route path="/forwordRef" component={ForwordRef}></Route>
                <Route path="/temperature" component={Temperature}></Route>
                <Route path="/useState" component={UseState}></Route>
                <Route path="/useContext" component={UseContext}></Route>
                <Route path="/useEffect" component={UseEffect}></Route>
                <Route path="/useReducer" component={UseReducer}></Route>
                <Route path="/setState" component={setState}></Route>
                <Redirect to="/home"></Redirect>
              </Switch>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
