import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

function History() {
  const { getHistoryofUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryofUser();
        setMeetings(history);
      } catch (error) {
        //IMPLEMENT SNACKBAR
      }
    };
    fetchHistory();
  }, [getHistoryofUser]);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <>
      <IconButton
        onClick={() => {
          routeTo("/home");
        }}
      >
        <HomeIcon />{" "}
        <h4 style={{ color: "black", marginLeft: "2.5rem" }}>
          List of previous meetings
        </h4>
      </IconButton>

      {meetings.length !== 0 ? (
        meetings.map((meeting, idx) => (
          <>
            <Card variant="outlined" key={idx}>
              {" "}
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  Code: {meeting.meetingCode}
                </Typography>

                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  Date: {formatDate(meeting.date)}
                </Typography>
              </CardContent>
            </Card>
          </>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default History;
