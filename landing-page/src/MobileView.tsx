import {
  Stack,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  Select,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  MenuItem,
} from "@mui/material";
import { 
  CheckCircle,
  East,
  KeyboardArrowDown,
  AddCircle,
  ArrowCircleDown,
  LinkedIn,
  Facebook,
  Instagram,
  Language,
  Phone,
  Email,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import SampleProjectImages from './components/SampleProjectImages';

import InfrontLogo from "./assets/images/Infront_Logo_With_CDB_Logo_1.png";
import InfrontLogo2 from "./assets/images/Infront_Logo_With_CDB_Logo_2.png";
import mdeclogo from "./assets/images/mdeclogo.png";
import bsnlogo from "./assets/images/bsnlogo.png";
import madanilogo from "./assets/images/madanilogo.png";
import mcmclogo from "./assets/images/mcmclogo.png";
import Frame_4 from "./assets/images/Frame_4.png";
import altHR from "./assets/images/altHR.svg";
import headbackground from "./assets/images/headbackground.png";
import madanibackground from "./assets/images/madanibackground.png";
import altHR_banner from "./assets/images/altHR_banner.png";
import EMIS360_banner from "./assets/images/EMIS360_banner.png";
import OMNI_banner from "./assets/images/OMNI_banner.png";
import inSuite_banner from "./assets/images/inSuite_banner.png";

const containerStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}
const buttonStyle = {
  textTransform: "none",
  boxShadow: "none",
  borderRadius: "16px"
}

function MobileView() {
  const emisRef = useRef(null);
  const altHrRef = useRef(null);
  const inSuiteRef = useRef(null);
  const omniRef = useRef(null);
  const formRef = useRef(null);
  const stepByStepRef = useRef(null);
  const solutionRef = useRef(null);
  const [solution, setSolution] = useState();
  const [orgSize, setOrgSize] = useState();
  const [region, setRegion] = useState();

  return (
    <Stack>
        <Stack flex={1} p="16px 24px">
            <img src={InfrontLogo} alt="Infront logo" width="122px" height="64px"/>
        </Stack>
        <Stack p="8px" bgcolor="#FE5000" direction="row" alignItems="center" justifyContent="space-between">
            <Typography px="8px" fontSize="16px" fontWeight="600" color="#FBFCFD">Starting from RM8/mth</Typography>
            <Button variant="contained" sx={{...buttonStyle, py: "0px", bgcolor: "#FFF", fontSize:"16px", fontWeight:"600", color:"#000"}}>Claim Offer</Button>
        </Stack>
        <Stack py="40px" flexDirection="row" justifyContent="center">
          <Stack flex={1} alignItems="center">
            <Typography fontSize="24px" fontWeight="600" color="#000000">Digitalize your business</Typography>
            <Typography fontSize="20px" fontWeight="600" color="#7E868C">with up to</Typography>
            <Stack flexDirection="row" alignItems="center" gap="16px">
              <Typography fontSize="48px" fontWeight="600" color="#FE5000">RM5000 </Typography>
              <Typography mt="12px" fontSize="32px" fontWeight="600" color="#000000">Grant</Typography>
            </Stack>
            <img src={Frame_4} alt="Devices" width="390px" height="280px" />
            <Stack gap="12px" alignItems="center" justifyContent="center">
                <Button variant="contained" fullWidth sx={{...buttonStyle, bgcolor: "#FE5000", fontSize:"20px", fontWeight:"600", color:"#FBFCFD" }}>Go Digital Now</Button>
                <Button variant="outlined" fullWidth sx={{...buttonStyle, bgcolor: "#FBFCFD", borderColor: "#FE5000", fontSize: "20px", fontWeight: "600", color: "#FE5000"}}>Browse Product</Button>
                <Stack p="16px 24px" gap="8px" borderRadius="16px" sx={{background: `linear-gradient(90deg, rgba(249, 249, 249, 0.40) 0%, rgba(253, 253, 253, 0.40) 100%)`}}>
                    <Typography fontSize="12px" fontWeight="400" color="#687076">An Initiative Under</Typography>
                    <Stack display="flex" flexDirection="row" gap="12px">
                        <img src={madanilogo} alt="madani" width="64px" height="24px" />
                        <img src={bsnlogo} alt="bsn" width="64px" height="24px" />
                        <img src={mcmclogo} alt="mcmc" width="64px" height="24px" />
                        <img src={mdeclogo} alt="mcmc" width="64px" height="24px" />
                    </Stack>
                </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack py="40px" alignItems="center" justifyContent="center">
          <Stack justifyContent="center">
            <img src={madanilogo} alt="madani" width="240px" height="92px" />
          </Stack>
          <Stack >
            <Typography fontSize="32px" fontWeight="600" color="#00254D">Madani PMKS Digital Grant</Typography>
            <Stack gap="16px">
              <Typography fontSize="20px" fontWeight="600" color="#11181C">The Madani PMKS Digital Grant is a government grant to help Malaysian micro, small, and medium enterprises (PMKS) use digital solutions to improve their business. </Typography>
              <Stack gap="4px">
                <Stack flexDirection="row" gap="4px" alignItems="center">
                  <CheckCircle sx={{color: "#ED5F00"}}/>
                  <Typography fontSize="20px" fontWeight="400" color="#11181C">50% matching grant or up to RM5,000 per company.</Typography>
                </Stack>
                <Stack flexDirection="row" gap="4px" alignItems="center">
                  <CheckCircle sx={{color: "#ED5F00"}}/>
                  <Typography fontSize="20px" fontWeight="400" color="#11181C">Managed by: Ministry of Finance, BSN, MDEC & MCMC.</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
    </Stack>
  );
}

export default MobileView;
