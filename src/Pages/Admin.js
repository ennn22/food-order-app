import Sidebar from '../Components/Sidebar';
import Main from '../Components/Main';
import { Grid } from '@mui/material';

const Admin = () => {
  return (
    <Grid className="admin-main-container" container spacing={1}>
      <Grid className="admin-side-bar" item sm={2} sx={{ height: "100%" }}>
        <Sidebar />
      </Grid>
      <Grid className="admin-main" item sm={10}>
        <Main />
      </Grid>
    </Grid>
  );
};

export default Admin;