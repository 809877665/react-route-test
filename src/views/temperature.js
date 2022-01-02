// import React from 'react';
import { Component } from 'React'

// 摄氏温度转为华氏温度
function toCelsius (fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// 华氏温度转为摄氏温度
function toFahrenheit (celsius) {
  return (celsius * 9 / 5) + 32;
}

/**
 * @description: 摄氏温度和华氏温度相互转化
 * @param {*} temperature: 传入的温度值；
 * @param {*} convert：函数名称；toCelsius/toFahrenheit
 * @returns 
 */
function tryConvert (temperature, fn) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = fn(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// 定义输入温度的输入框组件
class TemperatureInput extends Component {
  handleChange = (e) => {
    this.props.temperatureChange(e.target.value)
  }
  render() {
    let {temperature, scale} = this.props
    return (
      <fieldset>
        <label>{scale==='S'? '摄氏温度': '华氏温度'}：</label>
        <input value={temperature} onChange={this.handleChange}></input>
      </fieldset>
    )
  }
}

// 华氏温度和摄氏温度的相互转换案例；
// 状态提升
class Temperature extends Component {
  state = {
    temperature: '',
    scale: 'S'
  }
  // 设置温度改变了
  temperatureChange1 = (val)=> {
    this.setState ({
      temperature: val,
      scale: 'S'
    })
  }
  // 华氏温度改变了
  temperatureChange2 = (val)=> {
    this.setState ({
      temperature: val,
      scale: 'H'
    })
  }
  render () {
    let {temperature, scale} = this.state
    // 摄氏温度
    const celsius = scale === 'H' ? tryConvert(temperature, toCelsius) : temperature
    // 华氏温度
    const fahrenheit = scale === 'S' ? tryConvert(temperature, toFahrenheit) : temperature
    return (
      <div>
        <TemperatureInput temperature={celsius} temperatureChange={this.temperatureChange1} scale='S'></TemperatureInput>
        <br></br>
        <TemperatureInput temperature={fahrenheit} temperatureChange={this.temperatureChange2} scale='H'></TemperatureInput>
      </div>
    )
  }
}

export default Temperature