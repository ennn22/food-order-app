import { Button, IconButton, Typography } from "@mui/material";
import { Box } from '@mui/material'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useItemContext } from "../Store/ItemsProvider.js";

const Footer = () => {

  const { switchPage, setSwitchPage } = useItemContext();

  return (
    <Box className="footer">
      <Box className="switchpage-btn-container">
        <IconButton 
          onClick={() => setSwitchPage(!switchPage)}
        >  
          <PermIdentityIcon sx={{ color: "#451a03" }} />
            <Typography variant="h6" sx={{ color: "#451a03" }}>
              {switchPage ? "Admin" : "Users"}
            </Typography>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Footer;