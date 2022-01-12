import { Paper, makeStyles } from "@material-ui/core";
import React from "react";
import Dataform from "./dataform";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
export default function DataEntry() {
  const classes = useStyles();
  return <Dataform />;
}
