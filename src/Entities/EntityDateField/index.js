import React from "react";
import TextField from '@material-ui/core/TextField';


export default function EntityDateField(props) {
    console.log(props.data.name);
    return <TextField key={props.data.name} onChange={props.onChange} label={props.placeholder}
        type="date"
        InputLabelProps={{
            shrink: true,
        }}
        defaultValue={props.value && (new Date(props.value)).toISOString().split('T')[0]}
    ></TextField>
}