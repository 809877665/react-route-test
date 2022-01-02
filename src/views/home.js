import {NavLink, Link, Route, Switch, Redirect} from 'react-router-dom'
import News from './news'
import Message from './message'

export default function Home() {
  return (
    <div>
      <h2>home组件</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink to="/home/news">news</NavLink>
          </li>
          <li>
            <NavLink to="/home/message">message</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/message" component={Message}></Route>
          <Redirect path="/home/news"></Redirect>
        </Switch>
      </div>
    </div>
  )
} 