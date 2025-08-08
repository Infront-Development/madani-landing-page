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
  FormControl
} from "@mui/material";
import { 
  CheckCircle,
  East,
  KeyboardArrowDown,
  AddCircle,
  AutoAwesome,
} from "@mui/icons-material";
import { useRef, useState, useEffect, RefObject } from "react";
import { useSubmitForm } from "./hooks/useSubmitForm";

import useWindowWidth from "./hooks/useWindowWidth";
import { 
  SampleProjectImages,
  FAQ,
  NavigateButton,
  ScrollToTopButton,
  Footer,
} from  "./components";
import { 
  solutions, 
  stepGuides, 
  madaniInfo, 
  eligibilityRequirement, 
  textConst, 
  buttonText, 
  question6Options, 
  errorText,
  link,
} from "./assets/text";
import {
   InfrontLogo,
   mdeclogo,
   bsnlogo,
   madanilogo,
   mcmclogo,
   Frame_4,
   altHR,
   madanibackground,
   altHR_banner,
   EMIS360_banner,
   OMNI_banner,
   inSuite_banner,
   headbackground,
} from "./assets/images";
import { color } from "./theme/color";

const containerStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const buttonStyle = {
  textTransform: "none",
  boxShadow: "none",
  borderRadius: "16px"
};

