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
      <Table aria-label="API logs table">
        <TableHead>
          <TableRow>
            <TableCell aria-label="expand buttons column" />
            <TableCell aria-label="green or red circle column indicating good or error response" />
            <TableCell>Date / Time</TableCell>
            <TableCell>Route</TableCell>
            <TableCell align="right">Method</TableCell>
            <TableCell align="right">HTTP</TableCell>
            <TableCell align="right">Error</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell
              align="right"
              aria-label="actions - create ticket / delete log"
            />
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
}

export default ActivityTable;
