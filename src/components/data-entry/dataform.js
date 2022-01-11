import { FormControl, Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Controls } from "../Controls/Controls";
import { useForm, Form } from "./useForm";

const initialvalues = {
  full: "",
  email: "",
  location: "",
  departement: "",
  date: new Date(),
};
export default function Dataform() {
  const { values, setValues, handleInputChange } = useForm(initialvalues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="full"
            label="Full Name"
            value={values.full}
            onChange={handleInputChange}
          />

          <Controls.Input
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl></FormControl>
        </Grid>
      </Grid>
    </Form>
  );
}
