import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";

import styles from "./login.module.scss";

function Login() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.mainContainer}>
          <h2 className={styles.welcomeText}>Welcome</h2>
          <IconButton href="/" color="inherit">
            <GoogleIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Login;
