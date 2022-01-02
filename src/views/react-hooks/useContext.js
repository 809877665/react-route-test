import React, { useContext } from "react"

// 跨组件传值
const UseContext = () => {
  const UseContextCon = React.createContext({})
  const Son = () => {
    const {name} = useContext(UseContextCon)
    return (
      <p>我是Son组件 我的名字是{name}</p>
    )
  }
  const Child = () => {
    const {name, age} = useContext(UseContextCon)
    return (
    <p>我是Child组件 我的名字是{name}---{age}</p>
    )
  }
  return (
    <UseContextCon.Provider value={{name: 'context', age:26}}>
      <Son />
      <Child></Child>
    </UseContextCon.Provider>
  )
}

export default UseContext