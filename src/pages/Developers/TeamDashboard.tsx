import { Container } from "@mui/material";
import PageTitle from "src/components/Misc/PageTitle";

function TeamDashboard() {
  return (
    <Container maxWidth={false} sx={{ p: 2, m: 0 }}>
      <PageTitle title="Team Dashboard" />
    </Container>
  );
}

export default TeamDashboard;
