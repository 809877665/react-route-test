import {Component} from 'react'
import React from 'react'
// import { Redirect } from 'react-router-dom'

const {Provider,Consumer} = React.createContext('default')

// 定义父组件
export default class ContextDemo extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super()
  }

  state = {
    newContext: 'createContext'
  }

  inputChange = (e) => {
    this.setState({
      newContext: e.target.value
    })
  }
  render() {
    const {newContext} = this.state
    return (
      <Provider value={newContext}>
        <div>
            <h3>跨组件进行传值：context</h3>
            <label>childContent：</label>
            <input type="text" value={newContext} onChange={this.inputChange}></input>
        </div>
        <Son />
        {/* <Grandson></Grandson> */}
      </Provider> 
    )
  }
}

// 子组件，在子组件中获取父组件的数据
class Son extends Component {
  render() {
    return (
      <Consumer>
          {
            (name) => {
              return (
                <div style={{width:'60%',margin:'20px auto',textAlign:'center', border: '1px solid red'}}>
                    <p>子组件获取到的内容： {name}</p>
                    <Grandson />
                </div>
              )
            }
          }
      </Consumer>)
  }
}

// 定义孙组件，孙组件获取子组件的数据/直接获取父组件的数据
class Grandson extends React.Component{
  render(){
      return <Consumer>
          {
              (name)=>
                  <div style={{border:'1px solid red',width:'60%',margin:'20px auto',textAlign:'center'}}>
                      <p>孙组件获取到的内容:{name}</p>
                  </div>
          }
      
      </Consumer>
  }
}
