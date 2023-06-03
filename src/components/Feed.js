import { Box } from "@mui/material";
import Post from "./Post";

function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post imgurl="https://picsum.photos/800/600" />
      <Post imgurl="https://picsum.photos/700/600" />
      <Post imgurl="https://picsum.photos/800/500" />
      <Post imgurl="https://picsum.photos/700/500" />
    </Box>
  );
}

export default Feed;
