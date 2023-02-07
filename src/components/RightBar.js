import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      // bgcolor="yellow"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={12}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Bignose Geezer"
            src="https://images.pexels.com/photos/3970387/pexels-photo-3970387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Depressed woman"
            src="https://images.pexels.com/photos/6716611/pexels-photo-6716611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList
          sx={{ width: 500, height: 450 }}
          cols={3}
          rowHeight={100}
          gap={5}
        >
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/732917/pexels-photo-732917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="diy christmas tree"
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/3194609/pexels-photo-3194609.jpeg"
              alt="diy shoe plant pot"
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2660262/pexels-photo-2660262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="diy wood pieces aftrica"
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1466434/pexels-photo-1466434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="diy glass terrerium"
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2012/12/03/14/12/head-68536_1280.jpg"
              alt=" wood carved face"
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1029021/pexels-photo-1029021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="purple bougainvillea"
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: 500, maxWidth: 360, bgcolor: "background.paper" }}
          
        >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="bignose geezer"
                  src="https://images.pexels.com/photos/3970387/pexels-photo-3970387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Old days?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Bignose Geezer
                    </Typography>
                    {" — I think i left something somewhere along the way"}
                  </React.Fragment>
                }
              />
            </ListItem>

          <Divider variant="inset" component="li" />
          
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar 
              alt="Depressed woman" 
              src="https://images.pexels.com/photos/6716611/pexels-photo-6716611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </ListItemAvatar>
            <ListItemText
              primary="In Bed though"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
