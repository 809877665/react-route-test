import React, { memo, useMemo, useState } from "react";


let ch;
const Child = ({ a }) => {
  console.log('Child=组件重新渲染');
  return <h1>Child====组件{a}</h1>
}

function Parent(props) {
  const {a, b} = props
  // useMemo中保存的是渲染结果， 当依赖项a发生变化时，才重新计算渲染结果，并在渲染阶段执行回调函数；
  const child1 = useMemo(() => <div>
    {console.log('child1重新计算渲染了')}
    <Child a={b} />
  </div>, [a]);

  console.log('是否相等：', child1 === ch);
  ch = child1

  const child2 = <div>
    {console.log('child2重新计算！')}
    <Child a={b} />
  </div>
  
  return (
    <React.Fragment>
      {child1}
      {child2}
    </React.Fragment>
  )
}


const UseMemo = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  return (
    <div>
      <h2>a: {a}========= b: {b}</h2>
      <Parent a={a} b={b} name={'测试'}></Parent>
      <button onClick={() => setA(a+1)}>增加a</button>
      <button onClick={() => setB(b+1)}>增加b</button>
    </div>
  )
}


export default  UseMemo