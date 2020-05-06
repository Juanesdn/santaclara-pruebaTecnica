import React, { useEffect } from "react";
import {
  Container,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getRules, getRuleGroup } from "../../actions";

const Rules = () => {
  const { rules } = useSelector((state) => state.rules);
  const dispatch = useDispatch();
  console.log(rules);

  useEffect(() => {
    dispatch(getRules());
  }, []);

  const handleRowClick = (id) => {
    dispatch(getRuleGroup(id));
  };

  return rules ? (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Group</TableCell>
              <TableCell align="right">OS</TableCell>
              <TableCell align="right">Severity</TableCell>
              <TableCell align="right">has fix</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rules.map((rule) => (
              <TableRow
                hover={true}
                onClick={() => handleRowClick(rule.id)}
                key={rule.id}
              >
                <TableCell component="th" scope="row">
                  {rule.name}
                </TableCell>
                <TableCell align="right">{rule.title}</TableCell>
                <TableCell align="right">{rule.group_read}</TableCell>
                <TableCell align="right">{rule.servers[0].os}</TableCell>
                <TableCell align="right">{rule.severity}</TableCell>
                <TableCell align="right">
                  {rule.has_fix ? (
                    <Chip color="primary" label="True" />
                  ) : (
                    <Chip color="secondary" label="False" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  ) : (
    <CircularProgress
      size={40}
      left={-20}
      top={10}
      status={"loading"}
      style={{
        marginLeft: "50%",
        marginTop: 20,
      }}
    />
  );
};

export default Rules;
