import { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";

// MUI Components
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

// Mixins
import { getRequestConfig } from "src/mixins";
import { useSelector } from "react-redux";

function UserManagementTable() {
  const { user } = useSelector((state: any) => state.auth);
  const [users, setUsers] = useState(user);
  useEffect(() => {
    axios
      .get("/api/user/user-list", getRequestConfig())
      .then((res) => {
        setUsers(res.data.userList);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to get users from DB");
      });
  }, []);

  return (
    <>
      <TableContainer>
        <Table aria-label="User management table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Roles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0 &&
              users.map((user: any, idx: number) => (
                <TableRow key={idx}>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        alt={user.name + " avatar"}
                        src={user.picture}
                        sx={{ mr: 2, py: 0 }}
                      >
                        {user.name[0]}
                      </Avatar>
                      {user.name}
                    </Box>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell align="right">
                    <Box display="flex" alignItems="center">
                      {JSON.stringify(user.roles)}
                      <EditIcon sx={{ ml: 2 }} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default UserManagementTable;
