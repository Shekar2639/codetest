import React from "react";
import entityMeta from './data/entityMeta.json';
import initialEntityData from './data/entityData.json';
import EntityTextField from './EntityTextField';
import EntityDateField from './EntityDateField';
import EntityNumberField from "./EntityNumberField";
import EntityLookUpField from "./EntityLookUpField";
import { makeStyles } from '@material-ui/core/styles';
import { Field, Form, Formik } from 'formik';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const DynamicEntityForm = () => {
    const classes = useStyles();
    return (
        <div style={{marginBottom:"3rem"}}>
            <h3 style={{ color: "black" }}>{entityMeta.label}</h3>
            <Formik
                initialValues={initialEntityData}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
                validate={values => {
                    //validate here.
                }}
            >
                {(props) => (
                    <Form className={classes.root} noValidate autoComplete="off">
                        {
                            entityMeta.field.map(((formfield, indx) => {
                                switch (!formfield.system && formfield.dataType) {
                                    case "Integer":
                                    case "Decimal":
                                        return <Field name={formfield.name} placeholder={formfield.label} component={EntityNumberField} data={formfield}
                                            onChange={e => props.setFieldValue(formfield.name, e.target.value)}
                                            value={props.values[formfield.name]}
                                        />
                                    case "String":
                                        return <Field name={formfield.name} placeholder={formfield.label} component={EntityTextField} data={formfield}
                                            onChange={e => props.setFieldValue(formfield.name, e.target.value)}
                                            value={props.values[formfield.name]}
                                        />
                                    case "lookup":
                                        return <Field name={formfield.name} placeholder={formfield.label} component={EntityLookUpField} data={formfield}
                                            onChange={e => props.setFieldValue(formfield.name, e.target.value)}
                                            value={props.values[formfield.name]}
                                        />
                                    case "Date":
                                        return <Field name={formfield.name} placeholder={formfield.label} component={EntityDateField} data={formfield}
                                            onChange={e => props.setFieldValue(formfield.name, e.target.value)}
                                            value={props.values[formfield.name]}
                                        />
                                    default:
                                        return null;
                                }
                            }))
                        }
                            <Grid container justify="space-evenly" direction="row" style={{float:"right"}}>
                                <Button type="submit" variant="contained" color="primary" style={{marginTop:"0.5rem"}}>
                                Submit</Button>
                            </Grid>

                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default DynamicEntityForm;