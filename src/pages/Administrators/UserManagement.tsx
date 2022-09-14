import { Box, Container } from "@mui/material";
import PageTitle from "src/components/Misc/PageTitle";
import UserManagementTable from "src/components/User/UserManagementTable";

function UserManagement() {
  return (
    <Container maxWidth={false} sx={{ p: 2, m: 0 }}>
      <PageTitle title="User Management" />
      <UserManagementTable />
    </Container>
  );
}

export default UserManagement;
