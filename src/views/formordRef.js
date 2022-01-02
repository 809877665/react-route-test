import React from 'React'


const TargetFunction = React.forwardRef((props,ref) => {
  console.log(props);     // 使用组件时在其中传入的值 {name: '123'}
  return (
    <div>
      <input type="text" ref={ref}></input>
    </div>
  )}
)

// 函数组件通过ref拿到dom元素
export default class ForwordRef extends React.Component {
  constructor() {
    super()
    this.ref = React.createRef()    // 创建ref对象
  }

  componentDidMount() {
    this.ref.current.value = 'input输入框的值'
    this.ref.current.style.color = 'red'
  }
  render() {
    return (
      <TargetFunction ref={this.ref} name="123"></TargetFunction>
    )
  }
}