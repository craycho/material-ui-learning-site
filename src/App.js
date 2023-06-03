import { useState } from "react";
import MUITest from "./MUITest";
import Mocksite from "./Mocksite";
import "./App.css";
import {
  Typography,
  AppBar, // Navbar
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline, // Daje default styling componentima
  Grid, // Koristiti za responsive design i positionanje stvari na pageu
  Toolbar,
  Container, // Genericni container
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [showTest, setShowTest] = useState(false);
  const showHandler = () => {
    setShowTest((prev) => !prev);
  };

  return (
    <>
      <Mocksite />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={2}
        ml={2}
        sx={{ width: { xs: "100%", sm: "70%" } }}
      >
        <Typography variant="h4" align="center" mt={4}>
          Show test section? <br />
        </Typography>
        <Typography variant="h6" align="center" mt={1}>
          (Not compatible with sticky &lt;Sidebar/&gt; and &lt;Rightbar/&gt;)
        </Typography>
        <Button
          display="inline"
          size="large"
          variant="contained"
          onClick={showHandler}
          sx={{ marginTop: "20px" }}
        >
          Show section
        </Button>
      </Box>
      {showTest && (
        <>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
              <PhotoCameraIcon className="icon" />
              <Typography variant="h6">Photo Album</Typography>
            </Toolbar>
          </AppBar>
          <main>
            <div className="container">
              <Container maxWidth="sm" sx={{ padding: "80px 0 60px" }}>
                <Typography
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom // margin-bottom
                >
                  Photo Album
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph // paragraph=true === <p></p>
                >
                  This is a photo album and I'm trying to make this sentence as
                  long as possible so we can see how does it look like on the
                  screen
                </Typography>
                <div className="buttons">
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        See my photos
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Secondary action
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
            <Container className="cardGrid" maxWidth="md">
              <Grid container spacing={4}>
                {cards.map(() => (
                  <Grid item key={Math.random()} xs={12} sm={6} md={4}>
                    {/* xs/sm/md = sirine kolona za mobile/small/medium devices, 1-12*/}
                    <Card className="card">
                      <CardMedia
                        className="cardMedia"
                        image="https://picsum.photos/600"
                        title="Image title"
                        // height="350"
                        // sx={{ objectFit: "contain" }}
                      />
                      <CardContent className="cardContent">
                        <Typography gutterBottom variant="h5">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to
                          describe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
          <footer>
            <Container sx={{ padding: "40px 0" }}>
              <Typography variant="h6" align="center" gutterBottom>
                Footer
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
              >
                Something here to give the footer a purpose.
              </Typography>
            </Container>
          </footer>
          <MUITest />
        </>
      )}
    </>
  );
}

export default App;
