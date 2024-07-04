import React from 'react'
import '../footer/Footer.css';
import {Grid} from "@mui/material";
export default function Footer() {
  return (
    <div>
      <Grid container spacing={2} sx={{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:{xs:"center",sm:"center"},backgroundColor:"#111",padding:5,color:"#fff"}}>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12} >

      <h1 className=''style={{ textAlign:"left"}}>Get In Touch</h1>
          <p className=''style={{ textAlign:"left"}}>Lorem ipsum dolor sit amet consectetur. Sit molestie pellentesque a amet sit. Pharetra mauris malesuada lorem quis accumsan sed augue mattis. Sagittis gravida gravida amet amet nisi turpis adipiscing cursus nisi. Est ac elit convallis velit.
          Lorem ipsum dolor sit amet consectetur. Sit molestie pellentesque a amet sit. Pharetra mauris malesuada lorem quis accumsan sed augue mattis. Sagittis gravida gravida amet amet nisi turpis adipiscing cursus nisi. Est ac elit convallis velit.
          </p>
      </Grid>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12} >
      <h1 className=''style={{ textAlign:"right"}}>Contact Us</h1>
         <p style={{ textAlign:"right"}}>+91 9876543210</p>
         <p style={{ textAlign:"right"}}>mailus@gmail.com</p>
      </Grid>
   </Grid>
    </div>
  )
}
