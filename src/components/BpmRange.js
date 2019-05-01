import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

class BpmRange extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: { min: this.props.minCadence, max: this.props.maxCadence},
         }
    }
    render() { 
        return ( 
            <InputRange
                maxValue={200}
                minValue={20}
                value={this.state.value}
                onChange={value => this.setState({ value })} 
            />
        ); 
    }
}
 
export default BpmRange;