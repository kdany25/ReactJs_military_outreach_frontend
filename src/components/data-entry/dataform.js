import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Controls from "../Controls/Controls";
import { useForm, Form } from "./useForm";
import * as departements from "./DepartementList";

const initialvalues = {
  full: "",
  email: "",
  location: "",
  departementName: "",
  date: new Date(),
};
export default function Dataform() {
  const { values, setValues, handleInputChange } = useForm(initialvalues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={5}>
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
          <Controls.Input
            variant="outlined"
            label="Location"
            name="location"
            value={values.location}
            onChange={handleInputChange}
          />

          <Controls.Input
            variant="outlined"
            label="departement"
            name="departementName"
            value={values.departementName}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="date"
            label="date"
            value={values.date}
            onChange={handleInputChange}
          />
          <Controls.FileInput label="Upload File"/>
          <div>
            <Controls.Button text="submit" />
          </div>
        </Grid>
       
      </Grid>
    </Form>
  );
}
