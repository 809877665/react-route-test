import { useEffect, useState } from "react"

const UseEffect = function() {
  const [isLoad,setIsLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false)
    }, 2000)
  })

  // 实现两秒之后数据加载完成
  return (
    isLoad ? <p>加载中......</p> : <p>加载完成！</p>
  )
}

export default UseEffect