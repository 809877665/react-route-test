import React, { useReducer } from "react";

const UseReducer = function() {
  const reducer = (state,action) => {
    if(action.type === 'add') {
      return {
        ...state,
        count: state.count+1
      }
    }else {
      return state
    }
  }
  const addCount = () => {
    dispatch({
      type: 'add'
    })
  }

  const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <div>
       <p>{state.count}</p>
       <button onClick={addCount}>增加</button>
    </div>
  )
}

export default UseReducer