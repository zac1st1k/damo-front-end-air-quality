import React, { Component } from 'react';
import AirQualityListItem from './AirQualityListItem';
import './AirQuality.css';

const URL = 'https://api.openaq.org/v1/measurements?country=AU';

class AirQuality extends Component {
    state = {
        data: null,
    };

    // 挂载函数 fetch是异步
    componentDidMount() {
        //叫promise上的Function
        //正常运行用then
        fetch(URL)
            .then(response => response.json()) //fetch函数调用json， https://developer.mozilla.org/en-US/docs/Web/API/Body/json
            .then(response => this.setState({
                data: response,
            }))    //链式调用不加分号,results数组
            .catch(error => console.log(error));
        //catch 捕获异常
    }

    handleClick = () => {
        alert("See");
    }//调用成员变量，值是函数，react专属

    render() {
        // 逻辑地包在一起，三种写法： <React.Fragment>, <Fragment>, <>
        return <div className="AirQualityList">
            <h1>Your Weather Station</h1>

            <input type="text" />

            <button type="submit" onClick={this.handleClick}>Search</button>


            {this.state.data && <div> {/* 保护性检查 */}
                {this.state.data.results.map(item => /* 把每一组数据循环调用 */
                    <AirQualityListItem
                        location={item.location}
                        parameter={item.parameter}
                        value={item.vailue}
                    />
                )}
            </div>}
            {/* 必须加大括号 */}
        </div>
    }
}

export default AirQuality;
