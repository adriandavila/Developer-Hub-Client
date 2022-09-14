import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function ActivityTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell>Date / Time</TableCell>
            <TableCell>Route</TableCell>
            <TableCell align="right">Method</TableCell>
            <TableCell align="right">HTTP</TableCell>
            <TableCell align="right">Error</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
}

export default ActivityTable;
