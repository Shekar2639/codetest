import React from "react";
import TextField from '@material-ui/core/TextField';

export default function EntityTextField(props){
    return <TextField id="standard-basic" onChange={props.onChange}  value={props.value} label={props.placeholder}></TextField>
}