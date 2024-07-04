import React from 'react'
import "../assets/css/Home.css";
import {Card,Grid,Box} from "@mui/material";
import Carousel from "../component/slider/Carousel";
import Testimonial from '../component/slider/Testimonial';
export default function Home() {
  return (
    <>

     <Grid container sx={{display:"flex"}}>

      <Grid container spacing={2} sx={{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:{xs:"center",sm:"center"},padding:10}}>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12} >
          <h1 className='home-heading'>Lorem ipsum dolor sit amet</h1>
          <p className='home-text'>Lorem ipsum dolor sit amet consectetur. Sit molestie pellentesque a amet sit. Pharetra mauris malesuada lorem quis accumsan sed augue mattis. Sagittis gravida gravida amet amet nisi turpis adipiscing cursus nisi. Est ac elit convallis velit.
          Lorem ipsum dolor sit amet consectetur. Sit molestie pellentesque a amet sit. Pharetra mauris malesuada lorem quis accumsan sed augue mattis. Sagittis gravida gravida amet amet nisi turpis adipiscing cursus nisi. Est ac elit convallis velit.
          </p>

           <button style={{
             backgroundColor:"#c2c2c2",
             color:"#111",
             fontWeight:600,
             border:"none",
             display:"flex",
             justifyContent:"flex-start",
             marginTop:"20px",
             padding:"14px",
             borderRadius:"4px"

           }}>Explore now</button>
      </Grid>

      <Grid item xl={6} lg={6} md={12} sm={12} xs={12} >
      <Box sx={{justifyContent:"center",display: { xs: 'center', sm: 'center' ,textAlign:"center"},padding:5}}>
       <Card sx={{ minWidth: 250,minHeight:250, maxWidth: 250,maxHeight:250,backgroundColor:"#111",borderRadius:"4px"}}>
       </Card>
       </Box>
      </Grid>
      </Grid>


{/*  */}


   <Grid container spacing={2} sx={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",textAlign:{xs:"center",sm:"center"},padding:10}}>
     
   <Grid item xl={4} lg={4} md={4} sm={12} xs={12} >
      <h3 className='home-subheading'>The problem</h3>
      <p  className='home-subtext'>Medication errors and Medical Neglicene contribute to 5.2M errors globally. The skills of the medicos contributes to the major share of it.</p>
   </Grid>

   <Grid item xl={4} lg={4} md={4} sm={12} xs={12} >
   <h3 className='home-subheading'>Why the problem prevails ?</h3>
   <p  className='home-subtext'>The type of classroom training provided to healthacre professionals lacks practical experience, training analytics and governance</p>
   </Grid>


   <Grid item xl={4} lg={4} md={4} sm={12} xs={12} >
   <h3 className='home-subheading'>The solution</h3>
   <p  className='home-subtext'>Reducing the medical errors to 50% by creating an ecosystem through immersive and personalized training dashboard using Extended Reality.</p>
   </Grid>

    </Grid>

{/*  */}

{/*  */}

<Grid container spacing={2} sx={{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:{xs:"center",sm:"center"},padding:10,backgroundColor:"#D7D7D7",borderRadius:"4px",margin:10}}>

<Grid item xl={6} lg={6} md={12} sm={12} xs={12} >
      <Box sx={{justifyContent:"center",display: { xs: 'center', sm: 'center' ,textAlign:"center"},padding:5}}>
       <Card sx={{ minWidth: 250,minHeight:250, maxWidth: 250,maxHeight:250,backgroundColor:"#111",borderRadius:"4px"}}>
       </Card>
       </Box>
      </Grid>

      <Grid item xl={6} lg={6} md={12} sm={12} xs={12} >
          <h1 className='home-heading'>Lorem ipsum dolor sit amet</h1>
          <p className='home-text'>Lorem ipsum dolor sit amet consectetur. Sit molestie pellentesque a amet sit. Pharetra mauris malesuada lorem quis accumsan sed augue mattis. Sagittis gravida gravida amet amet nisi turpis adipiscing cursus nisi. Est ac elit convallis velit.
          Lorem ipsum dolor sit amet consectetur. Sit molestie pellentesque a amet sit. Pharetra mauris malesuada lorem quis accumsan sed augue mattis. Sagittis gravida gravida amet amet nisi turpis adipiscing cursus nisi. Est ac elit convallis velit.
          </p>
      </Grid>

      </Grid>

{/*  */}

{/*  */}

<Grid container spacing={2} sx={{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:{xs:"center",sm:"center",md:'center'},padding:10}}>

<Grid item xl={6} lg={6} md={12} sm={12} xs={12} >
      <Box sx={{justifyContent:"center",display: { xs: 'center', sm: 'center' ,textAlign:"center"},padding:5}}>
       <Card sx={{ minWidth: 400,minHeight:400, maxWidth: 400,maxHeight:400,backgroundColor:"#111",borderRadius:"4px"}}>
       </Card>
       </Box>
      </Grid>

      <Grid item xl={6} lg={6} md={12} sm={12} xs={12} >
          <h1 className='home-heading'>Lorem ipsum dolor sit amet</h1>

          <h4 className='home-subtext'>Lorem ipsum dolor sit amet</h4>
          <p className='home-text'>Lorem ipsum dolor sit amet consectetur. Pharetra mauris malesuada lorem quis accumsan sed augue mattis. Sagittis gravida gravida amet amet nisi turpis adipiscing cursus nisi.
       
          </p>

          <h4 className='home-subtext'>Lorem ipsum dolor sit amet</h4>
          <p className='home-text'>Lorem ipsum dolor sit amet consectetur Sit molestie haretra mauris malesuada lorem quis accumsan sed augue mattis. Sagittis gravida gravida amet amet nisi turpis adipiscing cursus nisi.
          </p>

          <h4 className='home-subtext'>Lorem ipsum dolor sit amet</h4>
          <p className='home-text'>Sit molestie pellentesque a amet sit. Pharetra mauris malesuada lorem quis accumsan sed augue mattis. Sagittis gravida gravida amet amet nisi turpis adipiscing 
        
          </p>
      </Grid>

      </Grid>



{/*  */}



{/*  */}

<Grid container spacing={2} sx={{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:{xs:"center",sm:"center"},padding:10,backgroundColor:"#D7D7D7",borderRadius:"4px",margin:10}}>


      <div className='title'> 
      <h1 className=''>Our Products</h1>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, alias</p>
      </div>


       <Carousel/>

      </Grid>
{/*  */}


{/*  */}

<Grid container spacing={2} sx={{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:{xs:"center",sm:"center"},padding:10,backgroundColor:"#D7D7D7",borderRadius:"4px",margin:10}}>

      <Grid item xl={6} lg={6} md={12} sm={12} xs={12} >
          <h1 className='home-heading'>Lorem ipsum dolor sit amet</h1>
          <p className='home-text'>Lorem ipsum dolor sit amet consectetur. Sit molestie pellentesque a amet sit. Pharetra mauris malesuada lorem quis accumsan sed augue mattis. Sagittis gravida gravida amet amet nisi turpis adipiscing cursus nisi. Est ac elit convallis velit.
          Lorem ipsum dolor sit amet consectetur. Sit molestie pellentesque a amet sit. Pharetra mauris malesuada lorem quis accumsan sed augue mattis. Sagittis gravida gravida amet amet nisi turpis adipiscing cursus nisi. Est ac elit convallis velit.
          </p>

          <button style={{
             backgroundColor:"#c2c2c2",
             color:"#111",
             fontWeight:600,
             border:"none",
             display:"flex",
             justifyContent:"flex-start",
             marginTop:"20px",
             padding:"14px",
             borderRadius:"4px"

           }}>Explore now</button>

      </Grid>

      <Grid item xl={6} lg={6} md={12} sm={12} xs={12} >
      <Box sx={{justifyContent:"center",display: { xs: 'center', sm: 'center' ,textAlign:"center"},padding:5}}>
       <Card sx={{ minWidth: 250,minHeight:250, maxWidth: 250,maxHeight:250,backgroundColor:"#111",borderRadius:"4px"}}>
       </Card>
       </Box>
      </Grid>

      </Grid>

{/*  */}


{/*  */}

<Grid container spacing={2} sx={{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:{xs:"center",sm:"center"},backgroundColor:"#D7D7D7",borderRadius:"4px",margin:10}}>

  <Testimonial/>

</Grid>
{/*  */}
      </Grid>
    </>
  )
}
