import React, { Component } from 'react';
import axios from 'axios';
import AirQuality from './AirQuality';

const URL = 'https://api.openaq.org/v1/measurements';

class Container extends Component {
    state = {
        aqs: [],
    }

    handleClick = (input) => {
        this.setState({
            isLoading: true,
        });
        //叫promise上的Function
        //正常运行用then
        axios.get(URL, {
            params: {
                country: input,
            }
        })
            .then(response => {
                this.setState({
                    isLoading: false,
                    aqs: response.data.results,
                });
            })    //链式调用不加分号,results数组
            .catch(error => console.log(error));
        //catch 捕获异常

    }//调用成员变量，值是函数，react专属

    render() {
        return (
            <AirQuality
                onFetch={this.handleClick}
                aqs={this.state.aqs}
                isLoading={this.state.isLoading}
            />
        );
    }
}

export default Container;