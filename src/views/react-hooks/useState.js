import { useState } from "react"

const UseState = () => {
  // 函数组件中没有this；没有生命周期；无状态
  const [count, setCount] = useState(0)
  console.log('============', this);    // undefined
  const add = () => {
    let newCount = count
    setCount( newCount+= 1)
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={add} >增加</button>
    </div>
  )
}


export default UseState