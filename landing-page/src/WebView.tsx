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
import NavigateButton from "./components/NavigateButton";
import { solutions, stepGuides, madaniInfo, eligibilityRequirement, textConst, buttonText, question6Options } from "./assets/text/text";
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
  const { register, errors } = useSubmitForm();
  
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
            <Typography fontSize="18px" fontWeight="600" color="#FBFCFD">{textConst.applicationOpen}</Typography>
            <Button variant="contained" sx={{...buttonStyle, py: "2px", bgcolor: "#FFF", fontSize:"16px", fontWeight:"600", color:"#000"}} onClick={()=> scrollTo(formRef)}>{buttonText.earlyApplicant}</Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack py="40px" sx={{...containerStyle, background: `linear-gradient(180deg, rgba(253, 233, 225, 0.40) 0%, rgba(252, 229, 240, 0.40) 100%), url(${headbackground}) lightgray 50% / cover no-repeat`}} >
        <Stack width={fixWidth} flexDirection="row" justifyContent="center">
          <Stack flex={1}>
            <Typography fontSize="32px" fontWeight="600" color="#000000">{textConst.digitaliseBusiness}</Typography>
            <Typography fontSize="24px" fontWeight="600" color="#7E868C">{textConst.withUpTo}</Typography>
            <Stack flexDirection="row" alignItems="center" gap="16px">
              <Typography fontSize="64px" fontWeight="600" color="#FE5000">{textConst.rm5k}</Typography>
              <Typography mt="12px" fontSize="48px" fontWeight="600" color="#000000">{textConst.grant}</Typography>
            </Stack>
            <Stack my="16px" flexDirection="row" alignItems="center" gap="12px">
              <NavigateButton text={buttonText.goDigital} function={()=>scrollTo(formRef)} type="contained"/>
              <NavigateButton text={buttonText.browseProduct} function={()=> scrollTo(solutionRef)} type="outlined"/>
            </Stack>
            <Stack p="16px 24px" gap="8px" borderRadius="16px" sx={{background: "linear-gradient(90deg, rgba(249, 249, 249, 0.40) 0%, rgba(253, 253, 253, 0.40) 100%)"}}>
              <Typography fontSize="12px" fontWeight="400" color="#687076">{textConst.initiative}</Typography>
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
            <Typography fontSize="48px" fontWeight="600" color="#00254D">{madaniInfo.title}</Typography>
            <Stack gap="16px">
              <Typography fontSize="20px" fontWeight="600" color="#11181C">{madaniInfo.subtitle}</Typography>
              <Stack gap="4px">
                {madaniInfo.description.map(point => (
                  <Stack flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: "#ED5F00"}}/>
                    <Typography fontSize="20px" fontWeight="400" color="#11181C">{point}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack ref={solutionRef} py="80px" sx={{...containerStyle, background: "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 51.62%, #FFF8F9 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.00) 57.5%, #FFF 100%), var(--Grays-Slate-4, #ECEEF0)"}}>
        <Stack width={fixWidth} alignItems="center">
          <Stack alignItems="center" mb="40px">
            <Typography fontSize="32px" fontWeight="600" color="#000000">{textConst.kickstart}</Typography>
            <Typography fontSize="24px" fontWeight="500" color="#7E868C">{textConst.with}</Typography>
            <Typography mt="-8px" fontSize="48px" fontWeight="600" color="#FE5000">{textConst.infront}</Typography>
            <Typography mt="16px" fontSize="20px" fontWeight="600" color="#687076">{textConst.officiallyAppointed}</Typography>
          </Stack>
          <Stack width="100%" gap="24px">
            <Stack gap="24px" flexDirection="row">
              <Stack flex={1} gap="24px" p="24px" borderRadius="16px" sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${EMIS360_banner}) lightgray 50% / cover no-repeat`}}>
                <Stack>
                  <Typography fontSize="16px" fontWeight="600" color="#FE5000">{textConst["50%Grant"]}</Typography>
                  <Typography fontSize="32px" fontWeight="600" color="#11181C">{solutions.emis.title}</Typography>
                  <Typography fontSize="16px" fontWeight="600" color="#687076">{solutions.emis.subtitle}</Typography>
                </Stack>
                <Stack flexDirection="row" gap="12px">
                  <NavigateButton text={buttonText.moreDetails} function={()=> scrollTo(emisRef)} type="outlined"/>
                  <NavigateButton text={buttonText.getOffer} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained"/>
                </Stack>
              </Stack>
              <Stack flex={1} gap="24px" p="24px" borderRadius="16px" sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${altHR_banner}) lightgray 50% / cover no-repeat`}}>
                <Stack>
                  <Typography fontSize="16px" fontWeight="600" color="#FE5000">{textConst["50%Grant"]}</Typography>
                  <Stack my="8px">
                    <img src={altHR} alt="alt" width="166px" height="32px"/>
                  </Stack>
                  <Typography fontSize="16px" fontWeight="600" color="#687076">{solutions.althr.subtitle}</Typography>
                </Stack>
                <Stack flexDirection="row" gap="12px">
                  <NavigateButton text={buttonText.moreDetails} function={()=> scrollTo(altHrRef)} type="outlined" />
                  <NavigateButton text={buttonText.getOffer} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained"/>
                </Stack>
              </Stack>
            </Stack>
            <Stack gap="24px" flexDirection="row">
              <Stack flex={1} gap="24px" p="24px" borderRadius="16px"  sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${inSuite_banner}) lightgray 50% / cover no-repeat`}}>
                <Stack>
                  <Typography fontSize="16px" fontWeight="600" color="#FE5000">{textConst["50%Grant"]}</Typography>
                  <Typography fontSize="32px" fontWeight="600" color="#11181C">{solutions.insuite.title}</Typography>
                  <Typography fontSize="16px" fontWeight="600" color="#687076">{solutions.insuite.subtitle}</Typography>
                </Stack>
                <Stack flexDirection="row" gap="12px">
                  <NavigateButton text={buttonText.moreDetails} function={()=> scrollTo(inSuiteRef)} type="outlined" />
                  <NavigateButton text={buttonText.getOffer} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained" />
                </Stack>
              </Stack>
              <Stack flex={1} gap="24px" p="24px" borderRadius="16px"  sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${OMNI_banner}) lightgray 50% / cover no-repeat`}}>
                <Stack>
                  <Typography fontSize="16px" fontWeight="600" color="#FE5000">{textConst["50%Grant"]}</Typography>
                  <Typography fontSize="32px" fontWeight="600" color="#11181C">{solutions.omni.title}</Typography>
                  <Typography fontSize="16px" fontWeight="600" color="#687076">{solutions.omni.subtitle}</Typography>
                </Stack>
                <Stack flexDirection="row" gap="12px">
                  <NavigateButton text={buttonText.moreDetails} function={()=> scrollTo(omniRef)} type="outlined" />
                  <NavigateButton text={buttonText.getOffer} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained" />
                </Stack>
              </Stack>
            </Stack>
            <Stack alignItems="center" mb="40px">
              <Typography fontSize="18px" fontWeight="400" color="#687076">{textConst.capped}</Typography>
            </Stack>
          </Stack>
          <Stack my="40px" flexDirection="row" alignItems="center">
            <Typography fontSize="32px" fontWeight="500" color="#687076">{textConst.startingFrom}</Typography>
            <Typography ml="6px" fontSize="32px" fontWeight="500" color="#FE5000">{textConst.rm8}</Typography>
            <Typography mt="8px" ml="6px" fontSize="20px" fontWeight="500" color="#687076">{textConst.monthlyUser}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack pt="32px" width={fixWidth} flexDirection="row">
        <Stack mx="24px" gap="24px" sx={{position: "sticky", top: 0}}>
          <Typography fontSize="18px" fontWeight="500" color="#678076">{textConst.solutions}</Typography>
          <Stack gap="24px">
            <Stack flexDirection="row" alignItems="center" gap="10px" sx={{cursor: "pointer"}} onClick={()=> scrollTo(emisRef)}>
              <Stack borderRadius="16px" bgcolor="#FE5000" width="40px" height="7px"></Stack>
              <Typography fontSize="16px" fontWeight="600" color="#FE5000">{solutions.emis.title}</Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap="10px" sx={{cursor: "pointer"}} onClick={()=> scrollTo(altHrRef)}>
              <Stack borderRadius="16px" bgcolor="#DFE3E6" width="40px" height="7px"></Stack>
              <Typography fontSize="16px" fontWeight="600" color="#11181C">{solutions.althr.title}</Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap="10px" sx={{cursor: "pointer"}} onClick={()=> scrollTo(inSuiteRef)}>
              <Stack borderRadius="16px" bgcolor="#DFE3E6" width="40px" height="7px"></Stack>
              <Typography fontSize="16px" fontWeight="600" color="#11181C">{solutions.insuite.title}</Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap="10px" sx={{cursor: "pointer"}} onClick={()=> scrollTo(omniRef)}>
              <Stack borderRadius="16px" bgcolor="#DFE3E6" width="40px" height="7px"></Stack>
              <Typography fontSize="16px" fontWeight="600" color="#11181C">{solutions.omni.title}</Typography>
            </Stack>
          </Stack>
          <Stack flexDirection="row" alignItems="center" sx={{cursor: "pointer"}} onClick={()=> scrollTo(stepByStepRef)}>
            <KeyboardArrowDown sx={{color: "#ED5F00" }}/>
            <Typography fontSize="14px" fontWeight="600" color="#FE5000">{buttonText.skipSection}</Typography>
          </Stack>
        </Stack>
        <Stack flexDirection="column">
          <Stack ref={emisRef} py="40px" gap="16px" flexDirection="row">
            <SampleProjectImages solution="emis" view="web"/>
            <Stack>
              <Typography fontSize="24px" fontWeight="600" color="#000000">{solutions.emis.title}</Typography>
              <Typography fontSize="16px" fontWeight="600" color="#687076">{solutions.emis.subtitle}</Typography>
              <Stack py="16px" gap="16px">
                <Typography fontSize="16px" fontWeight="600" color="#687076">{textConst.coreFunction}</Typography>
                <Stack gap="8px">
                  {solutions.emis.function.map((solution, index) => {
                    const firstSolution = index === 0;
                    return (
                      <Stack flexDirection="row" gap="4px" alignItems="center">
                        <CheckCircle sx={{color: "#FA934E"}} />
                        <Typography fontSize="14px" fontWeight={firstSolution ? "600" : "400"} color={firstSolution ? "#FF7536" : "#11181C"}>{solution}</Typography>
                      </Stack>
                    );
                  })}
                </Stack>
                <NavigateButton text={buttonText.freeConsultation} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained" />
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack ref={altHrRef} py="40px" gap="16px" flexDirection="row">
            <Stack>
              <Stack my="8px">
                <img src={altHR} alt="alt" width="125px" height="24px"/>
              </Stack>
              <Typography fontSize="16px" fontWeight="600" color="#687076">{solutions.althr.subtitle}</Typography>
              <Stack py="16px" gap="16px">
                <Typography fontSize="16px" fontWeight="600" color="#687076">{textConst.coreFunction}</Typography>
                <Stack gap="8px">
                  {solutions.althr.function.map((solution, index) => {
                    const firstSolution = index === 0;
                    return (
                      <Stack flexDirection="row" gap="4px" alignItems="center">
                        <CheckCircle sx={{color: "#FA934E"}} />
                        <Typography fontSize="14px" fontWeight={firstSolution ? "600" : "400"} color={firstSolution ? "#FF7536" : "#11181C"}>{solution}</Typography>
                      </Stack>
                    );
                  })}
                </Stack>
                <NavigateButton text={buttonText.freeConsultation} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained" />
              </Stack>
            </Stack>
            <SampleProjectImages solution="althr" view="web"/>
          </Stack>
          <Divider />
          <Stack ref={inSuiteRef} py="40px" gap="16px" flexDirection="row">
            <SampleProjectImages solution="insuite" view="web"/>
            <Stack>
              <Typography fontSize="24px" fontWeight="600" color="#000000">{solutions.insuite.title}</Typography>
              <Typography fontSize="16px" fontWeight="600" color="#687076">{solutions.insuite.subtitle}</Typography>
              <Stack py="16px" gap="16px">
                <Typography fontSize="16px" fontWeight="600" color="#687076">{textConst.coreFunction}</Typography>
                <Stack gap="8px">
                  {solutions.insuite.function.map((solution, index) => {
                    const firstSolution = index === 0;
                    return (
                      <Stack flexDirection="row" gap="4px" alignItems="center">
                        <CheckCircle sx={{color: "#FA934E"}} />
                        <Typography fontSize="14px" fontWeight={firstSolution ? "600" : "400"} color={firstSolution ? "#FF7536" : "#11181C"}>{solution}</Typography>
                      </Stack>
                    );
                  })}
                </Stack>
                <Stack mt="8px">
                  <Typography fontSize="16px" fontWeight="600" color="#687076">{textConst.addOn}</Typography>
                  <Stack mt="16px" flexDirection="row" gap="4px">
                    <AddCircle sx={{color: "#0081F1"}}/>
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">{textConst.microsoftDefender}</Typography>
                  </Stack>
                </Stack>
                <NavigateButton text={buttonText.freeConsultation} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained" />
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack ref={omniRef} py="40px" gap="16px" flexDirection="row">
            <Stack>
              <Stack flexDirection="row" alignItems="center" gap="16px">
                <Typography fontSize="24px" fontWeight="600" color="#000000">{solutions.omni.title}</Typography>
                <Stack p="4px 12px" borderRadius="16px" flexDirection="row" alignItems="center" gap="4px" sx={{background: "linear-gradient(90deg, #FFE7DA 0%, #FFF7E8 100%)"}}>
                  <AutoAwesome sx={{color: "#FE5000"}} />
                  <Typography mt="2px" fontSize="14px" fontWeight="600" color="#FE5000">{textConst.aiPowered}</Typography>
                </Stack>
              </Stack>
              <Typography fontSize="16px" fontWeight="600" color="#687076">{solutions.omni.subtitle}</Typography>
              <Stack py="16px" gap="16px">
                <Typography fontSize="16px" fontWeight="600" color="#687076">{textConst.coreFunction}</Typography>
                <Stack gap="8px">
                  {solutions.omni.function.map((solution, index) => {
                    const firstSolution = index === 0;
                    return (
                      <Stack flexDirection="row" gap="4px" alignItems="center">
                        <CheckCircle sx={{color: "#FA934E"}} />
                        <Typography fontSize="14px" fontWeight={firstSolution ? "600" : "400"} color={firstSolution ? "#FF7536" : "#11181C"}>{solution}</Typography>
                      </Stack>
                    );
                  })}
                </Stack>
                <NavigateButton text={buttonText.freeConsultation} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained" />
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
            <Typography fontSize="32px" fontWeight="600" color="#000000">{textConst.stepByStep}</Typography>
            <Stack flexDirection="row" alignItems="center" gap="12px">
              <Typography mt="8px" fontSize="32px" fontWeight="500" color="#11181C">{textConst.to}</Typography>
              <Typography fontSize="48px" fontWeight="600" color="#FE5000">{textConst.gettingSolution}</Typography>
            </Stack>
          </Stack>
          <Stack gap="27px" flexDirection="row">
            {Object.entries(stepGuides).slice(0, 3).map(([index, step]) => {
              const isFirst = index === "1";
              return (
                <Stack width="316px" height="342px" p="24px" borderRadius="16px" bgcolor="#FFF" gap="4px">
                  <Stack p="2px 16px" mb="20px" bgcolor="#FFF1E7" borderRadius="300px" width="fit-content" alignItems="center">
                    <Typography fontSize="16px" fontWeight="600" color="#FE5000">{step.step}</Typography>
                  </Stack>
                  <Typography fontSize="20px" fontWeight="600" color="#00061D">{step.title}</Typography>
                  {isFirst ?
                    <Typography fontSize="16px" fontWeight="400" color="#11181C">{step.description[0]}</Typography>
                  :
                    <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                      {step.description.map(point => (
                        <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                          <Typography fontSize="16px" fontWeight="400" color="#11181C">{point}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  }
                </Stack>
              )
            })}
          </Stack>
          <Stack gap="27px" flexDirection="row">
            {Object.entries(stepGuides).slice(3, 5).map(([index, step]) => {
              const isLast = index === "5";
              return (
                <Stack width="316px" height="342px" p="24px" borderRadius="16px" bgcolor="#FFF" gap="4px">
                  <Stack p="2px 16px" mb="20px" border={isLast ? "1px solid" : ""} borderColor={isLast ? "#FE5000" : ""} bgcolor={isLast ? "" : "#FFF1E7"} borderRadius="300px" width="fit-content" alignItems="center">
                    <Typography fontSize="16px" fontWeight="600" color="#FE5000">{step.step}</Typography>
                  </Stack>
                  <Typography fontSize="20px" fontWeight="600" color="#00061D">{step.title}</Typography>
                  <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                    {step.description.map(point => (
                      <ListItem sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                        <Typography fontSize="16px" fontWeight="400" color="#11181C">{point}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              )
            })}
          </Stack>
        </Stack>
        <Stack width="100%" mt="24px" height="66px" sx={{clipPath: "ellipse(50% 100% at 50% 100%)", background: "linear-gradient(180deg, #FFE8D9 -6.04%, #FFF 100%)"}}></Stack>
      </Stack>
      <Stack ref={formRef} py="80px" sx={{...containerStyle, background: "linear-gradient(180deg, #FFF 0%, #FEF8F4 100%)"}}>
        <Stack width={fixWidth} alignItems="center" gap="32px">
          <Stack alignItems="center" gap="8px">
            <Typography fontSize="48px" fontWeight="600" color="#FE5000">{textConst.checkEligibility}</Typography>
            <Stack alignItems="center">
              <Typography fontSize="18px" fontWeight="400" color="#000000">{textConst.eligibilityDescription}</Typography>
              <Typography fontSize="18px" fontWeight="400" color="#000000">{textConst.eligibilityDescription1}</Typography>
            </Stack>
          </Stack>
          <form method="POST" action="https://infrontapac.activehosted.com/proc.php" id="_form_45_" >
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
            <Stack width="100%" flexDirection="row" gap="24px">
              <Stack flex={1} p="24px" gap="24px" bgcolor="#FFF">
                <Stack flex={1}>
                  <FormControl>
                    <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">{textConst.question1}</Typography>
                    <Select {...register("field[125]", {required: "Please select an option"})} defaultValue="">
                      {Object.entries(solutions).map(([index, solution]) => (
                        <MenuItem value={index}>{solution.title}</MenuItem>
                      ))
                      }
                    </Select>
                    <Typography fontSize="16px" fontWeight="400" color="error">
                      {errors["field[125]"]?.message}
                    </Typography>
                  </FormControl>
                </Stack>
                <Stack flexDirection="row" gap="24px">
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">{textConst.question2}</Typography>
                      <TextField {...register("firstName", {required: "Please fill in the field"})}/>
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.firstName?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">{textConst.question3}</Typography>
                      <TextField {...register("customer_account", {required: "Please fill in the field"})} />
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.customer_account?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                </Stack>
                <Stack flexDirection="row" gap="24px">
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">{textConst.question4}</Typography>
                      <TextField type="email" {...register("email", {required: "Please fill in the field"})} />
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.email?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">{textConst.question5}</Typography>
                      <TextField {...register("phone", {required: "Please fill in the field", pattern: {value: /^[0-9]{10, 11}$/, message: "Please enter a valid number"}})}/>
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.phone?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                </Stack>
                <Stack flex={1}>
                  <FormControl>
                    <Typography fontSize="16px" fontWeight="400" color="#6F6F6F">{textConst.question6}</Typography>
                    <Select {...register("field[123]", {required: "Please select an option"})} defaultValue="">
                      {question6Options.map(option => (
                        <MenuItem value={option}>{option}</MenuItem>
                      ))}
                    </Select>
                    <Typography fontSize="16px" fontWeight="400" color="error">
                      {errors["field[123]"]?.message}
                    </Typography>
                  </FormControl>
                </Stack>
                <Stack mt="44px">
                  <Typography fontSize="14px" fontWeight="400" color="#858585">{textConst.declaration}</Typography>
                </Stack>
                <Stack alignItems="center">
                  <Button variant="contained" type="submit" sx={{...buttonStyle, bgcolor: "#FE5000", width: "150px", fontSize:"20px", fontWeight:"600", color:"#FBFCFD" }}>{buttonText.submit}</Button>
                </Stack>
              </Stack>
              <Stack width="300px" height="100%" p="24px" bgcolor="#FFF1E7" borderRadius="16px" gap="8px">
                <Typography fontSize="20px" fontWeight="600" color="#FE5000">{textConst.checkEligibility}</Typography>
                {eligibilityRequirement.map(point => (
                  <Stack gap="8px" flexDirection="row" alignItems="center">
                    <CheckCircle sx={{color: "#FA934E"}}/>
                    <Typography fontSize="14px" fontWeight="400" color="#11181C">{point}</Typography>
                  </Stack>
                ))}
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
              <Typography fontSize="16px" fontWeight="600" color="#D7DBDF">{textConst.vision}</Typography>
            </Stack>
            <Stack gap="29px" flexDirection="row">
              <Facebook onClick={()=> window.open("https://www.facebook.com/infrontasiapacific/", "_blank")} sx={{color: "#FFF", cursor: "pointer"}}/>
              <LinkedIn onClick={()=> window.open("https://www.linkedin.com/company/infrontapac/", "_blank")} sx={{color: "#FFF", cursor: "pointer"}} />
              <Instagram onClick={()=> window.open("https://www.instagram.com/infront.apac/", "_blank")} sx={{color: "#FFF", cursor: "pointer"}} />
              <Language onClick={()=> window.open("https://infrontconsulting.asia/", "_blank")} sx={{color: "#FFF", cursor: "pointer"}} />
            </Stack>
          </Stack>
          <Stack justifyContent="center" alignItems="end" gap="16px">
            <Typography fontSize="20px" fontWeight="500" color="#FBFCFD">{textConst.contactUs}</Typography>
            <Stack flexDirection="row" gap="8px">
              <Typography fontSize="18px" fontWeight="400" color="#D7DBDF">{textConst.phone}</Typography>
              <Phone sx={{color: "#FBFCFD"}}/>
            </Stack>
            <Stack flexDirection="row" gap="8px">
              <Typography fontSize="20px" fontWeight="500" color="#D7DBDF">{textConst.email}</Typography>
              <Email sx={{color: "#FBFCFD"}}/>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default WebView;
