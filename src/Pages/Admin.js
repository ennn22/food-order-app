import Sidebar from '../Components/Sidebar';
import Main from '../Components/Main';
import { Box, Grid } from '@mui/material';

const Admin = () => {
  return (
    <Box className="admin-main">
      {/* <Grid container spacing={2}> */}
        {/* <Grid className="admin-side-bar" item sm={2} sx={{ height: "100%" }}>
          <Sidebar />
        </Grid> */}
      <Main />

      {/* </Grid> */}
    </Box>
  );
};

export default Admin;