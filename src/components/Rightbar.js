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

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" pr={4}>
        <Typography variant="h6" fontWeight={100} mt={1} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={5} sx={{ cursor: "pointer" }}>
          <Avatar
            alt="Agnes Walker"
            src="https://randomuser.me/api/portraits/women/10.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://randomuser.me/api/portraits/men/94.jpg"
          />
          <Avatar
            alt="John Grimes"
            src="https://randomuser.me/api/portraits/men/33.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://randomuser.me/api/portraits/men/37.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://randomuser.me/api/portraits/women/58.jpg"
          />
          <Avatar
            alt="Diane Minh"
            src="https://randomuser.me/api/portraits/women/5.jpg"
          />
          <Avatar
            alt="May Scott"
            src="https://randomuser.me/api/portraits/women/1.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList gap={6} cols={3} sx={{ cursor: "pointer" }}>
          <ImageListItem>
            <img src="https://picsum.photos/id/237/200" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/id/222/200" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/id/256/200" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/id/127/200" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/id/7/200" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/id/452/200" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://randomuser.me/api/portraits/men/33.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    John Grimes
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
