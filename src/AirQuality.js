import React, { Component } from 'react';
import axios from 'axios';

import AirQualityListItem from './AirQualityListItem';
import './AirQuality.css';

const URL = 'https://api.openaq.org/v1/measurements';

class AirQuality extends Component {
    state = {
        data: null,
        input: '',
        isLoading: false
    };

    handleInput = (e) => {
        this.setState({
            input: e.target.value,
        });
    }

    handleClick = () => {
        this.setState({
            isLoading: true,
        });
        //叫promise上的Function
        //正常运行用then
        axios.get(URL, {
            params: {
                country: this.state.input,
            }
        })
            .then(response => {
                this.setState({
                    isLoading: false,
                    data: response.data,
                });
            })    //链式调用不加分号,results数组
            .catch(error => console.log(error));
        //catch 捕获异常

    }//调用成员变量，值是函数，react专属

    render() {
        // 逻辑地包在一起，三种写法： <React.Fragment>, <Fragment>, <>
        return <div className="AirQualityList">
            <h1>Your Weather Station</h1>

            <input type="text" onInput={this.handleInput} />

            <button type="submit" onClick={this.handleClick}>
                {this.state.isLoading ? 'Loading…' : 'Search'}
            </button>


            {this.state.data && <div> {/* 保护性检查 */}

                {this.state.data.results.map(item => /* 把每一组数据循环调用 */
                    <AirQualityListItem
                        location={item.location}
                        parameter={item.parameter}
                        value={item.value}
                    />
                )}
            </div>}
            {/* 必须加大括号 */}
        </div>
    }
}

export default AirQuality;
