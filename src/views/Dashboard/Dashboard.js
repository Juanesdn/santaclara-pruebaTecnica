import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { getTopRules, getRuleCompliance } from "../../actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Dashboard = () => {
  const { topRules, ruleCompliance } = useSelector((state) => state.rules);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getTopRules());
    dispatch(getRuleCompliance());
  }, []);

  const COLORS = [
    "#1F77B4FF",
    "#FF7F0EFF",
    "#2CA02CFF",
    "#D62728FF",
    "#9467BDFF",
    "#8C564BFF",
    "E377C2FF",
    "#7F7F7FFF",
    "#BCBD22FF",
    "#17BECFFF",
  ];
  const data = [];
  if (ruleCompliance) {
    data.push({ name: "passed", value: ruleCompliance.passed });
    data.push({ name: "failed", value: ruleCompliance.failed });
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              Rule Compliance
            </Typography>
            <PieChart width={550} height={300}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {topRules.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              Top Rules
            </Typography>
            <PieChart width={550} height={300}>
              <Pie
                data={topRules}
                dataKey="quantity"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {topRules.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
