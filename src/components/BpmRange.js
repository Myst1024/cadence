import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

class BpmRange extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: { min: this.props.minCadence, max: this.props.maxCadence},
            min: 80,
            max: 100
         }
    }
    render() { 
        var value = {
            min: this.props.minCadence, max: this.props.maxCadence
        }
        return ( 
            <div className="bpmRangeContainer">
                <InputRange
                    maxValue={200}
                    minValue={20}
                    draggableTrack={true}
                    value={value}
                    onChange={value => this.props.updateCadence(value.min, value.max)} 
                />
            </div>
        ); 
    }
}
 
export default BpmRange;