import styled from "@emotion/styled"
import Avatar  from "../../../../assets/images/avatar.jpg"
import Grid from "@mui/material/Grid"
import  Container  from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import Button  from "@mui/material/Button"


const Hero = () => {
  
    const StyledHero = styled("div")(()=> ({    
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(()=> ({    
        width: "100%",
        borderRadius: "50%"
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg"> 
    
            <Grid container spacing={2}>
             <Grid item xs={12} md={4}>
                <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
                <Typography color = "red" variant="h1" textAlign="center">Juan Muniz</Typography>
                <Typography color = "red" variant="h2" textAlign="center">I'm a Software Engineer</Typography>
                <Grid container display="flex" justifyContent="center">
                    <Grid item xs={12} md={4} display="flex" justifyContent="center"> 
                        <Button>
                            <DownloadIcon />    
                                Download CV 
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center"> 
                        <Button>
                            <EmailIcon />
                                Contact me
                        </Button>
                    </Grid>
                </Grid>
             </Grid>
            </Grid>
           </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero