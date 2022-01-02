import React from 'react';


const messageDetails = [
  {id:1,title:'详细信息1',content:'我爱你祖国'},
  {id:2,title:'详细信息2',content:'我爱你父母'},
  {id:3,title:'详细信息3',content:'我爱你工作'},
]

class MessageDetail extends React.Component {
  

  // 拿到二级路由传递的id值进行匹配显示
  render() {
    console.log('======messageDetail页面====',this.props);
    const id = this.props.match.params.id
    console.log(typeof id);
    const md = messageDetails.find(md=>md.id == id)
    console.log(md);
    return (
      <div>
        <ul>
          <li>id:{md.id}</li>
          <li>title:{md.title}</li>
          <li>content:{md.content}</li>
        </ul>
      </div>
    )
  }
}
export default MessageDetail