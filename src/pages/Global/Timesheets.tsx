import { Container } from "@mui/material";
import PageTitle from "src/components/Misc/PageTitle";

function Timesheets() {
  return (
    <Container maxWidth={false} sx={{ p: 2, m: 0 }}>
      <PageTitle title="Timesheets" />
    </Container>
  );
}

export default Timesheets;
