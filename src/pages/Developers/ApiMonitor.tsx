import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PageTitle from "src/components/Misc/PageTitle";

function ApiMonitor() {
  return (
    <Container maxWidth={false} sx={{ p: 2, m: 0 }}>
      <PageTitle title="API Monitor" />
      <h1>Chart</h1>
      <PageTitle title="Activity" />
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
              <TableCell align="right">Ticket</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ApiMonitor;
