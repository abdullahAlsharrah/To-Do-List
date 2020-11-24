import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import DatePicker from "./DataPicker";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

export default function TaskField({ onChange, onTapEnter, value }) {
  const classes = useStyles();

  const handleForm = (e) => {
    e.preventDefault();
    onTapEnter();
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleForm}
    >
      <Input
        // endAdornment={<DatePicker />}
        label="New Task"
        id="standard-full-width"
        placeholder="Type your task here"
        fullWidth
        margin="normal"
        onChange={onChange}
        value={value}
        // className={classes.root}
      />
    </form>
  );
}
