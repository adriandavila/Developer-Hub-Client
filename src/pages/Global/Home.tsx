import { Container } from "@mui/material";
import PageTitle from "src/components/Misc/PageTitle";

function Home() {
  return (
    <>
      <Container maxWidth={false} sx={{ p: 2, m: 0 }}>
        <PageTitle title="Home" />
      </Container>
    </>
  );
}

export default Home;
