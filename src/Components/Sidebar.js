import { Typography } from "@mui/material";


const Sidebar = () => {

  return (
    <Typography 
      sx={{ 
        textAlign: "center", 
        mt: 2, 
        variant: "h4",
        fontSize: {
          xs: 16,
          sm: 18, 
          md: 20, 
          lg: 24
        }}}
    >
        Dashboard
    </Typography>
  )
}

export default Sidebar;