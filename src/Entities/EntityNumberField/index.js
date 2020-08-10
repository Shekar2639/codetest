import React from "react";
import TextField from '@material-ui/core/TextField';

export default function EntityNumberField(props) {
    return <TextField id="standard-basic" onChange={props.onChange} value={props.value}
        type="number"
        label={props.placeholder}></TextField>
}