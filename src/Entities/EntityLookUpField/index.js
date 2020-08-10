import React from "react";
import TextField from '@material-ui/core/TextField';

export default function EntityLookUpField(props) {
    return <TextField id="standard-basic"
        type="search"
        onChange={props.onChange} value={props.value} label={props.placeholder}></TextField>
}