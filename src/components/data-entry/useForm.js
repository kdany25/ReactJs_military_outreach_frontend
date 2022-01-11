import React,{useState} from "react";
import {makeStyles , useStyles} from "@material-ui/core"

export  function useForm(initialvalues) {
  const [values, setValues] = useState(initialvalues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiFormControl-root": {
        width: "80%",
        margin: theme.spacing(1),
      },
    },
  }));

export  function Form(props) {
    const classes = useStyles();
    return (
        <form className={classes.root}>
{props.children}
        </form>
    )
}


