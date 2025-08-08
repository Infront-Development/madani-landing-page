import { Stack, Typography } from "@mui/material";
import {
  LinkedIn,
  Facebook,
  Instagram,
  Language,
  Phone,
  Email,
} from "@mui/icons-material";

import { 
  textConst, 
  link,
} from "../assets/text";
import {
   InfrontLogo2,
} from "../assets/images";

export const Footer = ({fixWidth, view}: {fixWidth: string, view: string}) => {
  const isWeb = view === "web";
  return (
    <Stack width={fixWidth} flexDirection={isWeb ? "row" : "column"} justifyContent="space-between" gap="36px">
      <Stack gap="33px">
        <Stack gap="6px" width="331px">
          <img src={InfrontLogo2} alt="infront-logo" width="229px" height="121px"  onClick={()=> window.open(link.mainPage, "_blank")} style={{cursor: "pointer"}}/>
          <Typography fontSize="16px" fontWeight={isWeb ? "600" : "400"} color="#D7DBDF">{textConst.vision}</Typography>
        </Stack>
        <Stack gap="29px" flexDirection="row">
          <Facebook onClick={()=> window.open(link.facebook, "_blank")} sx={{color: "#FFF", cursor: "pointer"}}/>
          <LinkedIn onClick={()=> window.open(link.linkedin, "_blank")} sx={{color: "#FFF", cursor: "pointer"}} />
          <Instagram onClick={()=> window.open(link.instagram, "_blank")} sx={{color: "#FFF", cursor: "pointer"}} />
          <Language onClick={()=> window.open(link.mainPage, "_blank")} sx={{color: "#FFF", cursor: "pointer"}} />
        </Stack>
      </Stack>
      <Stack justifyContent="center" alignItems={isWeb ? "end" : "start"} gap="16px">
        <Typography fontSize="20px" fontWeight="500" color="#FBFCFD">{textConst.contactUs}</Typography>
        <Stack flexDirection={isWeb ? "row" : "row-reverse"} gap="8px">
          <Typography fontSize={isWeb ? "18px" : "16px"} fontWeight="400" color="#D7DBDF">{textConst.phone}</Typography>
          <Phone sx={{color: "#FBFCFD"}}/>
        </Stack>
        <Stack flexDirection={isWeb ? "row" : "row-reverse"} gap="8px">
          <Typography fontSize={isWeb ? "18px" : "16px"} fontWeight="500" color="#D7DBDF">{textConst.email}</Typography>
          <Email sx={{color: "#FBFCFD"}}/>
        </Stack>
      </Stack>
    </Stack>
  )
};

export default Footer;