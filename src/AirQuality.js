import React, { Component } from 'react';

import AirQualityListItem from './AirQualityListItem';
import './AirQuality.css';


class AirQuality extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        input: '',
    };

    handleInput = (e) => {
        this.setState({
            input: e.target.value,
        });
    }

    render() {
        // 逻辑地包在一起，三种写法： <React.Fragment>, <Fragment>, <>
        return <div className="AirQualityList">
            <h1>Your Weather Station</h1>

            <input type="text" onInput={this.handleInput} />

            <button type="submit" onClick={() => this.props.onFetch(this.state.input)}>
                {this.props.isLoading ? 'Loading…' : 'Search'}
            </button>


            {!!this.props.aqs.length && <div> {/* 保护性检查 */}
                {this.props.aqs.map(item => /* 把每一组数据循环调用 */
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
