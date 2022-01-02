import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import MessageDetail from './messageDetail'

class Message extends React.Component{
  state = {
    message: []
  }
  componentDidMount() {
    setTimeout(() => {
      const list = [
        {id: 1, title: 'm1'},
        {id: 2, title: 'm2'},
        {id: 3, title: 'm3'}
      ]
      this.setState({
        message: list
      })
    }, 2000);
  }
  render() {
    const {message} = this.state
    // 判断loading文案是否显示，如果消息列表为空则显示，否则不显示
    // display: none; 不显示
    // display: block; 显示
    const show = message.length ? 'none' : 'block'
    return (
      <div>
        <p style={{display: show}}>loading....</p>
        <ul>
          {
            message && message.map((ele,index) => {
              return (
                <li key={index}>
                  <NavLink to={`/home/message/${ele.id}`}>{ele.title}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <Route path="/home/message/:id" component={MessageDetail}></Route>
      </div>
    )
  }
}

export default Message