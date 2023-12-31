import { IconButton, Typography } from "@mui/material";
import { Box } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useItemContext } from "../Store/ItemsProvider.js";

const Footer = () => {

  const { togglePage, switchPage } = useItemContext();

  return (
    <Box className="switchpage-btn-container">
      <IconButton onClick={() => togglePage()}>  
        <Typography variant="h6" sx={{ color: "#F6F1EE" }}>
          {switchPage ? "Admin" : "Users"}
        </Typography>
        <ArrowForwardIcon sx={{ color: "#F6F1EE", ml: 1 }} />
      </IconButton>
    </Box>
  )
}

export default Footer;