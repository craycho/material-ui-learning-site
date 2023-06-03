import { Button, Stack, styled, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function MUITest() {
  const StyledButton = styled(Button)({
    backgroundColor: "purple",
    color: "pink",
    flex: 1,
  });

  const ThemeButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    flex: 1,
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
  }));

  return (
    <>
      <Typography variant="h4" align="center" margin="40px 0">
        Test section
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-evenly"
        maxWidth="700px"
        margin="0 auto"
        sx={{
          maxWidth: { xs: "90%", sm: "700px" },
          maxHeight: "80px",
        }}
      >
        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          size="large"
          color="secondary" // === theme.palette.secondary
          sx={{ flex: 1, fontSize: { xs: "0.7rem", sm: "1rem" } }}
        >
          Button with icon
        </Button>

        <Button
          variant="outlined"
          sx={{
            backgroundColor: "salmon",
            color: "white",
            borderColor: "orange",
            flex: 1,
            fontSize: { xs: "0.7rem", sm: "1rem" },
            "&:hover": {
              backgroundColor: "orangered",
            },
          }}
        >
          Unique button w/ hover
        </Button>
        <StyledButton size="large">Styled button</StyledButton>
        <ThemeButton size="large">Theme primary button</ThemeButton>
      </Stack>
      <Typography variant="h6" component="p" margin="40px" align="right">
        Size is h6 but the DOM element is &lt;p&gt;
      </Typography>
    </>
  );
}

export default MUITest;