function WebView() {
  const displayWidth = useWindowWidth();
  const displayWidthBelow1k = displayWidth < 1100;
  const fixWidth = displayWidthBelow1k ? "80%" : "1000px";
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
      <ScrollToTopButton function={scrollToTop} scrollToTopButton={scrollToTopButton} />
      <Stack sx={containerStyle} bgcolor={color.white}  position="sticky" top={0} zIndex={100}>
        <Stack flex={1} p="16px 24px" width={fixWidth}>
          <img src={InfrontLogo} alt="Infront logo" width="122px" height="64px" onClick={()=> window.open(link.mainPage, "_blank")} style={{cursor: "pointer"}}/>
        </Stack>
        <Stack sx={containerStyle} bgcolor={color.main}>
          <Stack p="8px" direction="row" alignItems="center" justifyContent="space-between" width={fixWidth}>
            <Typography fontSize="18px" fontWeight="600" color={color.grey.grey1}>{textConst.applicationOpen}</Typography>
            <Button variant="contained" sx={{...buttonStyle, py: "2px", bgcolor: color.white, fontSize:"16px", fontWeight:"600", color: color.black}} onClick={()=> scrollTo(formRef)}>{buttonText.earlyApplicant}</Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack py="40px" sx={{...containerStyle, background: `linear-gradient(180deg, rgba(253, 233, 225, 0.40) 0%, rgba(252, 229, 240, 0.40) 100%), url(${headbackground}) lightgray 50% / cover no-repeat`}} >
        <Stack width={fixWidth} flexDirection="row" justifyContent="center">
          <Stack flex={1}>
            <Typography fontSize="32px" fontWeight="600" color={color.black}>{textConst.digitaliseBusiness}</Typography>
            <Typography fontSize="24px" fontWeight="600" color={color.grey.grey10}>{textConst.withUpTo}</Typography>
            <Stack flexDirection="row" alignItems="center" gap="16px">
              <Typography fontSize="64px" fontWeight="600" color={color.main}>{textConst.rm5k}</Typography>
              <Typography mt="12px" fontSize="48px" fontWeight="600" color={color.black}>{textConst.grant}</Typography>
            </Stack>
            <Stack my="16px" flexDirection="row" alignItems="center" gap="12px">
              <NavigateButton text={buttonText.goDigital} function={()=>scrollTo(formRef)} type="contained"/>
              <NavigateButton text={buttonText.browseProduct} function={()=> scrollTo(solutionRef)} type="outlined"/>
            </Stack>
            <Stack p="16px 24px" gap="8px" borderRadius="16px" sx={{background: "linear-gradient(90deg, rgba(249, 249, 249, 0.40) 0%, rgba(253, 253, 253, 0.40) 100%)"}}>
              <Typography fontSize="12px" fontWeight="400" color={color.grey.grey11}>{textConst.initiative}</Typography>
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
            <Typography fontSize="48px" fontWeight="600" color={color.blue.blue12}>{madaniInfo.title}</Typography>
            <Stack gap="16px">
              <Typography fontSize="20px" fontWeight="600" color={color.grey.grey12}>{madaniInfo.subtitle}</Typography>
              <Stack gap="4px">
                {madaniInfo.description.map((point, index) => (
                  <Stack key={index} flexDirection="row" gap="4px" alignItems="center">
                    <CheckCircle sx={{color: color.orange.orange10}}/>
                    <Typography fontSize="20px" fontWeight="400" color={color.grey.grey12}>{point}</Typography>
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
            <Typography fontSize="32px" fontWeight="600" color={color.black}>{textConst.kickstart}</Typography>
            <Typography fontSize="24px" fontWeight="500" color={color.grey.grey10}>{textConst.with}</Typography>
            <Typography mt="-8px" fontSize="48px" fontWeight="600" color={color.main}>{textConst.infront}</Typography>
            <Typography mt="16px" fontSize="20px" fontWeight="600" color={color.grey.grey11}>{textConst.officiallyAppointed}</Typography>
          </Stack>
          <Stack flex={1} gap="24px">
            <Stack gap="24px" flexDirection="row">
              <Stack flex={1} gap="24px" p="24px" borderRadius="16px" sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${EMIS360_banner}) lightgray 50% / cover no-repeat`}}>
                <Stack>
                  <Typography fontSize="16px" fontWeight="600" color={color.main}>{textConst["50%Grant"]}</Typography>
                  <Typography fontSize="32px" fontWeight="600" color={color.grey.grey12}>{solutions.emis.title}</Typography>
                  <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.emis.subtitle}</Typography>
                </Stack>
                <Stack mt="auto" flexDirection="row" gap="12px">
                  <NavigateButton text={buttonText.moreDetails} function={()=> scrollTo(emisRef)} type="outlined"/>
                  <NavigateButton text={buttonText.getOffer} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained"/>
                </Stack>
              </Stack>
              <Stack flex={1} gap="24px" p="24px" borderRadius="16px" sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${altHR_banner}) lightgray 50% / cover no-repeat`}}>
                <Stack>
                  <Typography fontSize="16px" fontWeight="600" color={color.main}>{textConst["50%Grant"]}</Typography>
                  <Stack my="8px">
                    <img src={altHR} alt="alt" width="166px" height="32px"/>
                  </Stack>
                  <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.althr.subtitle}</Typography>
                </Stack>
                <Stack mt="auto" flexDirection="row" gap="12px">
                  <NavigateButton text={buttonText.moreDetails} function={()=> scrollTo(altHrRef)} type="outlined" />
                  <NavigateButton text={buttonText.getOffer} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained"/>
                </Stack>
              </Stack>
            </Stack>
            <Stack gap="24px" flexDirection="row">
              <Stack flex={1} gap="24px" p="24px" borderRadius="16px"  sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${inSuite_banner}) lightgray 50% / cover no-repeat`}}>
                <Stack>
                  <Typography fontSize="16px" fontWeight="600" color={color.main}>{textConst["50%Grant"]}</Typography>
                  <Typography fontSize="32px" fontWeight="600" color={color.grey.grey12}>{solutions.insuite.title}</Typography>
                  <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.insuite.subtitle}</Typography>
                </Stack>
                <Stack mt="auto" flexDirection="row" gap="12px">
                  <NavigateButton text={buttonText.moreDetails} function={()=> scrollTo(inSuiteRef)} type="outlined" />
                  <NavigateButton text={buttonText.getOffer} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained" />
                </Stack>
              </Stack>
              <Stack flex={1} gap="24px" p="24px" borderRadius="16px"  sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${OMNI_banner}) lightgray 50% / cover no-repeat`}}>
                <Stack>
                  <Typography fontSize="16px" fontWeight="600" color={color.main}>{textConst["50%Grant"]}</Typography>
                  <Typography fontSize="32px" fontWeight="600" color={color.grey.grey12}>{solutions.omni.title}</Typography>
                  <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.omni.subtitle}</Typography>
                </Stack>
                <Stack mt="auto" flexDirection="row" gap="12px">
                  <NavigateButton text={buttonText.moreDetails} function={()=> scrollTo(omniRef)} type="outlined" />
                  <NavigateButton text={buttonText.getOffer} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained" />
                </Stack>
              </Stack>
            </Stack>
            <Stack alignItems="center" mb="40px">
              <Typography fontSize="18px" fontWeight="400" color={color.grey.grey11}>{textConst.capped}</Typography>
            </Stack>
          </Stack>
          <Stack my="40px" flexDirection="row" alignItems="center">
            <Typography fontSize="32px" fontWeight="500" color={color.grey.grey11}>{textConst.startingFrom}</Typography>
            <Typography ml="6px" fontSize="32px" fontWeight="500" color={color.main}>{textConst.rm8}</Typography>
            <Typography mt="8px" ml="6px" fontSize="20px" fontWeight="500" color={color.grey.grey11}>{textConst.monthlyUser}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack pt="32px" width={fixWidth} flexDirection="row">
        <Stack mx="24px" gap="24px" sx={{position: "sticky", top: 0}} display={displayWidthBelow1k ? "none" : "flex"}>
          <Typography fontSize="18px" fontWeight="500" color={color.grey.grey11}>{textConst.solutions}</Typography>
          <Stack gap="24px">
            <Stack flexDirection="row" alignItems="center" gap="10px" sx={{cursor: "pointer"}} onClick={()=> scrollTo(emisRef)}>
              <Stack borderRadius="16px" bgcolor={color.main} width="40px" height="7px"></Stack>
              <Typography fontSize="16px" fontWeight="600" color={color.main}>{solutions.emis.title}</Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap="10px" sx={{cursor: "pointer"}} onClick={()=> scrollTo(altHrRef)}>
              <Stack borderRadius="16px" bgcolor={color.grey.grey6} width="40px" height="7px"></Stack>
              <Typography fontSize="16px" fontWeight="600" color={color.grey.grey12}>{solutions.althr.title}</Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap="10px" sx={{cursor: "pointer"}} onClick={()=> scrollTo(inSuiteRef)}>
              <Stack borderRadius="16px" bgcolor={color.grey.grey6} width="40px" height="7px"></Stack>
              <Typography fontSize="16px" fontWeight="600" color={color.grey.grey12}>{solutions.insuite.title}</Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap="10px" sx={{cursor: "pointer"}} onClick={()=> scrollTo(omniRef)}>
              <Stack borderRadius="16px" bgcolor={color.grey.grey6} width="40px" height="7px"></Stack>
              <Typography fontSize="16px" fontWeight="600" color={color.grey.grey12}>{solutions.omni.title}</Typography>
            </Stack>
          </Stack>
          <Stack flexDirection="row" alignItems="center" sx={{cursor: "pointer"}} onClick={()=> scrollTo(stepByStepRef)}>
            <KeyboardArrowDown sx={{color: color.orange.orange10 }}/>
            <Typography fontSize="14px" fontWeight="600" color={color.main}>{buttonText.skipSection}</Typography>
          </Stack>
        </Stack>
        <Stack flexDirection="column">
          <Stack ref={emisRef} py="40px" gap="16px" flexDirection="row" alignItems="center">
            <SampleProjectImages solution="emis" view="web"/>
            <Stack flex={1}>
              <Typography fontSize="24px" fontWeight="600" color={color.black}>{solutions.emis.title}</Typography>
              <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.emis.subtitle}</Typography>
              <Stack py="16px" gap="16px">
                <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{textConst.coreFunction}</Typography>
                <Stack gap="8px">
                  {solutions.emis.function.map((solution, index) => {
                    const firstSolution = index === 0;
                    return (
                      <Stack key={index} flexDirection="row" gap="4px" alignItems="center">
                        <CheckCircle sx={{color: color.orange.orange8}} />
                        <Typography fontSize="14px" fontWeight={firstSolution ? "600" : "400"} color={firstSolution ? color.main6 : color.grey.grey12}>{solution}</Typography>
                      </Stack>
                    );
                  })}
                </Stack>
                <NavigateButton text={buttonText.freeConsultation} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained" />
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack ref={altHrRef} py="40px" gap="16px" flexDirection="row" alignItems="center">
            <Stack flex={1}>
              <Stack my="8px">
                <img src={altHR} alt="alt" width="125px" height="24px"/>
              </Stack>
              <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.althr.subtitle}</Typography>
              <Stack py="16px" gap="16px">
                <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{textConst.coreFunction}</Typography>
                <Stack gap="8px">
                  {solutions.althr.function.map((solution, index) => {
                    const firstSolution = index === 0;
                    return (
                      <Stack key={index} flexDirection="row" gap="4px" alignItems="center">
                        <CheckCircle sx={{color: color.orange.orange8}} />
                        <Typography fontSize="14px" fontWeight={firstSolution ? "600" : "400"} color={firstSolution ? color.main6 : color.grey.grey12}>{solution}</Typography>
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
          <Stack ref={inSuiteRef} py="40px" gap="16px" flexDirection="row" alignItems="center">
            <SampleProjectImages solution="insuite" view="web"/>
            <Stack flex={1}>
              <Typography fontSize="24px" fontWeight="600" color={color.black}>{solutions.insuite.title}</Typography>
              <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.insuite.subtitle}</Typography>
              <Stack py="16px" gap="16px">
                <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{textConst.coreFunction}</Typography>
                <Stack gap="8px">
                  {solutions.insuite.function.map((solution, index) => {
                    const firstSolution = index === 0;
                    return (
                      <Stack key={index} flexDirection="row" gap="4px" alignItems="center">
                        <CheckCircle sx={{color: color.orange.orange8}} />
                        <Typography fontSize="14px" fontWeight={firstSolution ? "600" : "400"} color={firstSolution ? color.main6 : color.grey.grey12}>{solution}</Typography>
                      </Stack>
                    );
                  })}
                </Stack>
                <Stack mt="8px">
                  <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{textConst.addOn}</Typography>
                  <Stack mt="16px" flexDirection="row" gap="4px">
                    <AddCircle sx={{color: color.blue.blue10}}/>
                    <Typography fontSize="14px" fontWeight="400" color={color.grey.grey12}>{textConst.microsoftDefender}</Typography>
                  </Stack>
                </Stack>
                <NavigateButton text={buttonText.freeConsultation} function={()=>scrollTo(formRef)} icon={East} borderRadius="300px" type="contained" />
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack ref={omniRef} py="40px" gap="16px" flexDirection="row" alignItems="center">
            <Stack flex={1}>
              <Stack flexDirection="row" alignItems="center" gap="16px">
                <Typography fontSize="24px" fontWeight="600" color={color.black}>{solutions.omni.title}</Typography>
                <Stack p="4px 12px" borderRadius="16px" flexDirection="row" alignItems="center" gap="4px" sx={{background: "linear-gradient(90deg, #FFE7DA 0%, #FFF7E8 100%)"}}>
                  <AutoAwesome sx={{color: color.main}} />
                  <Typography mt="2px" fontSize="14px" fontWeight="600" color={color.main}>{textConst.aiPowered}</Typography>
                </Stack>
              </Stack>
              <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.omni.subtitle}</Typography>
              <Stack py="16px" gap="16px">
                <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{textConst.coreFunction}</Typography>
                <Stack gap="8px">
                  {solutions.omni.function.map((solution, index) => {
                    const firstSolution = index === 0;
                    return (
                      <Stack key={index} flexDirection="row" gap="4px" alignItems="center">
                        <CheckCircle sx={{color: color.orange.orange8}} />
                        <Typography fontSize="14px" fontWeight={firstSolution ? "600" : "400"} color={firstSolution ? color.main6 : color.grey.grey12}>{solution}</Typography>
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
      <Stack ref={stepByStepRef} sx={{...containerStyle, background: "linear-gradient(104deg, rgba(255, 64, 16, 0.10) 1.81%, rgba(255, 85, 23, 0.10) 99.04%)"}} bgcolor={color.orange.orange3}>
        <Stack bgcolor={color.white} width="100%" height="66px" sx={{clipPath: "ellipse(50% 100% at 50% 0%)"}}></Stack>
        <Stack width={fixWidth} pt="16px" alignItems="center" gap="24px">
          <Stack alignItems="center">
            <Typography fontSize="32px" fontWeight="600" color={color.black}>{textConst.stepByStep}</Typography>
            <Stack flexDirection="row" alignItems="center" gap="12px">
              <Typography mt="8px" fontSize="32px" fontWeight="500" color={color.grey.grey12}>{textConst.to}</Typography>
              <Typography fontSize="48px" fontWeight="600" color={color.main}>{textConst.gettingSolution}</Typography>
            </Stack>
          </Stack>
          <Stack gap="27px" flexDirection="row" justifyContent="center">
            {Object.entries(stepGuides).slice(0, 3).map(([index, step]) => {
              const isFirst = index === "1";
              return (
                <Stack key={index} width={displayWidthBelow1k ? "30%" : "316px"} p="24px" pb="48px" borderRadius="16px" bgcolor={color.white} gap="4px">
                  <Stack p="2px 16px" mb="20px" bgcolor={color.orange.orange3} borderRadius="300px" width="fit-content" alignItems="center">
                    <Typography fontSize="16px" fontWeight="600" color={color.main}>{step.step}</Typography>
                  </Stack>
                  <Typography fontSize="20px" fontWeight="600" color={color.main3}>{step.title}</Typography>
                  {isFirst ?
                    <Typography fontSize="16px" fontWeight="400" color={color.grey.grey12}>{step.description[0]}</Typography>
                  :
                    <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                      {step.description.map((point, index) => (
                        <ListItem key={index} sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                          <Typography fontSize="16px" fontWeight="400" color={color.grey.grey12}>{point}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  }
                </Stack>
              )
            })}
          </Stack>
          <Stack gap="27px" flexDirection="row" justifyContent="center">
            {Object.entries(stepGuides).slice(3, 5).map(([index, step]) => {
              const isLast = index === "5";
              return (
                <Stack key={index} width={displayWidthBelow1k ? "30%" : "316px"} p="24px" borderRadius="16px" bgcolor={color.white} gap="4px">
                  <Stack p="2px 16px" mb="20px" border={isLast ? "1px solid" : ""} borderColor={isLast ? color.main : ""} bgcolor={isLast ? "" : color.orange.orange3} borderRadius="300px" width="fit-content" alignItems="center">
                    <Typography fontSize="16px" fontWeight="600" color={color.main}>{step.step}</Typography>
                  </Stack>
                  <Typography fontSize="20px" fontWeight="600" color={color.main3}>{step.title}</Typography>
                  <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                    {step.description.map((point, index) => (
                      <ListItem key={index} sx={{ display: 'list-item', pl: "4px", py: "0px" }}>
                        <Typography fontSize="16px" fontWeight="400" color={color.grey.grey12}>{point}</Typography>
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
            <Typography fontSize="48px" fontWeight="600" color={color.main}>{textConst.checkEligibility}</Typography>
            <Stack alignItems="center">
              <Typography fontSize="18px" fontWeight="400" color={color.black}>{textConst.eligibilityDescription}</Typography>
              <Typography fontSize="18px" fontWeight="400" color={color.black}>{textConst.eligibilityDescription1}</Typography>
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
              <Stack flex={3} p="24px" gap="24px" bgcolor={color.white}>
                <Stack flex={1}>
                  <FormControl>
                    <Typography fontSize="16px" fontWeight="400" color={color.grey.grey11Text}>{textConst.question1}</Typography>
                    <Select {...register("field[125]", {required: errorText.selectField})} defaultValue="">
                      {Object.entries(solutions).map(([index, solution]) => (
                        <MenuItem key={index} value={index}>{solution.title}</MenuItem>
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
                      <Typography fontSize="16px" fontWeight="400" color={color.grey.grey11Text}>{textConst.question2}</Typography>
                      <TextField {...register("firstName", {required: errorText.textField})}/>
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.firstName?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color={color.grey.grey11Text}>{textConst.question3}</Typography>
                      <TextField {...register("customer_account", {required: errorText.textField})} />
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.customer_account?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                </Stack>
                <Stack flexDirection="row" gap="24px">
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color={color.grey.grey11Text}>{textConst.question4}</Typography>
                      <TextField type="email" {...register("email", {required: errorText.textField})} />
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.email?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color={color.grey.grey11Text}>{textConst.question5}</Typography>
                      <TextField {...register("phone", {required: errorText.textField, pattern: {value: /^[0-9]{10, 11}$/, message: errorText.validNumber}})}/>
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors.phone?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                </Stack>
                <Stack flex={1}>
                  <FormControl>
                    <Typography fontSize="16px" fontWeight="400" color={color.grey.grey11Text}>{textConst.question6}</Typography>
                    <Select {...register("field[123]", {required: errorText.selectField})} defaultValue="">
                      {question6Options.map((option, index) => (
                        <MenuItem key={index} value={option}>{option}</MenuItem>
                      ))}
                    </Select>
                    <Typography fontSize="16px" fontWeight="400" color="error">
                      {errors["field[123]"]?.message}
                    </Typography>
                  </FormControl>
                </Stack>
                <Stack mt="44px">
                  <Typography fontSize="14px" fontWeight="400" color={color.grey.grey10Text}>{textConst.declaration}</Typography>
                </Stack>
                <Stack alignItems="center">
                  <Button variant="contained" type="submit" sx={{...buttonStyle, bgcolor: color.main, width: "150px", fontSize:"20px", fontWeight:"600", color: color.grey.grey1 }}>{buttonText.submit}</Button>
                </Stack>
              </Stack>
              <Stack flex={2} height="100%" p="24px" bgcolor={color.orange.orange3} borderRadius="16px" gap="8px">
                <Typography fontSize="20px" fontWeight="600" color={color.main}>{textConst.checkEligibility}</Typography>
                {eligibilityRequirement.map((point, index) => (
                  <Stack key={index} gap="8px" flexDirection="row" alignItems="center">
                    <CheckCircle sx={{color: color.orange.orange8}}/>
                    <Typography fontSize="14px" fontWeight="400" color={color.grey.grey12}>{point}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Stack>
      <Stack py="80px" sx={{...containerStyle, background: "linear-gradient(180deg, #FFF 0%, #FEF8F4 100%)"}}>
        <FAQ view="web" fixWidth={fixWidth}/>
      </Stack>
      <Stack py="80px" sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}} bgcolor={color.grey.grey11}>
        <Footer fixWidth={fixWidth} view="web" />
      </Stack>
    </Stack>
  );
}

export default WebView;
