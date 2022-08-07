import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import styles from "./login.module.scss";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";

declare var google: any;

function Login() {
  const [test, setTest] = useState(0);

  const navigate = useNavigate();

  function handleCallbackResponse(response: any) {
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log("🚀 ~ file: Login.tsx ~ userObject", userObject);
    navigate("/");
  }

  useEffect(() => {
    /* global google */
    try {
      google.accounts.id.initialize({
        client_id:
          "539477567872-310ce5747g76plc8hbaoa4ll2v3v19kk.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
      });
    } catch (err) {
      console.error(err);
    }
  }, [test]);

  return (
    <>
      <div className={styles.background}>
        <div className={styles.mainContainer}>
          <h2 className={styles.welcomeText}>Welcome</h2>
          {test === 0 && (
            <IconButton
              aria-label="delete"
              size="small"
              color="inherit"
              onClick={() => setTest(test + 1)}
            >
              <GoogleIcon />
            </IconButton>
          )}
          {test !== 0 && <div id="signInDiv"></div>}
        </div>
      </div>
    </>
  );
}

export default Login;
