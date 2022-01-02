const { Component } = require("react");


function UserGreeting (props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting (props) {
  return <h1>Please sign up.</h1>;
}

function WarningBanner (props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="warning">
      Warning!
    </div> 
  );
}

function ListItem (props) {
  // 正确！这里不需要指定 key：
  return <li>{props.value}</li>;
}

// 根据传入的温度值显示对应文字
function BoilingVerdict (props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function NumberList (props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
          value={number} />
      )}
    </ul>
  );
}


class About extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isToggleOn: true, 
      showWarning: true, 
      inputVal:'', 
      selectVal: '',
      temperature: ''
    };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.submitForm2 = this.submitForm2.bind(this);
  }

  handleClick2(e) {
    e.preventDefault();
    console.log('a链接被点击了；；');
  }

  // 如果用普通函数的话要注意this的指向问题；
  // 箭头函数的话无需考虑
  handleClick () {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleToggleClick () {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  inputChange (event) {
    let name = event.target.name
    let value = name === 'userName' ? event.target.value : event.target.checked
    this.setState({ inputVal: value });
  }

  selectChange = (e) => {
    console.log('下拉选择框改变了', e.target.value);
    this.setState({selectVal: e.target.value})
  }

  submitForm (event) {
    alert('提交的名字: ' + this.state.inputVal);
    event.preventDefault();
  }
  submitForm2 (event) {
    alert('选择的水果: ' + this.state.selectVal);
    event.preventDefault();
  }

  // 输入的温度值改变时触发
  temperatureChange = (event) => {
    this.setState({
      temperature: event.target.value
    })
  }

  render() {
    console.log('render：', this.props);
    let { isLogin } = this.props.match.params
    // 注意： Boolean('false') = true;  Boolean(false) = false
    isLogin = isLogin === 'true'
    const numbers = [1,2,3,4,5]
    const listItems = numbers.map(number => <li key={number+''}>{number}</li>)
    const temperature = this.state.temperature;
    return (
      <div>
         <h2>About组件内容</h2>
         <div>about组件</div>
         <br/>
         <h2>1. a链接默认行为阻止测试</h2>
         <a href="www.baidu.com" onClick={this.handleClick2}>点我</a>
        <br /> <br />
        <h2>2. JSX中this指向问题</h2>
        {/* <button onClick={() => this.handleClick()}> */}
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <br />
        <h2>3. 条件渲染问题：</h2>
        {isLogin ? <UserGreeting /> : <GuestGreeting />}
        <br></br>
        <WarningBanner warn={this.state.showWarning} />
        {/* 点击按钮时内容进行显示和隐藏 */}
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
        <br></br>
        <h2>4. 列表 key渲染</h2>
        <h3>列表渲染</h3>
        <ul>{listItems}</ul>
        <h3>key的正确使用</h3>
        <NumberList numbers={numbers}></NumberList>
        <br></br>
        <h2>5. 表单使用</h2>
        <form onSubmit={this.submitForm}>
          <label>
              名字：
              <input type="text" value={this.state.inputVal} onChange={this.inputChange} name="userName" style={{marginRight: '20px'}}></input>
            <input type="checkbox" value={this.state.inputVal} onChange={this.inputChange} name="isCheck" style={{ marginRight: '20px' }}></input>
              {/* <textarea type="text" value={this.state.inputVal} onChange={this.inputChange}></textarea > */}
          </label>
          <input type="submit" value="提交"></input>
        </form>
        <h4>下拉选择类的表单</h4>
        <form onSubmit={this.submitForm2}>
          <label>
            选择你喜欢的水果
            <select value={this.state.selectVal} onChange={this.selectChange}>
            {/* 开启select的多选 */}
            {/* <select multiple={true} value={['1', '2']}> */}
              <option value="1">香蕉</option>
              <option value="2">苹果</option>
              <option value="3">葡萄</option>
              <option value="4">橘子</option>
            </select>
          </label>
          <input style={{marginLeft: '20px'}} type="submit" value="提交"></input>
        </form>
        <br></br>
        <h2>6. 状态提升</h2>
        <fieldset>
          请输入温度：
          <input value={temperature} onChange={this.temperatureChange} />
          <BoilingVerdict celsius={temperature}></BoilingVerdict>
        </fieldset>

      </div>
    )
  }
}

export default About