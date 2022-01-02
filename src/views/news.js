// import React from 'react';
import {Component} from 'react'

// class News extends React.Component{
class News extends Component{
  // 定义一个实例属性
  state = {
    newsArr: [
      'news001',
      'news002',
      'news003'
    ]
  }
  render() {
    const {newsArr} = this.state
    return (
      newsArr && newsArr.map((ele,index)=>{
        return <li key={index}>{ele}</li>
      })
    )
  }
}

export default News