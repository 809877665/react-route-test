import {Component} from 'react'

export default class Ref extends Component {

  state = {
    count: 0,
    num: 0
  }

  // incrementCount = () => {
  //   // 异步执行
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  //   // this.state.count = this.state.count+1
  //   // console.log('==========', this.state.count);
  // }
  incrementCount = () => {
    // 同步执行
    this.setState((pre) => {
      return {count: pre.count + 1}
    })
  }

  // 这里setState是异步执行，count最终结果为1；
  // incrementCount函数执行了三次， 但是每次state.count的初始值都是从0开始的；
  handelAdd = () => {
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
  }


  // setState的打印测试
  componentDidMount() {
    // 这里是异步执行的；先执行两个console.log()语句，在执行setState()方法；
    this.setState({num: this.state.num +1})
    console.log(this.state.num);      // 0
    this.setState({num: this.state.num +1})
    console.log(this.state.num);    // 0
    setTimeout(() => {
      // 这里setState是同步执行的，逐行执行
      this.setState({num: this.state.num +1})
      console.log(this.state.num);    // 2
      this.setState({num: this.state.num +1})
      console.log(this.state.num);    // 3
    }, 0);
  }

  render() {
    const count = this.state.count
    console.log('==========', this.state.count);
    return (
      <div>
        <button onClick={this.handelAdd}>增加</button>
        <p>{count}</p>
      </div>
    )
  }

}