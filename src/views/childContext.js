import {Component} from 'React'
import PropTypes from 'prop-types'


// 通过childContext在子组件中获取父组件的内容
// 此API现在已经废弃了；
class ContextDemo2 extends Component {
  state = {
    newContext: 'createContext'
  }

  // 定义getChildContext方法
  getChildContext() {
    return {value: this.state.newContext}
  }
  render() {
    const {newContext} = this.state
    return (
      <div>
          <label>childContext：</label>
          <input type="text" value={newContext} onChange={(e) => this.setState({newContext: e.target.value})}></input>
        <Son></Son>
      </div>
    )
  }
}

class Son extends Component {
  render() {
    return (
      // 注意这里箭头函数的写法，如果没加大括号{}就不用写return()
      // 如果加了大括号{}就需要加return()
      <div style={{border: '1px solid red',width:'60%',margin:'20px auto', textAlign: 'center'}}>
        <p>子组件获取到的内容：{this.context.value}</p>
      </div>
    )
  }
}


Son.contextTypes = {
  value: PropTypes.string
}

ContextDemo2.childContextTypes  = {
  value: PropTypes.string
}

export default () => 
  <ContextDemo2 >
  
  </ContextDemo2>
