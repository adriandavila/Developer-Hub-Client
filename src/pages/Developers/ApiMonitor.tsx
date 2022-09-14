import { Container } from "@mui/material";
import PageTitle from "src/components/Misc/PageTitle";
import ActivityTable from "src/components/ApiMonitor/ActivityTable";

function ApiMonitor() {
  return (
    <Container maxWidth={false} sx={{ p: 2, m: 0 }}>
      <PageTitle title="API Monitor" />
      <h1>Chart</h1>
      <PageTitle title="Activity" />
      <ActivityTable />
    </Container>
  );
}

export default ApiMonitor;
