import {
  Stack,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  Select,
  TextField,
  MenuItem,
  Fade,
  Fab,
  FormControl
} from "@mui/material";
import { 
  CheckCircle,
  East,
  KeyboardArrowDown,
  AddCircle,
  LinkedIn,
  Facebook,
  Instagram,
  Language,
  Phone,
  Email,
  AutoAwesome,
  VerticalAlignTop,
} from "@mui/icons-material";
import { useRef, useState, useEffect, RefObject } from "react";
import SampleProjectImages from './components/SampleProjectImages';
import FAQ from "./components/FAQ";
import { useSubmitForm } from "./hooks/useSubmitForm";

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
const fixWidth = "1000px";
const buttonStyle = {
  textTransform: "none",
  boxShadow: "none",
  borderRadius: "16px"
}

function WebView() {
  const emisRef = useRef<HTMLDivElement>(null);
  const altHrRef = useRef<HTMLDivElement>(null);
  const inSuiteRef = useRef<HTMLDivElement>(null);
  const omniRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const stepByStepRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const [scrollToTopButton, setScrollToTopButton] = useState<boolean>(false);
  const { register, handleSubmit, onSubmit, errors } = useSubmitForm();
  
  const scrollTo = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current && ref.current !== null) {
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 144;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };

  useEffect(() => {
      const toggleVisibility = () => {
        if ( window.pageYOffset > 100) {
          setScrollToTopButton(true);
        } else {
          setScrollToTopButton(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  

  return (
    <Stack alignItems="center">
      <Fade in={scrollToTopButton}  timeout={300}>
        <Fab 
          onClick={scrollToTop} 
          sx={{
            position: "fixed", 
            bottom: 24, 
            right: 24, 
            display: scrollToTopButton ? "block" : "hidden",
            alignItems: "center",
            bgcolor: "#FE5000",
            ":hover": {bgcolor: "#ED5F00"}
          }}
        >
          <VerticalAlignTop sx={{mt: "8px", color: "#FFF"}} />
        </Fab>
      </Fade>
      <Stack sx={containerStyle} bgcolor="#FFF"  position="sticky" top={0} zIndex={100}>
        <Stack flex={1} p="16px 24px" width={fixWidth}>
          <img src={InfrontLogo} alt="Infront logo" width="122px" height="64px" onClick={()=> window.open("https://infrontconsulting.asia/", "_blank")} style={{cursor: "pointer"}}/>
        </Stack>
        <Stack sx={containerStyle} bgcolor="#FE5000">
          <Stack p="8px" direction="row" alignItems="center" justifyContent="space-between" width={fixWidth}>
            <Typography fontSize="18px" fontWeight="600" color="#FBFCFD">APPLICATIONS NOW OPEN! Limited Slot Available</Typography>
            <Button variant="contained" sx={{...buttonStyle, py: "2px", bgcolor: "#FFF", fontSize:"16px", fontWeight:"600", color:"#000"}} onClick={()=> scrollTo(formRef)}>Be an Early Applicant</Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack py="40px" sx={{...containerStyle, background: `linear-gradient(180deg, rgba(253, 233, 225, 0.40) 0%, rgba(252, 229, 240, 0.40) 100%), url(${headbackground}) lightgray 50% / cover no-repeat`}} >
        <Stack width={fixWidth} flexDirection="row" justifyContent="center">
          <Stack flex={1}>
            <Typography fontSize="32px" fontWeight="600" color="#000000">Digitalise your business</Typography>
            <Typography fontSize="24px" fontWeight="600" color="#7E868C">with up to</Typography>
            <Stack flexDirection="row" alignItems="center" gap="16px">
              <Typography fontSize="64px" fontWeight="600" color="#FE5000">RM5000 </Typography>
              <Typography mt="12px" fontSize="48px" fontWeight="600" color="#000000">Grant</Typography>
            </Stack>
            <Stack my="16px" flexDirection="row" alignItems="center" gap="12px">
              <Button variant="contained" sx={{...buttonStyle, px: "px", bgcolor: "#FE5000", fontSize:"20px", fontWeight:"600", color:"#FBFCFD" }} onClick={()=> scrollTo(formRef)}>Go Digital Now</Button>
              <Button variant="outlined" sx={{...buttonStyle, px: "24px", bgcolor: "#FBFCFD", borderColor: "#FE5000", fontSize: "20px", fontWeight: "600", color: "#FE5000"}} onClick={()=> scrollTo(solutionRef)}>Browse Product</Button>
            </Stack>
            <Stack p="16px 24px" gap="8px" borderRadius="16px" sx={{background: "linear-gradient(90deg, rgba(249, 249, 249, 0.40) 0%, rgba(253, 253, 253, 0.40) 100%)"}}>
              <Typography fontSize="12px" fontWeight="400" color="#687076">An Initiative Under</Typography>
              <Stack display="flex" flexDirection="row" gap="4px">
                <img src={madanilogo} alt="madani" width="64px" height="24px" />
                <img src={bsnlogo} alt="bsn" width="64px" height="24px" />
                <img src={mcmclogo} alt="mcmc" width="64px" height="24px" />
                <img src={mdeclogo} alt="mcmc" width="64px" height="24px" />
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <img src={Frame_4} alt="Devices" width="100%" height="400px" />
          </Stack>
        </Stack>
      </Stack>
      <Stack py="40px" sx={{...containerStyle, background: `linear-gradient(rgba(255, 255, 255, 0.7)), url(${madanibackground}) lightgray 50% / cover no-repeat`}}>
        <Stack width={fixWidth} flexDirection="row" justifyContent="space-between">
          <Stack justifyContent="center">
            <img src={madanilogo} alt="madani" width="240px" height="92px" />
          </Stack>
          <Stack gap="24px" width="637px">
            <Typography fontSize="48px" fontWeight="600" color="#00254D">Madani PMKS Digital Grant</Typography>
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
      <Stack ref={solutionRef} py="80px" sx={{...containerStyle, background: "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 51.62%, #FFF8F9 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.00) 57.5%, #FFF 100%), var(--Grays-Slate-4, #ECEEF0)"}}>
        <Stack width={fixWidth} alignItems="center">
          <Stack alignItems="center" mb="40px">
            <Typography fontSize="32px" fontWeight="600" color="#000000">Kickstart Your Digital Journey</Typography>
            <Typography fontSize="24px" fontWeight="500" color="#7E868C">with</Typography>
            <Typography mt="-8px" fontSize="48px" fontWeight="600" color="#FE5000">Infront Consulting</Typography>
            <Typography mt="16px" fontSize="20px" fontWeight="600" color="#687076">Officially appointed as a trusted Digitalisation Partner</Typography>
          </Stack>
          <Stack width="100%" gap="24px">
            <Stack gap="24px" flexDirection="row">
              <Stack flex={1} gap="24px" p="24px" borderRadius="16px" sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${EMIS360_banner}) lightgray 50% / cover no-repeat`}}>
                <Stack>
                  <Typography fontSize="16px" fontWeight="600" color="#FE5000">50% Grant</Typography>
                  <Typography fontSize="32px" fontWeight="600" color="#11181C">EMIS 360</Typography>
                  <Typography fontSize="16px" fontWeight="600" color="#687076">Simplified e-Invoicing solution for your business</Typography>
                </Stack>
                <Stack flexDirection="row" gap="12px">
                  <Button variant="outlined" sx={{...buttonStyle, bgcolor: "#FBFCFD", borderColor: "#FE5000", fontSize: "20px", fontWeight: "600", color: "#FE5000"}} onClick={()=> scrollTo(emisRef)}>More Details</Button>
                  <Button variant="contained" sx={{...buttonStyle, bgcolor: "#FE5000", fontSize:"20px", fontWeight:"600", color:"#FBFCFD", borderRadius: "300px" }} endIcon={<East />} onClick={()=> scrollTo(formRef)}>Get Offer</Button>
                </Stack>
              </Stack>
              <Stack flex={1} gap="24px" p="24px" borderRadius="16px" sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${altHR_banner}) lightgray 50% / cover no-repeat`}}>
                <Stack>
                  <Typography fontSize="16px" fontWeight="600" color="#FE5000">50% Grant</Typography>
                  <Stack my="8px">
                    <img src={altHR} alt="alt" width="166px" height="32px"/>
                  </Stack>
                  <Typography fontSize="16px" fontWeight="600" color="#687076">Simplified e-Invoicing solution for your business.</Typography>
                </Stack>
                <Stack flexDirection="row" gap="12px">
                  <Button variant="outlined" sx={{...buttonStyle, bgcolor: "#FBFCFD", borderColor: "#FE5000", fontSize: "20px", fontWeight: "600", color: "#FE5000"}}  onClick={()=> scrollTo(altHrRef)}>More Details</Button>
                  <Button variant="contained" sx={{...buttonStyle, bgcolor: "#FE5000", fontSize:"20px", fontWeight:"600", color:"#FBFCFD", borderRadius: "300px" }} endIcon={<East />}  onClick={()=> scrollTo(formRef)}>Get Offer</Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack gap="24px" flexDirection="row">
              <Stack flex={1} gap="24px" p="24px" borderRadius="16px"  sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${inSuite_banner}) lightgray 50% / cover no-repeat`}}>
                <Stack>
                  <Typography fontSize="16px" fontWeight="600" color="#FE5000">50% Grant</Typography>
                  <Typography fontSize="32px" fontWeight="600" color="#11181C">inSuite</Typography>
                  <Typography fontSize="16px" fontWeight="600" color="#687076">Optimize with productivity tools & cybersecurity</Typography>
                </Stack>
                <Stack flexDirection="row" gap="12px">
                  <Button variant="outlined" sx={{...buttonStyle, bgcolor: "#FBFCFD", borderColor: "#FE5000", fontSize: "20px", fontWeight: "600", color: "#FE5000"}}  onClick={()=> scrollTo(inSuiteRef)}>More Details</Button>
                  <Button variant="contained" sx={{...buttonStyle, bgcolor: "#FE5000", fontSize:"20px", fontWeight:"600", color:"#FBFCFD", borderRadius: "300px" }} endIcon={<East />} onClick={()=> scrollTo(formRef)}>Get Offer</Button>
                </Stack>
              </Stack>
              <Stack flex={1} gap="24px" p="24px" borderRadius="16px"  sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${OMNI_banner}) lightgray 50% / cover no-repeat`}}>
                <Stack>
                  <Typography fontSize="16px" fontWeight="600" color="#FE5000">50% Grant</Typography>
                  <Typography fontSize="32px" fontWeight="600" color="#11181C">OMNI</Typography>
                  <Typography fontSize="16px" fontWeight="600" color="#687076">Unify your calls, chats & meetings in the cloud</Typography>
                </Stack>
                <Stack flexDirection="row" gap="12px">
                  <Button variant="outlined" sx={{...buttonStyle, bgcolor: "#FBFCFD", borderColor: "#FE5000", fontSize: "20px", fontWeight: "600", color: "#FE5000"}}  onClick={()=> scrollTo(omniRef)}>More Details</Button>
                  <Button variant="contained" sx={{...buttonStyle, bgcolor: "#FE5000", fontSize:"20px", fontWeight:"600", color:"#FBFCFD", borderRadius: "300px" }} endIcon={<East />} onClick={()=> scrollTo(formRef)}>Get Offer</Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack alignItems="center" mb="40px">
              <Typography fontSize="18px" fontWeight="400" color="#687076">Capped at RM5,000</Typography>
            </Stack>
          </Stack>
          <Stack my="40px" flexDirection="row" alignItems="center">
            <Typography fontSize="32px" fontWeight="500" color="#687076">Starting from</Typography>
            <Typography ml="6px" fontSize="32px" fontWeight="500" color="#FE5000">RM8</Typography>
            <Typography mt="8px" ml="6px" fontSize="20px" fontWeight="500" color="#687076">monthly /user</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack pt="32px" width={fixWidth} flexDirection="row">
        <Stack mx="24px" gap="24px" sx={{position: "sticky", top: 0}}>
          <Typography fontSize="18px" fontWeight="500" color="#678076">Solutions</Typography>
          <Stack gap="24px">
            <Stack flexDirection="row" alignItems="center" gap="10px" sx={{cursor: "pointer"}} onClick={()=> scrollTo(emisRef)}>
              <Stack borderRadius="16px" bgcolor="#FE5000" width="40px" height="7px"></Stack>
              <Typography fontSize="16px" fontWeight="600" color="#FE5000">EMIS 360</Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap="10px" sx={{cursor: "pointer"}} onClick={()=> scrollTo(altHrRef)}>
              <Stack borderRadius="16px" bgcolor="#DFE3E6" width="40px" height="7px"></Stack>
              <Typography fontSize="16px" fontWeight="600" color="#11181C">altHR</Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap="10px" sx={{cursor: "pointer"}} onClick={()=> scrollTo(inSuiteRef)}>
              <Stack borderRadius="16px" bgcolor="#DFE3E6" width="40px" height="7px"></Stack>
              <Typography fontSize="16px" fontWeight="600" color="#11181C">inSuite</Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap="10px" sx={{cursor: "pointer"}} onClick={()=> scrollTo(omniRef)}>
              <Stack borderRadius="16px" bgcolor="#DFE3E6" width="40px" height="7px"></Stack>
              <Typography fontSize="16px" fontWeight="600" color="#11181C">OMNI</Typography>
            </Stack>
          </Stack>
          <Stack flexDirection="row" alignItems="center" sx={{cursor: "pointer"}} onClick={()=> scrollTo(stepByStepRef)}>
            <KeyboardArrowDown sx={{color: "#ED5F00" }}/>
            <Typography fontSize="14px" fontWeight="600" color="#FE5000">Skip Section</Typography>
          </Stack>
        </Stack>
        <Stack flexDirection="column">
          <Stack ref={emisRef} py="40px" gap="16px" flexDirection="row">
            <SampleProjectImages solution="emis" view="web"/>
            <Stack>
              <Typography fontSize="24px" fontWeight="600" color="#000000">EMIS 360</Typography>
              <Typography fontSize="16px" fontWeight="600" color="#687076">Simplified e-Invoicing solution for your business</Typography>
              <Stack py="16px" gap="16px">
                <Typography fontSize="16px" fontWeight="600" color="#687076">Core Function</Typography>
                <Stack gap="8px">
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="600" color="#FF7536">24/7 Local Support Team</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Dashboard & Analytics</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Seamless ERP Integration</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Batch Invoice Processing</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Export Reports</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Full Compliance with LHDN</Typography>
                  </Stack>
                </Stack>
                <Button 
                  variant="contained" 
                  sx={{...buttonStyle,
                    bgcolor: "#FE5000", 
                    fontSize:"20px", 
                    fontWeight:"600", 
                    color:"#FBFCFD", 
                    borderRadius: "300px", 
                    width: "fit-content" 
                  }} 
                  endIcon={<East />} 
                  onClick={()=> scrollTo(formRef)}
                >
                  Free Consultation
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack ref={altHrRef} py="40px" gap="16px" flexDirection="row">
            <Stack>
              <Stack my="8px">
                <img src={altHR} alt="alt" width="125px" height="24px"/>
              </Stack>
              <Typography fontSize="16px" fontWeight="600" color="#687076">All-in-one HR app for happy teams</Typography>
              <Stack py="16px" gap="16px">
                <Typography fontSize="16px" fontWeight="600" color="#687076">Core Function</Typography>
                <Stack gap="8px">
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="600" color="#FF7536">Easy Leave Application & Approval</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Staff Directory in One Place</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">E-Payslips</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Smart Attendance Tracking</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Share Policies Instantly</Typography>
                  </Stack>
                </Stack>
                <Button 
                  variant="contained" 
                  sx={{...buttonStyle,
                    bgcolor: "#FE5000", 
                    fontSize:"20px", 
                    fontWeight:"600", 
                    color:"#FBFCFD", 
                    borderRadius: "300px", 
                    width: "fit-content" 
                  }} 
                  endIcon={<East />} 
                  onClick={()=> scrollTo(formRef)}
                >
                  Free Consultation
                </Button>
              </Stack>
            </Stack>
            <SampleProjectImages solution="althr" view="web"/>
          </Stack>
          <Divider />
          <Stack ref={inSuiteRef} py="40px" gap="16px" flexDirection="row">
            <SampleProjectImages solution="insuite" view="web"/>
            <Stack>
              <Typography fontSize="24px" fontWeight="600" color="#000000">inSuite</Typography>
              <Typography fontSize="16px" fontWeight="600" color="#687076">Optimize with productivity tools & cybersecurity</Typography>
              <Stack py="16px" gap="16px">
                <Typography fontSize="16px" fontWeight="600" color="#687076">Core Function</Typography>
                <Stack gap="8px">
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="600" color="#FF7536">24/7 Managed Service Team</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Microsoft 365 Tools + Google Workspace</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">IT Support & Setup</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Proactive Monitoring</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Data Backup & Protection</Typography>
                  </Stack>
                </Stack>
                <Stack mt="8px">
                  <Typography fontSize="16px" fontWeight="600" color="#687076">Add-On Available</Typography>
                  <Stack mt="16px" flexDirection="row" gap="4px">
                    <AddCircle sx={{color: "#0081F1"}}/>
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Microsoft Defender Add-On</Typography>
                  </Stack>
                </Stack>
                <Button 
                  variant="contained" 
                  sx={{...buttonStyle,
                    bgcolor: "#FE5000", 
                    fontSize:"20px", 
                    fontWeight:"600", 
                    color:"#FBFCFD", 
                    borderRadius: "300px", 
                    width: "fit-content" 
                  }} 
                  endIcon={<East />} 
                  onClick={()=> scrollTo(formRef)}
                >
                  Free Consultation
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack ref={omniRef} py="40px" gap="16px" flexDirection="row">
            <Stack>
              <Stack flexDirection="row" alignItems="center" gap="16px">
                <Typography fontSize="24px" fontWeight="600" color="#000000">OMNI</Typography>
                <Stack p="4px 12px" borderRadius="16px" flexDirection="row" alignItems="center" gap="4px" sx={{background: "linear-gradient(90deg, #FFE7DA 0%, #FFF7E8 100%)"}}>
                  <AutoAwesome sx={{color: "#FE5000"}} />
                  <Typography mt="2px" fontSize="14px" fontWeight="600" color="#FE5000">AI-Powered</Typography>
                </Stack>
              </Stack>
              <Typography fontSize="16px" fontWeight="600" color="#687076">Unify your calls, chats & meetings in the cloud</Typography>
              <Stack py="16px" gap="16px">
                <Typography fontSize="16px" fontWeight="600" color="#687076">Core Function</Typography>
                <Stack gap="8px">
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="600" color="#FF7536">Unlimited Incoming Calls</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#FF7536">1x Business DID Number</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Comprehensive Call Recording</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">AI Driven Transcription & Analytics</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">Security & Remote Access</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}} />
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">System Report</Typography>
                  </Stack>
                </Stack>
                <Button 
                  variant="contained" 
                  sx={{...buttonStyle,
                    bgcolor: "#FE5000", 
                    fontSize:"20px", 
                    fontWeight:"600", 
                    color:"#FBFCFD", 
                    borderRadius: "300px", 
                    width: "fit-content" 
                  }} 
                  endIcon={<East />} 
                  onClick={()=> scrollTo(formRef)}
                >
                  Free Consultation
                </Button>
              </Stack>
            </Stack>
            <SampleProjectImages solution="omni" view="web"/>
          </Stack>
        </Stack>
      </Stack>
      <Stack ref={stepByStepRef} sx={{...containerStyle, background: "linear-gradient(104deg, rgba(255, 64, 16, 0.10) 1.81%, rgba(255, 85, 23, 0.10) 99.04%)"}} bgcolor="#FFF1E7">
        <Stack bgcolor="#FFF" width="100%" height="66px" sx={{clipPath: "ellipse(50% 100% at 50% 0%)"}}></Stack>
        <Stack width={fixWidth} pt="16px" alignItems="center" gap="24px">
          <Stack alignItems="center">
            <Typography fontSize="32px" fontWeight="600" color="#000000">Step-by-Step Guide</Typography>
            <Stack flexDirection="row" alignItems="center" gap="12px">
              <Typography mt="8px" fontSize="32px" fontWeight="500" color="#11181C">to</Typography>
              <Typography fontSize="48px" fontWeight="600" color="#FE5000">Getting Our Solutions</Typography>
            </Stack>
          </Stack>
          <Stack gap="27px" flexDirection="row">
            <Stack width="316px" height="342px" p="24px" borderRadius="16px" bgcolor="#FFF" gap="4px">
              <Stack p="2px 16px" mb="20px" bgcolor="#FFF1E7" borderRadius="300px" width="fit-content" alignItems="center">
                <Typography fontSize="16px" fontWeight="600" color="#FE5000">Step 1</Typography>
              </Stack>
              <Typography fontSize="20px" fontWeight="600" color="#00061D">Quotation Request</Typography>
              <Typography fontSize="16px" fontWeight="400" color="#11181C">Applicants contact Infront Consulting to get a quotation for up to 3 services.</Typography>
            </Stack>
            <Stack width="316px" height="342px" p="24px" borderRadius="16px" bgcolor="#FFF" gap="4px">
              <Stack p="2px 16px" mb="20px" bgcolor="#FFF1E7" borderRadius="300px" width="fit-content" alignItems="center">
                <Typography fontSize="16px" fontWeight="600" color="#FE5000">Step 2</Typography>
              </Stack>
              <Typography fontSize="20px" fontWeight="600" color="#00061D">Submit Application</Typography>
              <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                  <Typography fontSize="16px" fontWeight="400" color="#11181C">Applicants share the required documents with our Sales Representative.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                  <Typography fontSize="16px" fontWeight="400" color="#11181C">We'll take care of the rest and submit the application for you.</Typography>
                </ListItem>
              </List>
            </Stack>
            <Stack width="316px" height="342px" p="24px" borderRadius="16px" bgcolor="#FFF" gap="4px">
              <Stack p="2px 16px" mb="20px" bgcolor="#FFF1E7" borderRadius="300px" width="fit-content" alignItems="center">
                <Typography fontSize="16px" fontWeight="600" color="#FE5000">Step 3</Typography>
              </Stack>
              <Typography fontSize="20px" fontWeight="600" color="#00061D">Confirmation & Payment</Typography>
              <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                  <Typography fontSize="16px" fontWeight="400" color="#11181C">Applicants will receive an email if successful.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                  <Typography fontSize="16px" fontWeight="400" color="#11181C">Applicants must pay the remaining balance (after deducting the grant amount) within 14 days.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                  <Typography fontSize="16px" fontWeight="400" color="#11181C">Payment is made through a unique payment link sent via email.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                  <Typography fontSize="16px" fontWeight="400" color="#11181C">Failure to make payment on time will result in the cancellation of the grant.</Typography>
                </ListItem>
              </List>
            </Stack>
          </Stack>
          <Stack gap="27px" flexDirection="row">
            <Stack width="316px" height="342px" p="24px" borderRadius="16px" bgcolor="#FFF" gap="4px">
              <Stack p="2px 16px" mb="20px" bgcolor="#FFF1E7" borderRadius="300px" width="fit-content" alignItems="center">
                <Typography fontSize="16px" fontWeight="600" color="#FE5000">Step 4</Typography>
              </Stack>
              <Typography fontSize="20px" fontWeight="600" color="#00061D">Service Delivery & Grant Disbursement</Typography>
              <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                  <Typography fontSize="16px" fontWeight="400" color="#11181C">Infront Consulting delivers the service.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                  <Typography fontSize="16px" fontWeight="400" color="#11181C">BSN will disburse 50% (up to RM5,000) directly to Infront Consulting in stages.</Typography>
                </ListItem>
              </List>
            </Stack>
            <Stack width="316px" height="342px" p="24px" borderRadius="16px" bgcolor="#FFF" gap="4px">
              <Stack p="2px 16px" mb="20px" border="1px solid" borderColor="#FE5000" borderRadius="300px" width="fit-content" alignItems="center">
                <Typography fontSize="16px" fontWeight="600" color="#FE5000">Note</Typography>
              </Stack>
              <Typography fontSize="20px" fontWeight="600" color="#00061D">Take Note</Typography>
              <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                  <Typography fontSize="16px" fontWeight="400" color="#11181C">Keep proof of service activation as BSN may request it.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                  <Typography fontSize="16px" fontWeight="400" color="#11181C">If requirements aren't followed, your business may be blacklisted in the future.</Typography>
                </ListItem>
              </List>
            </Stack>
          </Stack>
        </Stack>
        <Stack width="100%" mt="24px" height="66px" sx={{clipPath: "ellipse(50% 100% at 50% 100%)", background: "linear-gradient(180deg, #FFE8D9 -6.04%, #FFF 100%)"}}></Stack>
      </Stack>
      <Stack ref={formRef} py="80px" sx={{...containerStyle, background: "linear-gradient(180deg, #FFF 0%, #FEF8F4 100%)"}}>
        <Stack width={fixWidth} alignItems="center" gap="32px">
          <Stack alignItems="center" gap="8px">
            <Typography fontSize="48px" fontWeight="600" color="#FE5000">Check Your Eligibility</Typography>
            <Stack alignItems="center">
              <Typography fontSize="18px" fontWeight="400" color="#000000">Provide us your contact details below and find out if your business is eligible to claim up to RM5,000.</Typography>
              <Typography fontSize="18px" fontWeight="400" color="#000000">We'll get in touch to start the grant application process for you.</Typography>
            </Stack>
          </Stack>
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>

            <Stack width="100%" flexDirection="row" gap="24px">
              <Stack flex={1} p="24px" gap="24px" bgcolor="#FFF">
                <Stack flex={1}>
                  <FormControl>
                    <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">What solution are you looking for?</Typography>
                    <Select {...register("solution", {required: "Please select the solution"})} defaultValue="">
                      <MenuItem value="emis">EMIS 360</MenuItem>
                      <MenuItem value="althr">altHR</MenuItem>
                      <MenuItem value="insuite">inSuite</MenuItem>
                      <MenuItem value="omni">OMNI</MenuItem>
                    </Select>
                    <Typography fontSize="16px" fontWeight="400" color="error">
                      {errors.solution?.message}
                    </Typography>
                  </FormControl>
                </Stack>
                <Stack flexDirection="row" gap="24px">
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">Full Name (as per I/C or passport)</Typography>
                      <TextField {...register("fullName", {required: "Please fill in the field"})}/>
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.fullName?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">Company Name</Typography>
                      <TextField {...register("companyName", {required: "Please fill in the field"})} />
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.companyName?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                </Stack>
                <Stack flexDirection="row" gap="24px">
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">Company Email</Typography>
                      <TextField type="email" {...register("email", {required: "Please fill in the field"})} />
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.email?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">Mobile Number</Typography>
                      <TextField {...register("mobile", {required: "Please fill in the field", pattern: {value: /^[0-9]{10, 11}$/, message: "Please enter a valid number"}})}/>
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.mobile?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                </Stack>
                <Stack flex={1}>
                  <FormControl>
                    <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">Organisation Size</Typography>
                    <Select {...register("orgSize", {required: "Please select the size"})} defaultValue="">
                      <MenuItem value="10">10+</MenuItem>
                      <MenuItem value="50">50+</MenuItem>
                      <MenuItem value="100">100+</MenuItem>
                      <MenuItem value="200">200+</MenuItem>
                      <MenuItem value="300">Above 300</MenuItem>
                    </Select>
                    <Typography fontSize="16px" fontWeight="400" color="error">
                      {errors.orgSize?.message}
                    </Typography>
                  </FormControl>
                </Stack>
                <Stack mt="44px">
                  <Typography fontSize="14px" fontWeight="400" color="#858585">By clicking "Submit", I/we confirm that I/we have read, understood, and agree to the processing of personal data — including sensitive personal data — provided by me/us, our employees, representatives, and/or authorized signatories, for the purpose of processing by Infront Consulting.</Typography>
                </Stack>
                <Stack alignItems="center">
                  <Button variant="contained" type="submit" sx={{...buttonStyle, bgcolor: "#FE5000", width: "150px", fontSize:"20px", fontWeight:"600", color:"#FBFCFD" }}>Submit</Button>
                </Stack>
              </Stack>
              <Stack width="300px" height="100%" p="24px" bgcolor="#FFF1E7" borderRadius="16px" gap="8px">
                <Typography fontSize="20px" fontWeight="600" color="#FE5000">Check Your Eligibility</Typography>
                <Stack gap="8px" flexDirection="row" alignItems="center">
                  <CheckCircle sx={{color: "#FA934E"}}/>
                  <Typography fontSize="14px" fontWeight="400" color="#11181C">No prior Digitalisation Grant received</Typography>
                </Stack>
                <Stack gap="8px" flexDirection="row" alignItems="center">
                  <CheckCircle sx={{color: "#FA934E"}}/>
                  <Typography fontSize="14px" fontWeight="400" color="#11181C">At least 60% Malaysian-owned</Typography>
                </Stack>
                <Stack gap="8px" flexDirection="row" alignItems="center">
                  <CheckCircle sx={{color: "#FA934E"}}/>
                  <Typography fontSize="14px" fontWeight="400" color="#11181C">Registered with SSM, PBT, or SKM (for cooperatives)</Typography>
                </Stack>
                <Stack gap="8px" flexDirection="row" alignItems="center">
                  <CheckCircle sx={{color: "#FA934E"}}/>
                  <Typography fontSize="14px" fontWeight="400" color="#11181C">Have been in operation for at least six (6) months</Typography>
                </Stack>
                <Stack gap="8px" flexDirection="row" alignItems="center">
                  <CheckCircle sx={{color: "#FA934E"}}/>
                  <Typography fontSize="14px" fontWeight="400" color="#11181C">Minimum average annual sales turnover of at least RM50,000</Typography>
                </Stack>
                <Stack gap="8px" flexDirection="row" alignItems="center">
                  <CheckCircle sx={{color: "#FA934E"}}/>
                  <Typography fontSize="14px" fontWeight="400" color="#11181C">Limited to one (1) application per business (but up to three types of digital services)</Typography>
                </Stack>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Stack>
      <FAQ view="web"/>
      <Stack py="80px" sx={containerStyle} bgcolor="#687076">
        <Stack width={fixWidth} flexDirection="row" justifyContent="space-between">
          <Stack gap="33px">
            <Stack gap="6px" width="331px">
              <img src={InfrontLogo2} alt="infront-logo" width="229px" height="121px"  onClick={()=> window.open("https://infrontconsulting.asia/", "_blank")} style={{cursor: "pointer"}}/>
              <Typography fontSize="16px" fontWeight="600" color="#D7DBDF">Improving the lives of organisations through the power of technology</Typography>
            </Stack>
            <Stack gap="29px" flexDirection="row">
              <Facebook onClick={()=> window.open("https://www.facebook.com/infrontasiapacific/", "_blank")} sx={{color: "#FFF", cursor: "pointer"}}/>
              <LinkedIn onClick={()=> window.open("https://www.linkedin.com/company/infrontapac/", "_blank")} sx={{color: "#FFF", cursor: "pointer"}} />
              <Instagram onClick={()=> window.open("https://www.instagram.com/infront.apac/", "_blank")} sx={{color: "#FFF", cursor: "pointer"}} />
              <Language onClick={()=> window.open("https://infrontconsulting.asia/", "_blank")} sx={{color: "#FFF", cursor: "pointer"}} />
            </Stack>
          </Stack>
          <Stack justifyContent="center" alignItems="end" gap="16px">
            <Typography fontSize="20px" fontWeight="500" color="#FBFCFD">Contact us</Typography>
            <Stack flexDirection="row" gap="8px">
              <Typography fontSize="18px" fontWeight="400" color="#D7DBDF">+ 03 7957 7228</Typography>
              <Phone sx={{color: "#FBFCFD"}}/>
            </Stack>
            <Stack flexDirection="row" gap="8px">
              <Typography fontSize="20px" fontWeight="500" color="#D7DBDF">my.info@infrontconsulting.com.my</Typography>
              <Email sx={{color: "#FBFCFD"}}/>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default WebView;
