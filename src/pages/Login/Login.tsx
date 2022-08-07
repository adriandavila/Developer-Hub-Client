import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import styles from "./login.module.scss";

declare var google: any;

function Login() {
  function handleCallbackResponse(response: any) {
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log("🚀 ~ file: Login.tsx ~ userObject", userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "539477567872-310ce5747g76plc8hbaoa4ll2v3v19kk.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <>
      <div className={styles.background}>
        <div className={styles.mainContainer}>
          <h2 className={styles.welcomeText}>Welcome</h2>
          <div id="signInDiv"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
