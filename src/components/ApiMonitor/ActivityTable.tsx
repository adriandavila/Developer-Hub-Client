import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LogoDevOutlinedIcon from "@mui/icons-material/LogoDevOutlined";
import React, { useEffect, useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import { getRequestConfig } from "src/mixins";
import { toast } from "react-toastify";
import { red } from "@mui/material/colors";

function Row(props: { row: any }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <Box display="flex" alignItems="center">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </IconButton>
            <Box
              sx={{
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                outline: "1px solid white",
                display: "inline-block",
              }}
              bgcolor={red[500]}
            />
          </Box>
        </TableCell>

        <TableCell>{row.datetime}</TableCell>
        <TableCell>{row.route}</TableCell>
        <TableCell align="center">{row.method}</TableCell>
        <TableCell align="center">{row.http}</TableCell>
        <TableCell align="right">{row.error}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell>
          <IconButton size="small">
            <LogoDevOutlinedIcon color="secondary" />
          </IconButton>
          <IconButton size="small">
            <DeleteOutlineIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Expansion Content
              </Typography>
              <h1>Content</h1>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function ActivityTable() {
  const [apiLogs, setApiLogs] = useState([] as any[]);
  useEffect(() => {
    axios
      .get("/api/api-logs", getRequestConfig())
      .then((res) => {
        setApiLogs(res.data.apiErrorLogs || []);
      })
      .catch((err) => {
        console.error(err);
        const message = err.response?.data?.message
          ? err.response.data.message
          : "API call to get users failed";
        toast.error(message);
      });
  }, []);

  return (
    <TableContainer>
      <Table aria-label="API logs table">
        <TableHead>
          <TableRow>
            <TableCell aria-label="Column with expand item buttons" />
            <TableCell>Date / Time</TableCell>
            <TableCell>Route</TableCell>
            <TableCell align="center">Method</TableCell>
            <TableCell align="center">HTTP</TableCell>
            <TableCell align="right">Error</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell
              align="right"
              aria-label="actions - create ticket / delete log"
            />
          </TableRow>
        </TableHead>
        <TableBody>
          {apiLogs.map((row, idx) => (
            <Row key={idx} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ActivityTable;
