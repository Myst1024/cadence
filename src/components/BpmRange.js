import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import InputLabel from '@material-ui/core/InputLabel';
import Tooltip from '@material-ui/core/Tooltip';


class BpmRange extends Component {

    render() { 
        var value = {
            min: this.props.minCadence, max: this.props.maxCadence
        }
        return ( 
            <Tooltip title="Choose a range which is a multiple of your desired workout cadence">
                <div className="bpmRangeContainer">
                    <InputLabel disableAnimation={true} className="bpm_label">Song range: {this.props.minCadence} - {this.props.maxCadence} beats per minute</InputLabel>
                    <InputRange
                        maxValue={200}
                        minValue={50}
                        draggableTrack={true}
                        value={value}
                        formatLabel={e => ""}
                        onChange={value => this.props.updateCadence(value.min, value.max)} 
                        />
                </div>
            </Tooltip>
        ); 
    }
}
 
export default BpmRange;