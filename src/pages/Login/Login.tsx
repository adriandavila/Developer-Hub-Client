import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "src/features/auth/authSlice";

// MUI Components
import Fade from "@mui/material/Fade";
import CircularProgress from "@mui/material/CircularProgress";

// MUI Icons
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";

// Styling
import styles from "./login.module.scss";
import { useAppDispatch } from "src/app/hooks";

declare var google: any;

function Login() {
  const [googleScriptLoaded, setGoogleScriptLoaded] = useState(0);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  function handleCallbackResponse(response: any) {
    const token = { token: response };
    dispatch(login(token));
    navigate("/");
  }

  useEffect(() => {
    if (googleScriptLoaded === 0) return;
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
      setGoogleScriptLoaded(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [googleScriptLoaded]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <div className={styles.background}>
        <Fade in timeout={2250}>
          <div className={styles.mainContainer}>
            <h2 className={styles.welcomeText}>Welcome</h2>
            {googleScriptLoaded === 0 && (
              <IconButton
                aria-label="delete"
                size="small"
                color="inherit"
                onClick={() => setGoogleScriptLoaded(googleScriptLoaded + 1)}
              >
                <GoogleIcon />
              </IconButton>
            )}
            {googleScriptLoaded !== 0 && <div id="signInDiv"></div>}
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Login;
