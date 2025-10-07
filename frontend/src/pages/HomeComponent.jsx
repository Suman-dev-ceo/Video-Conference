import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import RestoreIcon from "@mui/icons-material/Restore";
import Button from "@mui/material/Button";
import { AuthContext } from "../contexts/AuthContext";
import TextField from "@mui/material/TextField";

function HomeComponent() {
  let navigate = useNavigate();
  const { handleLogout, addToUserHistory } = useContext(AuthContext);

  const [meetingCode, setMeetingCode] = useState("");

  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>Apna Video Call</h2>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => {
              navigate("/history");
            }}
          >
            <RestoreIcon />
          </IconButton>
          <p>History</p>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>
      <div className="meetContainer">
        <div className="leftPanel">
          <div>
            <h2>Connect distance with you finger tips</h2>
            <div style={{ display: "flex", gap: "10px", marginTop: "1.5rem" }}>
              <TextField
                value={meetingCode}
                onChange={(e) => setMeetingCode(e.target.value)}
                id="outline-basic"
                label="Meeting Code"
                variant="outlined"
              >
                {" "}
              </TextField>
              <Button onClick={handleJoinVideoCall} variant="contained">
                Join
              </Button>
            </div>
          </div>
        </div>
        <div className="rightPanel">
          <img srcSet="/undraw_video-call_i5de.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);
