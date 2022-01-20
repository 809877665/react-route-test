import {Component} from 'react'
import PubSub from 'pubsub-js'

class parent extends Component {
  render() {
    return (
      <div>
        <Sub1></Sub1>
        <br />
        <Sub2></Sub2>
     </div>
    )
  }
}

// 兄弟组件1
class Sub1 extends Component {
  state = {
    msg: ''
  }
  // 发布消息
  sendMsg = () => {
    console.log('发布消息');
    PubSub.publish('SOS', '我是从message组件发布的')
  }
  // 发布消息
  sendMsg2 = () => {
    PubSub.publish('HI', {name: '鲁班七号', job:'射手'})
  }

  render() {
    return (
      <div>
        <button onClick={() => this.sendMsg()}>发布消息</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => this.sendMsg2()}>发布消息2</button>
      </div>
    )
  }
}
// 兄弟组件2
class Sub2 extends Component {
  state = {
    msg: '',
    student: {}
  }
  render() {
    PubSub.subscribe('SOS', (a, msg) => {
      console.log('发布的事件名称', a, msg);
      this.setState({
        msg
      })
    })
    PubSub.subscribe('HI', (a, data) => {
      console.log('发布的事件名称', a, data);
      this.setState({
        student: data
      })
    })
    const {msg, student} = this.state
    return (
      <div>
        订阅的消息：
         <br />
        <p>文本：{msg}</p><br></br>
        <div>对象：{`${student.name || ''}-${student.job || ''}`}</div>
      </div>
    )
  }
}

export default parent

