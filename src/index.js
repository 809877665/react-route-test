import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
  // 打包到服务器时，如果项目目录不是根目录，则需要添加basename属性；
  // 并且在package.json中添加homepage属性； "homepage": "http://121.37.176.72/edu/"；
  // 此时在打包后生成的index.html文件中引入的静态资源文件链接会加上域名后面的目录内容（即/edu/）
  // basename配置参考：https://reactrouter.com/web/api/BrowserRouter/basename-string
  // <HashRouter basename='/edu'>
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
