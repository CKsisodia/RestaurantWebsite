import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function UserProfileShow() {
  const navigate = useNavigate();
  const userShowData = useSelector((state) => state.user.userProfileData);

  const navToUpdateUserProfile = () => {
    navigate("/profileForm");
  };
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        marginTop: 35,
        maxWidth: 500,
        height: 350,
        flexGrow: 1,
        background: 'linear-gradient(to right bottom, #70db70, #ffff66)',
        
      }}
    >
      <Grid item>
        {userShowData && (
          <div>
            <Img
              alt="complex"
              src={userShowData.photoUrl}
              sx={{ width: 250, height: 250, marginTop: -18, borderRadius:40,backgroundColor:'white' }}
            />
            <h1 style={{ marginLeft: 150 }}>{userShowData.displayName}</h1>
          </div>
        )}

        <Button
          variant="contained"
          color="success"
          startIcon={<EditIcon />}
          sx={{ mt: 9, ml: 16, color: "#FAB522" }}
          onClick={navToUpdateUserProfile}
        >
          Edit Your Profile
        </Button>
      </Grid>
    </Paper>
  );
}
