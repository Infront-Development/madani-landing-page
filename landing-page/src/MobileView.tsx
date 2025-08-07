import {
  Stack,
  Typography,
  Button,
  List,
  ListItem,
  Select,
  TextField,
  MenuItem,
  Fab,
  Fade,
  FormControl
} from "@mui/material";
import { 
  CheckCircle,
  East,
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
import Mobile_Banner_Background from "./assets/images/Mobile_Banner_Background.png";
import madanibackground from "./assets/images/madanibackground.png";
import altHR_banner from "./assets/images/altHR_banner.png";
import EMIS360_banner from "./assets/images/EMIS360_banner.png";
import OMNI_banner from "./assets/images/OMNI_banner.png";
import inSuite_banner from "./assets/images/inSuite_banner.png";
import greybackground from "./assets/images/greybackground.png";

const containerStyle = {
  width: "100%",
};
const pContent = { 
  px: "24px"
};
const buttonStyle = {
  textTransform: "none",
  boxShadow: "none",
  borderRadius: "16px"
};

function MobileView() {
  const emisRef = useRef<HTMLDivElement>(null);
  const altHrRef = useRef<HTMLDivElement>(null);
  const inSuiteRef = useRef<HTMLDivElement>(null);
  const omniRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollToTopButton, setScrollToTopButton] = useState<boolean>(false);
  const { register, errors} = useSubmitForm();

  const scrollTo = (
    ref: RefObject<HTMLDivElement | null>,
    container?: RefObject<HTMLDivElement | null>
  ) => {
    if (ref.current && ref.current !== null) {
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 48;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setTimeout(()=> {
        if (container?.current && ref.current) {
          const elementLeft = ref.current.offsetLeft;
          const elementWidth = ref.current.offsetWidth;
          const containerWidth = container.current.offsetWidth;
          const scrollPosition = elementLeft - (containerWidth / 2) + (elementWidth / 2);

          container.current.scrollTo({
            left: scrollPosition - 24,
            behavior: "smooth",
          })
        } else return;
      }, 500);
    }
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };

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
                ":hover": {background: "#FE5000"}
              }}
            >
              <VerticalAlignTop sx={{mt: "8px", color: "#FFF"}} />
            </Fab>
        </Fade>
        <Stack sx={containerStyle}>
          <Stack sx={pContent}>
              <img src={InfrontLogo} alt="Infront logo" width="122px" height="64px" onClick={()=> window.open("https://infrontconsulting.asia/", "_blank")}/>
          </Stack>
        </Stack>
        <Stack position="sticky" top={0} zIndex={100} sx={containerStyle} bgcolor="#FE5000">
          <Stack sx={pContent} py="8px" direction="row" alignItems="center" justifyContent="space-between">
            <Typography fontSize="16px" fontWeight="600" color="#FBFCFD">Limited Slot Available</Typography>
            <Button variant="contained" sx={{...buttonStyle, py: "2px", bgcolor: "#FFF", fontSize:"16px", fontWeight:"600", color:"#000"}} onClick={()=> scrollTo(formRef)}>Apply Now</Button>
          </Stack>
        </Stack>
        <Stack sx={{...containerStyle, background: `linear-gradient(180deg, rgba(253, 233, 225, 0.40) 0%, rgba(252, 229, 240, 0.40) 100%), url(${Mobile_Banner_Background}) lightgray 50% / cover no-repeat`}}>
          <Stack sx={pContent} alignItems="center" py="40px">
              <Typography fontSize="24px" fontWeight="600" color="#000000">Digitalise your business</Typography>
              <Typography fontSize="20px" fontWeight="600" color="#7E868C">with up to</Typography>
              <Stack flexDirection="row" alignItems="center" gap="16px">
                <Typography fontSize="48px" fontWeight="600" color="#FE5000">RM5000 </Typography>
                <Typography mt="12px" fontSize="32px" fontWeight="600" color="#000000">Grant</Typography>
              </Stack>
              <Stack>
                <img src={Frame_4} alt="Devices" width="100%" height="280px" />
              </Stack>
              <Stack my="16px" alignItems="center" gap="12px" width="100%">
                <Button variant="contained" fullWidth sx={{...buttonStyle, padding: "12px 24px", bgcolor: "#FE5000", fontSize:"20px", fontWeight:"600", color:"#FBFCFD" }} onClick={()=> scrollTo(formRef)}>Go Digital Now</Button>
                <Button variant="outlined" fullWidth sx={{...buttonStyle, padding: "12px 24px", bgcolor: "#FBFCFD", borderColor: "#FE5000", fontSize: "20px", fontWeight: "600", color: "#FE5000"}} onClick={()=> scrollTo(solutionRef)}>Browse Product</Button>
              </Stack>
              <Stack gap="8px" borderRadius="16px" py="16px" width="100%" sx={{background: "linear-gradient(90deg, rgba(249, 249, 249, 0.40) 0%, rgba(253, 253, 253, 0.40) 100%)"}}>
                <Typography ml="24px" fontSize="12px" fontWeight="400" color="#687076">An Initiative Under</Typography>
                <Stack display="flex" flexDirection="row" gap="4px" ml="20px">
                  <img src={madanilogo} alt="madani" width="64px" height="24px" />
                  <img src={bsnlogo} alt="bsn" width="64px" height="24px" />
                  <img src={mcmclogo} alt="mcmc" width="64px" height="24px" />
                  <img src={mdeclogo} alt="mcmc" width="64px" height="24px" />
                </Stack>
              </Stack>
          </Stack>
        </Stack>
        <Stack sx={{...containerStyle, background: `linear-gradient(rgba(255, 255, 255, 0.7)), url(${madanibackground}) lightgray 50% / cover no-repeat`}}>
          <Stack sx={pContent} alignItems="center" py="40px" gap="24px">
            <Stack justifyContent="center">
              <img src={madanilogo} alt="madani" width="240px" height="92px" />
            </Stack>
            <Stack alignItems="center">
              <Typography fontSize="32px" fontWeight="600" color="#00254D">Madani PMKS</Typography>
              <Typography fontSize="32px" fontWeight="600" color="#00254D">Digital Grant</Typography>
            </Stack>
            <Stack gap="16px" alignItems="center">
              <Typography fontSize="16px" fontWeight="600" color="#11181C" sx={{textIndent: "2em", textAlign: "center"}}>The Madani PMKS Digital Grant is a government grant to help Malaysian micro, small, and medium enterprises (PMKS) use digital solutions to improve their business.</Typography>
              <Stack>
                <Stack gap="4px">
                  <Stack flexDirection="row" gap="8px" alignItems="center">
                    <CheckCircle sx={{color: "#ED5F00"}}/>
                    <Typography fontSize="16px" fontWeight="400" color="#11181C">50% matching grant or up to RM5,000 per company.</Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="8px" alignItems="center">
                    <CheckCircle sx={{color: "#ED5F00"}}/>
                    <Typography fontSize="16px" fontWeight="400" color="#11181C">Managed by: Ministry of Finance, BSN, MDEC & MCMC.</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack ref={solutionRef} sx={{...containerStyle, background: `url(${greybackground}) lightgray 10% / cover no-repeat`}}>
          <Stack sx={pContent} alignItems="center" py="80px" gap="32px">
            <Stack alignItems="center">
              <Typography fontSize="24px" fontWeight="600" color="#000">Kickstart Your</Typography>
              <Typography fontSize="24px" fontWeight="600" color="#000">Digital Journey</Typography>
              <Typography mt="-4px" fontSize="20px" fontWeight="500" color="#7E868C">With</Typography>
              <Typography fontSize="32px" fontWeight="600" color="#FE5000">Infront Consulting</Typography>
            </Stack>
            <Stack alignItems="center">
              <Typography fontSize="18px" fontWeight="600" color="#687076">Officially appointed as a</Typography>
              <Typography fontSize="18px" fontWeight="600" color="#687076">trusted Digitalisation Partner</Typography>
            </Stack>
            <Stack alignItems="center" gap="24px" flex={1}>
              <Stack p="24px" borderRadius="16px" onClick={()=> scrollTo(emisRef, containerRef)} sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${EMIS360_banner}) lightgray 50% / cover no-repeat`}}>
                <Typography fontSize="16px" fontWeight="600" color="#FE5000">50% Grant</Typography>
                <Typography fontSize="32px" fontWeight="600" color="#11181C">EMIS 360</Typography>
                <Typography fontSize="16px" fontWeight="600" color="#687076">Simplified e-Invoicing solution for your business</Typography>
              </Stack>
              <Stack width="calc(100% - 48px)" p="24px" onClick={()=> scrollTo(altHrRef, containerRef)} borderRadius="16px" sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${altHR_banner}) lightgray 50% / cover no-repeat`}}>
                <Typography fontSize="16px" fontWeight="600" color="#FE5000">50% Grant</Typography>
                <Stack my="8px">
                    <img src={altHR} alt="alt" width="166px" height="32px"/>
                </Stack>
                <Typography fontSize="16px" fontWeight="600" color="#687076">All-in-one HR app for happy teams</Typography>
              </Stack>
              <Stack p="24px" borderRadius="16px" onClick={()=> scrollTo(inSuiteRef, containerRef)} sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${inSuite_banner}) lightgray 50% / cover no-repeat`}}>
                <Typography fontSize="16px" fontWeight="600" color="#FE5000">50% Grant</Typography>
                <Typography fontSize="32px" fontWeight="600" color="#11181C">inSuite</Typography>
                <Typography fontSize="16px" fontWeight="600" color="#687076">Optimize with productivity tools & cybersecurity</Typography>
              </Stack>
              <Stack p="24px" borderRadius="16px" onClick={()=> scrollTo(omniRef, containerRef)} sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${OMNI_banner}) lightgray 50% / cover no-repeat`}}>
                <Typography fontSize="16px" fontWeight="600" color="#FE5000">50% Grant</Typography>
                <Typography fontSize="32px" fontWeight="600" color="#11181C">OMNI</Typography>
                <Typography fontSize="16px" fontWeight="600" color="#687076">Unify your calls, chats & meetings in the cloud</Typography>
              </Stack>
              <Stack alignItems="center">
                <Typography fontSize="18px" fontWeight="400" color="#687076">Capped at RM5,000</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack sx={{...containerStyle, backdropFilter: "blur(8px)"}}>
          <Stack sx={pContent} py="40px" gap="24px">
            <Stack gap="16px">
              <Typography fontSize="32px" fontWeight="400" color="#7E868C">Our Solutions</Typography>
              <Typography fontSize="24px" fontWeight="600" color="#11181C">Starting from</Typography>
              <Stack mt="-24px" flexDirection="row" alignItems="center" gap="8px">
                <Typography fontSize="32px" fontWeight="500" color="#FF632E">RM8</Typography>
                <Typography mt="4px" fontSize="20px" fontWeight="500" color="#687076">monthly /user</Typography>
              </Stack>
            </Stack>
            <Stack ref={containerRef} gap="8px" flexDirection="row" width="100%" overflow="auto">
              <Stack ref={emisRef} width="calc(100% - 12px)" borderRadius="16px" border="1px solid" borderColor="#E6E8EB" bgcolor="#F8F9FA">
                <Stack p="24px">
                  <Typography fontSize="24px" fontWeight="600" color="#000">EMIS 360</Typography>
                  <Typography fontSize="16px" fontWeight="600" color="#687076">Simplified e-Invoicing solution for your business</Typography>
                </Stack>
                <SampleProjectImages solution="emis" view="mobile"/>
                <Stack p="24px" gap="16px">
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
                </Stack>
                <Stack alignItems="left" p="24px" mt="auto">
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
              <Stack ref={altHrRef} width="calc(100% - 12px)" borderRadius="16px" border="1px solid" borderColor="#E6E8EB" bgcolor="#F8F9FA">
                <Stack p="24px">
                  <Stack my="8px">
                    <img src={altHR} alt="alt" width="125px" height="24px"/>
                  </Stack>
                  <Typography fontSize="16px" fontWeight="600" color="#687076">All-in-one HR app for happy teams</Typography>
                </Stack>
                <Stack height="20px"></Stack>
                <SampleProjectImages solution="althr" view="mobile"/>
                <Stack p="24px" gap="16px">
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
                </Stack>
                <Stack alignItems="left" p="24px" mt="auto">
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
              <Stack ref={inSuiteRef} width="calc(100% - 12px)" borderRadius="16px" border="1px solid" borderColor="#E6E8EB" bgcolor="#F8F9FA">
                <Stack p="24px">
                  <Typography fontSize="24px" fontWeight="600" color="#000">inSuite</Typography>
                  <Typography fontSize="16px" fontWeight="600" color="#687076">Optimize with productivity tools & cybersecurity</Typography>
                </Stack>
                <SampleProjectImages solution="insuite" view="mobile"/>
                <Stack p="24px" gap="16px">
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
                </Stack>
                <Stack alignItems="left" p="24px" mt="auto">
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
              <Stack ref={omniRef} width="calc(100% - 12px)" minWidth="calc(100% - 12px)" borderRadius="16px" border="1px solid" borderColor="#E6E8EB" bgcolor="#F8F9FA">
                <Stack p="24px">
                  <Stack flexDirection="row" alignItems="center" gap="16px">
                    <Typography fontSize="24px" fontWeight="600" color="#000">OMNI</Typography>
                    <Stack p="4px 12px" borderRadius="16px" flexDirection="row" alignItems="center" gap="4px" sx={{background: "linear-gradient(90deg, #FFE7DA 0%, #FFF7E8 100%)"}}>
                      <AutoAwesome sx={{color: "#FE5000"}} />
                      <Typography mt="2px" fontSize="14px" fontWeight="600" color="#FE5000">AI-Powered</Typography>
                    </Stack>
                  </Stack>
                  <Typography fontSize="16px" fontWeight="600" color="#687076">Unify your calls, chats & meetings in the cloud</Typography>
                </Stack>
                <SampleProjectImages solution="omni" view="mobile"/>
                <Stack p="24px" gap="16px">
                  <Typography fontSize="16px" fontWeight="600" color="#687076">Core Function</Typography>
                  <Stack gap="8px">
                    <Stack flexDirection="row" gap="4px" alignItems="center">
                      <CheckCircle sx={{color: "#FA934E"}} />
                      <Typography fontSize="14px" fontWeight="600" color="#FF7536">Unlimited Incoming Calls</Typography>
                    </Stack>
                    <Stack flexDirection="row" gap="4px" alignItems="center">
                      <CheckCircle sx={{color: "#FA934E"}} />
                      <Typography fontSize="14px" fontWeight="400" color="#11181C">1x Business DID Number</Typography>
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
                </Stack>
                <Stack alignItems="left" p="24px" mt="auto">
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
          </Stack>
        </Stack>
        <Stack sx={{...containerStyle, background: "linear-gradient(0deg, #FFE8D9 100%, #FFF 49.83%)"}} mt="40px" gap="40px">
          <Stack sx={{background: "linear-gradient(0deg, #FFE8D9 0%, #FFF 100%)"}} alignItems="center">
            <Typography fontSize="24px" fontWeight="600" color="#000000">Step-by-Step Guide</Typography>
            <Typography fontSize="20px" fontWeight="500" color="#11181C">to</Typography>
            <Typography fontSize="32px" fontWeight="600" color="#FE5000" textAlign="center">Getting Our Solutions</Typography>
          </Stack>
          <Stack sx={pContent} alignItems="center" gap="8px">
            <Stack gap="8px" alignItems="center" bgcolor="#FFF" borderRadius="16px" p="24px">
              <Stack gap="16px">
                <Stack p="2px 16px" bgcolor="#FFF1E7" borderRadius="300px" width="fit-content">
                  <Typography fontSize="14px" fontWeight="600" color="#FE5000">Step 1</Typography>
                </Stack>
                <Stack gap="4px">
                  <Typography fontSize="16px" fontWeight="600" color="#00061D">Quotation Request</Typography>
                  <Typography fontSize="14px" fontWeight="400" color="#11181C">Applicants contact Infront Consulting to get a quotation for up to 3 services. </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack gap="8px" alignItems="center" bgcolor="#FFF" borderRadius="16px" p="24px">
              <Stack gap="16px">
                <Stack p="2px 16px" bgcolor="#FFF1E7" borderRadius="300px" width="fit-content">
                  <Typography fontSize="14px" fontWeight="600" color="#FE5000">Step 2</Typography>
                </Stack>
                <Stack gap="4px">
                  <Typography fontSize="16px" fontWeight="600" color="#00061D">Submit Application</Typography>
                  <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                    <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                      <Typography fontSize="16px" fontWeight="400" color="#11181C">Applicants share the required documents with our Sales Representative.</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                      <Typography fontSize="16px" fontWeight="400" color="#11181C">We'll take care of the rest and submit the application for you.</Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Stack>
            </Stack>
            <Stack gap="8px" alignItems="center" bgcolor="#FFF" borderRadius="16px" p="24px">
              <Stack gap="16px">
                <Stack p="2px 16px" bgcolor="#FFF1E7" borderRadius="300px" width="fit-content">
                  <Typography fontSize="14px" fontWeight="600" color="#FE5000">Step 3</Typography>
                </Stack>
                <Stack gap="4px">
                  <Typography fontSize="16px" fontWeight="600" color="#00061D">Confirmation & Payment</Typography>
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
            </Stack>
            <Stack gap="8px" alignItems="center" bgcolor="#FFF" borderRadius="16px" p="24px">
              <Stack gap="16px">
                <Stack p="2px 16px" bgcolor="#FFF1E7" borderRadius="300px" width="fit-content">
                  <Typography fontSize="14px" fontWeight="600" color="#FE5000">Step 4</Typography>
                </Stack>
                <Stack gap="4px">
                  <Typography fontSize="16px" fontWeight="600" color="#00061D">Service Delivery & Grant Disbursement</Typography>
                  <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                    <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                      <Typography fontSize="16px" fontWeight="400" color="#11181C">Infront Consulting delivers the service.</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                      <Typography fontSize="16px" fontWeight="400" color="#11181C">BSN will disburse 50% (up to RM5,000) directly to Infront Consulting in stages.</Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Stack>
            </Stack>
            <Stack gap="8px" alignItems="center" bgcolor="#FFF" borderRadius="16px" p="24px">
              <Stack gap="16px">
                <Stack p="2px 16px" border="1px solid" borderColor="#FE5000" borderRadius="300px" width="fit-content" alignItems="center">
                  <Typography fontSize="16px" fontWeight="600" color="#FE5000">Note</Typography>
                </Stack>
                <Stack gap="4px">
                  <Typography fontSize="16px" fontWeight="600" color="#00061D">Take Note</Typography>
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
          </Stack>
          <Stack width="100%" height="66px" mt="-24px" sx={{clipPath: "ellipse(50% 100% at 50% 100%)", background: "linear-gradient(180deg, #FFE8D9 -6.04%, #FFF 100%)"}}></Stack>
        </Stack>
        <Stack ref={formRef} sx={{...containerStyle, background: "linear-gradient(180deg, #FFF 0%, #FEF8F4 100%)"}}>
          <Stack sx={pContent} py="80px" alignItems="center" gap="32px">
            <Stack  alignItems="center">
              <Typography mb="4px" fontSize="32px" fontWeight="600" color="#FE5000">Check Your Eligibility</Typography>
              <Typography fontSize="16px" fontWeight="400" color="#000" sx={{textAlign: "center"}}>Provide us your contact details below and find out if your business is eligible to claim up to RM5,000. We'll get in touch to start the grant application process for you.</Typography>
            </Stack>
            <Stack px="24px" gap="24px" maxWidth="calc(100% - 48px)">
              <Stack p="24px" bgcolor="#FFF1E7" borderRadius="16px" gap="8px">
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
              <form method="POST" action="https://infrontapac.activehosted.com/proc.php" id="_form_45_" noValidate>
                <input type="hidden" name="field[137]" value="" />
                <input type="hidden" name="field[138]" value="" />
                <input type="hidden" name="field[140]" value="" />
                <input type="hidden" name="field[139]" value="" />
                <input type="hidden" name="u" value="45" />
                <input type="hidden" name="f" value="45" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <input type="hidden" name="or" value="81e6c037758fc9092efc15ead85ce839" />
                <Stack p="24px" gap="24px" bgcolor="#FFF" borderRadius= "16px">
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">What solution are you looking for?</Typography>
                      <Select {...register("field[125]", {required: "Please select an option"})} defaultValue="">
                        <MenuItem value="emis">EMIS 360</MenuItem>
                        <MenuItem value="althr">altHR</MenuItem>
                        <MenuItem value="insuite">inSuite</MenuItem>
                        <MenuItem value="omni">OMNI</MenuItem>
                      </Select>
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors["field[125]"]?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">Full Name (as per I/C or passport)</Typography>
                      <TextField {...register("firstName", {required: "Please fill in the field"})}/>
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.firstName?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">Company Name</Typography>
                      <TextField {...register("customer_account", {required: "Please fill in the field"})} />
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.customer_account?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
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
                      <TextField {...register("phone", {required: "Please fill in the field", pattern: {value: /^[0-9]{10, 11}$/, message: "Please enter a valid number"}})}/>
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.phone?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">How did you hear about us?</Typography>
                      <Select {...register("field[123]", {required: "Please select an option"})} defaultValue="">
                        <MenuItem value="CelcomDigi">CelcomDigi</MenuItem>
                        <MenuItem value="Social Media (Facebook, Instagram, LinkedIn)">Social Media (Facebook, Instagram, LinkedIn)</MenuItem>
                        <MenuItem value="Search Engine (Google, Bing, Yahoo, etc)">Search Engine (Google, Bing, Yahoo, etc)</MenuItem>
                        <MenuItem value="Advertisement">Advertisement</MenuItem>
                        <MenuItem value="Friends or Family">Friends or Family</MenuItem>
                        <MenuItem value="Publication (News, Article, Blog)">Publication (News, Article, Blog)</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                      </Select>
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors["field[123]"]?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                  <Typography fontSize="14px" fontWeight="400" color="#858585">By clicking "Submit", I/we confirm that I/we have read, understood, and agree to the processing of personal data — including sensitive personal data — provided by me/us, our employees, representatives, and/or authorized signatories, for the purpose of processing by Infront Consulting.</Typography>
                  <Stack alignItems="center">
                    <Button variant="contained" type="submit" sx={{...buttonStyle, bgcolor: "#FE5000", width: "150px", fontSize:"20px", fontWeight:"600", color:"#FBFCFD" }}>Submit</Button>
                  </Stack>
                </Stack>
              </form>
            </Stack>
          </Stack>
        </Stack>
        <Stack sx={{...containerStyle, background: "linear-gradient(180deg, #FFF 0%, #FEF8F4 100%)"}}>
          <FAQ view="mobile"/>
        </Stack>
        <Stack sx={containerStyle} bgcolor="#687076">
          <Stack p="64px 24px" gap="36px">
            <Stack width="317px" gap="4px">
              <img src={InfrontLogo2} alt="infront-logo" width="229px" height="121px" onClick={()=> window.open("https://infrontconsulting.asia/", "_blank")}/>
              <Typography fontSize="16px" fontWeight="400" color="#D7DBDF">Improving the lives of organisations through the power of technology</Typography>
            </Stack>
            <Stack gap="29px" flexDirection="row">
              <Facebook onClick={()=> window.open("https://www.facebook.com/infrontasiapacific/", "_blank")} sx={{color: "#FFF"}}/>
              <LinkedIn onClick={()=> window.open("https://www.linkedin.com/company/infrontapac/", "_blank")} sx={{color: "#FFF"}} />
              <Instagram onClick={()=> window.open("https://www.instagram.com/infront.apac/", "_blank")} sx={{color: "#FFF"}} />
              <Language onClick={()=> window.open("https://infrontconsulting.asia/", "_blank")} sx={{color: "#FFF"}} />
            </Stack>
            <Stack gap="16px">
              <Typography fontSize="20px" fontWeight="500" color="#FBFCFD">Contact Us</Typography>
              <Stack flexDirection="row" gap="8px">
                <Phone sx={{color: "#FBFCFD"}}/>
                <Typography fontSize="16px" fontWeight="400" color="#D7DBDF">+ 03 7957 7228</Typography>
              </Stack>
              <Stack flexDirection="row" gap="8px">
              <Email sx={{color: "#FBFCFD"}}/>
              <Typography fontSize="16px" fontWeight="500" color="#D7DBDF">my.info@infrontconsulting.com.my</Typography>
            </Stack>
            </Stack>
          </Stack>
        </Stack>
    </Stack>
  );
}

export default MobileView;
