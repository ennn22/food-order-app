import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AboutUs = () => {

  return (
    <>
      <Accordion sx={{ backgroundColor: "#4F4A45", color: "#F6F1EE" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#F6F1EE" }}/>}
          aria-controls="content"
        >
          <Typography variant='h6'>About Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1'>
            Welcome to Penang Flavor Delights - Your Gateway to Authentic Penang Cuisine!
            At Penang Flavor Delights, we are passionate about bringing the tantalizing flavors 
            of Penang right to your doorstep. We understand that the love for Penang's rich 
            culinary heritage transcends geographical boundaries, and we're here to make 
            sure you can savor the tastes and aromas of this food paradise no matter 
            where you are.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      <Accordion sx={{ backgroundColor: "#4F4A45", color: "#F6F1EE", marginTop: "5px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#F6F1EE" }}/>}
          aria-controls="content"
        >
          <Typography variant='h6'>Our Food</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1'>
            Our menu features a delectable array of Penang's signature dishes, 
            prepared by skilled chefs who have honed their craft in the heart of this 
            food haven. From the mouthwatering Char Kway Teow, aromatic Penang Laksa, 
            and flavorful Nasi Kandar to the sweet delights of Cendol and Ais Kacang, 
            every dish is a tribute to the rich culinary heritage of Penang. We use only 
            the freshest and finest ingredients, ensuring that every bite takes you on a 
            journey to the vibrant streets and bustling markets of Penang.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default AboutUs;