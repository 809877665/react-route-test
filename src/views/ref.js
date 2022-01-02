import {Component} from 'react'
import react from 'react'

export default class Ref extends Component {
  constructor() {
    super()
    this.objRef =  react.createRef()
  }
  componentDidMount() {
    // 模拟接口请求到数据后，更新ref中的内容
    setTimeout(() => {
      this.refs.stringRef && this.refs.stringRef.textContent &&  (this.refs.stringRef.textContent = 'string ref更新了');
      this.methodRef && this.methodRef.textContent && (this.methodRef.textContent = 'method ref更新了')
      this.objRef && this.objRef.current && (this.objRef.current.textContent = 'obj ref 更新了')
    }, 2000);

  }
  render() {
    return (
      <div >
        <h3>ref的使用：获取dom元素</h3>
        <p ref="stringRef">1. ref的string定义方式</p>
        <p ref={ele => this.methodRef = ele}>2. ref的method定义方式</p>
        <p ref={this.objRef}>3. ref的全局对象定义方式</p>
      </div>
    )
  }
}