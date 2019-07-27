import React from 'react';
import './AirQualityListItem.css';

const AirQualityListItem = (props) => {
    return (<div className="AirQualityListItem">
        <span>{props.location}</span>
        <span>{props.parameter}</span>
        <span>{props.value}</span>
    </div>);
}

export default AirQualityListItem;