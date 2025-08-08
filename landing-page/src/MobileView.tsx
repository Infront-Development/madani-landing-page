import {
  Stack,
  Typography,
  Button,
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
  AddCircle,
  AutoAwesome,
} from "@mui/icons-material";
import { useRef, useState, useEffect, RefObject } from "react";
import { useSubmitForm } from "./hooks/useSubmitForm";

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
   Mobile_Banner_Background,
   madanibackground,
   altHR_banner,
   EMIS360_banner,
   OMNI_banner,
   inSuite_banner,
   greybackground,
} from "./assets/images";
import { color } from "./theme/color";

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
        <Stack sx={containerStyle}>
          <Stack sx={pContent}>
              <img src={InfrontLogo} alt="Infront logo" width="122px" height="64px" onClick={()=> window.open(link.mainPage, "_blank")}/>
          </Stack>
        </Stack>
        <Stack position="sticky" top={0} zIndex={100} sx={containerStyle} bgcolor={color.main}>
          <Stack sx={pContent} py="8px" direction="row" alignItems="center" justifyContent="space-between">
            <Typography fontSize="16px" fontWeight="600" color={color.grey.grey1}>{textConst.limitedSlot}</Typography>
            <Button variant="contained" sx={{...buttonStyle, py: "2px", bgcolor: color.white, fontSize:"16px", fontWeight:"600", color: color.black}} onClick={()=> scrollTo(formRef)}>{buttonText.applyNow}</Button>
          </Stack>
        </Stack>
        <Stack sx={{...containerStyle, background: `linear-gradient(180deg, rgba(253, 233, 225, 0.40) 0%, rgba(252, 229, 240, 0.40) 100%), url(${Mobile_Banner_Background}) lightgray 50% / cover no-repeat`}}>
          <Stack sx={pContent} alignItems="center" py="40px">
              <Typography fontSize="24px" fontWeight="600" color={color.black}>{textConst.digitaliseBusiness}</Typography>
              <Typography fontSize="20px" fontWeight="600" color={color.grey.grey10}>{textConst.withUpTo}</Typography>
              <Stack flexDirection="row" alignItems="center" gap="16px">
                <Typography fontSize="48px" fontWeight="600" color={color.main}>{textConst.rm5k}</Typography>
                <Typography mt="12px" fontSize="32px" fontWeight="600" color={color.black}>{textConst.grant}</Typography>
              </Stack>
              <Stack>
                <img src={Frame_4} alt="Devices" width="100%" height="280px" />
              </Stack>
              <Stack my="16px" alignItems="center" gap="12px" width="100%">
                <NavigateButton type="contained" fullWidth function={()=> scrollTo(formRef)} text={buttonText.goDigital} p="12px 24px"/>
                <NavigateButton type="outlined" fullWidth function={()=> scrollTo(solutionRef)} text={buttonText.browseProduct} p="12px 24px"/>
              </Stack>
              <Stack gap="8px" borderRadius="16px" py="16px" width="100%" sx={{background: "linear-gradient(90deg, rgba(249, 249, 249, 0.40) 0%, rgba(253, 253, 253, 0.40) 100%)"}}>
                <Typography ml="24px" fontSize="12px" fontWeight="400" color={color.grey.grey11}>{textConst.initiative}</Typography>
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
              <Typography fontSize="32px" fontWeight="600" color={color.blue.blue12}>{madaniInfo.mobileTitle1}</Typography>
              <Typography fontSize="32px" fontWeight="600" color={color.blue.blue12}>{madaniInfo.mobileTitle2}</Typography>
            </Stack>
            <Stack gap="16px" alignItems="center">
              <Typography fontSize="16px" fontWeight="600" color={color.grey.grey12} sx={{textIndent: "2em", textAlign: "center"}}>{madaniInfo.subtitle}</Typography>
              <Stack>
                <Stack gap="4px">
                  {madaniInfo.description.map((point, index) => (
                    <Stack key={index} flexDirection="row" gap="8px" alignItems="center">
                      <CheckCircle sx={{color: color.orange.orange10}}/>
                      <Typography fontSize="16px" fontWeight="400" color={color.grey.grey12}>{point}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack ref={solutionRef} sx={{...containerStyle, background: `url(${greybackground}) lightgray 10% / cover no-repeat`}}>
          <Stack sx={pContent} alignItems="center" py="80px" gap="32px">
            <Stack alignItems="center">
              <Typography fontSize="24px" fontWeight="600" color={color.black}>{textConst.kickstartMobile1}</Typography>
              <Typography fontSize="24px" fontWeight="600" color={color.black}>{textConst.kickstartMobile2}</Typography>
              <Typography mt="-4px" fontSize="20px" fontWeight="500" color={color.grey.grey10}>{textConst.with}</Typography>
              <Typography fontSize="32px" fontWeight="600" color={color.main}>{textConst.infront}</Typography>
            </Stack>
            <Stack alignItems="center">
              <Typography fontSize="18px" fontWeight="600" color={color.grey.grey11}>{textConst.officiallyAppointedMobile1}</Typography>
              <Typography fontSize="18px" fontWeight="600" color={color.grey.grey11}>{textConst.officiallyAppointedMobile2}</Typography>
            </Stack>
            <Stack alignItems="center" gap="24px" flex={1}>
              <Stack p="24px" borderRadius="16px" onClick={()=> scrollTo(emisRef, containerRef)} sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${EMIS360_banner}) lightgray 50% / cover no-repeat`}}>
                <Typography fontSize="16px" fontWeight="600" color={color.main}>{textConst["50%Grant"]}</Typography>
                <Typography fontSize="32px" fontWeight="600" color={color.grey.grey12}>{solutions.emis.title}</Typography>
                <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.emis.subtitle}</Typography>
              </Stack>
              <Stack width="calc(100% - 48px)" p="24px" onClick={()=> scrollTo(altHrRef, containerRef)} borderRadius="16px" sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${altHR_banner}) lightgray 50% / cover no-repeat`}}>
                <Typography fontSize="16px" fontWeight="600" color={color.main}>{textConst["50%Grant"]}</Typography>
                <Stack my="8px">
                    <img src={altHR} alt="alt" width="166px" height="32px"/>
                </Stack>
                <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.althr.subtitle}</Typography>
              </Stack>
              <Stack p="24px" borderRadius="16px" onClick={()=> scrollTo(inSuiteRef, containerRef)} sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${inSuite_banner}) lightgray 50% / cover no-repeat`}}>
                <Typography fontSize="16px" fontWeight="600" color={color.main}>{textConst["50%Grant"]}</Typography>
                <Typography fontSize="32px" fontWeight="600" color={color.grey.grey12}>{solutions.insuite.title}</Typography>
                <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.insuite.subtitle}</Typography>
              </Stack>
              <Stack p="24px" borderRadius="16px" onClick={()=> scrollTo(omniRef, containerRef)} sx={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.10) 100%), url(${OMNI_banner}) lightgray 50% / cover no-repeat`}}>
                <Typography fontSize="16px" fontWeight="600" color={color.main}>{textConst["50%Grant"]}</Typography>
                <Typography fontSize="32px" fontWeight="600" color={color.grey.grey12}>{solutions.omni.title}</Typography>
                <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.omni.subtitle}</Typography>
              </Stack>
              <Stack alignItems="center">
                <Typography fontSize="18px" fontWeight="400" color={color.grey.grey11}>{textConst.capped}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack sx={{...containerStyle, backdropFilter: "blur(8px)"}}>
          <Stack sx={pContent} py="40px" gap="24px">
            <Stack gap="16px">
              <Typography fontSize="32px" fontWeight="400" color={color.grey.grey10}>{textConst.ourSolutions}</Typography>
              <Typography fontSize="24px" fontWeight="600" color={color.grey.grey12}>{textConst.startingFrom}</Typography>
              <Stack mt="-24px" flexDirection="row" alignItems="center" gap="8px">
                <Typography fontSize="32px" fontWeight="500" color={color.main}>{textConst.rm8}</Typography>
                <Typography mt="4px" fontSize="20px" fontWeight="500" color={color.grey.grey11}>{textConst.monthlyUser}</Typography>
              </Stack>
            </Stack>
            <Stack ref={containerRef} gap="8px" flexDirection="row" width="100%" overflow="auto">
              <Stack ref={emisRef} width="calc(100% - 12px)" borderRadius="16px" border="1px solid" borderColor={color.grey.grey5} bgcolor={color.grey.grey2}>
                <Stack p="24px">
                  <Typography fontSize="24px" fontWeight="600" color={color.black}>{solutions.emis.title}</Typography>
                  <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.emis.subtitle}</Typography>
                </Stack>
                <SampleProjectImages solution="emis" view="mobile"/>
                <Stack p="24px" gap="16px">
                  <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{textConst.coreFunction}</Typography>
                  <Stack gap="8px">
                    {solutions.emis.function.map((point, index)=> {
                      const isFirst = index === 0;
                      return (
                        <Stack key={index} flexDirection="row" gap="4px" alignItems="center">
                          <CheckCircle sx={{color: color.orange.orange8}} />
                          <Typography fontSize="14px" fontWeight={isFirst ? "600" : "400"} color={isFirst ? color.main6 : color.grey.grey12}>{point}</Typography>
                        </Stack>
                      )
                    })}
                  </Stack>
                </Stack>
                <Stack alignItems="left" p="24px" mt="auto">
                  <NavigateButton text={buttonText.freeConsultation} type="contained" function={()=> scrollTo(formRef)} borderRadius="300px" icon={East}/>
                </Stack>
              </Stack>
              <Stack ref={altHrRef} width="calc(100% - 12px)" borderRadius="16px" border="1px solid" borderColor={color.grey.grey5} bgcolor={color.grey.grey2}>
                <Stack p="24px">
                  <Stack my="8px">
                    <img src={altHR} alt="alt" width="125px" height="24px"/>
                  </Stack>
                  <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.althr.subtitle}</Typography>
                </Stack>
                <Stack height="20px"></Stack>
                <SampleProjectImages solution="althr" view="mobile"/>
                <Stack p="24px" gap="16px">
                  <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{textConst.coreFunction}</Typography>
                  <Stack gap="8px">
                    {solutions.althr.function.map((point, index)=> {
                      const isFirst = index === 0;
                      return (
                        <Stack key={index} flexDirection="row" gap="4px" alignItems="center">
                          <CheckCircle sx={{color: color.orange.orange8}} />
                          <Typography fontSize="14px" fontWeight={isFirst ? "600" : "400"} color={isFirst ? color.main6 : color.grey.grey12}>{point}</Typography>
                        </Stack>
                      )
                    })}
                  </Stack>
                </Stack>
                <Stack alignItems="left" p="24px" mt="auto">
                  <NavigateButton text={buttonText.freeConsultation} type="contained" function={()=> scrollTo(formRef)} borderRadius="300px" icon={East}/>
                </Stack>
              </Stack>
              <Stack ref={inSuiteRef} width="calc(100% - 12px)" borderRadius="16px" border="1px solid" borderColor={color.grey.grey5} bgcolor={color.grey.grey2}>
                <Stack p="24px">
                  <Typography fontSize="24px" fontWeight="600" color={color.black}>{solutions.insuite.title}</Typography>
                  <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.insuite.subtitle}</Typography>
                </Stack>
                <SampleProjectImages solution="insuite" view="mobile"/>
                <Stack p="24px" gap="16px">
                  <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{textConst.coreFunction}</Typography>
                  <Stack gap="8px">
                    {solutions.insuite.function.map((point, index)=> {
                      const isFirst = index === 0;
                      return (
                        <Stack key={index} flexDirection="row" gap="4px" alignItems="center">
                          <CheckCircle sx={{color: color.orange.orange8}} />
                          <Typography fontSize="14px" fontWeight={isFirst ? "600" : "400"} color={isFirst ? color.main6 : color.grey.grey12}>{point}</Typography>
                        </Stack>
                      )
                    })}
                  </Stack>
                  <Stack mt="8px">
                    <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{textConst.addOn}</Typography>
                    <Stack mt="16px" flexDirection="row" gap="4px">
                      <AddCircle sx={{color: color.blue.blue10}}/>
                      <Typography fontSize="14px" fontWeight="400" color={color.grey.grey12}>{textConst.microsoftDefender}</Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack alignItems="left" p="24px" mt="auto">
                  <NavigateButton text={buttonText.freeConsultation} type="contained" function={()=> scrollTo(formRef)} borderRadius="300px" icon={East}/>
                </Stack>
              </Stack>
              <Stack ref={omniRef} width="calc(100% - 12px)" minWidth="calc(100% - 12px)" borderRadius="16px" border="1px solid" borderColor={color.grey.grey5} bgcolor={color.grey.grey2}>
                <Stack p="24px">
                  <Stack flexDirection="row" alignItems="center" gap="16px">
                    <Typography fontSize="24px" fontWeight="600" color={color.black}>{solutions.omni.title}</Typography>
                    <Stack p="4px 12px" borderRadius="16px" flexDirection="row" alignItems="center" gap="4px" sx={{background: "linear-gradient(90deg, #FFE7DA 0%, #FFF7E8 100%)"}}>
                      <AutoAwesome sx={{color: color.main}} />
                      <Typography mt="2px" fontSize="14px" fontWeight="600" color={color.main}>{textConst.aiPowered}</Typography>
                    </Stack>
                  </Stack>
                  <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{solutions.omni.subtitle}</Typography>
                </Stack>
                <SampleProjectImages solution="omni" view="mobile"/>
                <Stack p="24px" gap="16px">
                  <Typography fontSize="16px" fontWeight="600" color={color.grey.grey11}>{textConst.coreFunction}</Typography>
                  <Stack gap="8px">
                    {solutions.omni.function.map((point, index)=> {
                      const isFirst = index === 0;
                      return (
                        <Stack key={index} flexDirection="row" gap="4px" alignItems="center">
                          <CheckCircle sx={{color: color.orange.orange8}} />
                          <Typography fontSize="14px" fontWeight={isFirst ? "600" : "400"} color={isFirst ? color.main6 : color.grey.grey12}>{point}</Typography>
                        </Stack>
                      )
                    })}
                  </Stack>
                </Stack>
                <Stack alignItems="left" p="24px" mt="auto">
                  <NavigateButton text={buttonText.freeConsultation} type="contained" function={()=> scrollTo(formRef)} borderRadius="300px" icon={East}/>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack sx={{...containerStyle, background: "linear-gradient(0deg, #FFE8D9 100%, #FFF 49.83%)"}} mt="40px" gap="40px">
          <Stack sx={{background: "linear-gradient(0deg, #FFE8D9 0%, #FFF 100%)"}} alignItems="center">
            <Typography fontSize="24px" fontWeight="600" color={color.black}>{textConst.stepByStep}</Typography>
            <Typography fontSize="20px" fontWeight="500" color={color.grey.grey12}>{textConst.to}</Typography>
            <Typography fontSize="32px" fontWeight="600" color={color.main} textAlign="center">{textConst.gettingSolution}</Typography>
          </Stack>
          <Stack sx={pContent} alignItems="center" gap="8px">
            {Object.entries(stepGuides).map(([index, step]) => {
              const isFirst = index === "1";
              const isLast = index === "5";
              return (
                <Stack key={index} gap="8px" alignItems="center" bgcolor={color.white} borderRadius="16px" p="24px">
                  <Stack gap="16px">
                    <Stack 
                      p="2px 16px" 
                      border={isLast ? "1px solid" : ""}
                      borderColor={isLast ? color.main : ""}
                      bgcolor={isLast ? "" : color.orange.orange3}
                      borderRadius="300px" 
                      width="fit-content"
                    >
                      <Typography fontSize="14px" fontWeight="600" color={color.main}>{step.step}</Typography>
                    </Stack>
                    <Stack gap="4px">
                      <Typography fontSize="16px" fontWeight="600" color={color.main3}>{step.title}</Typography>
                      {isFirst ?
                        <Typography fontSize="14px" fontWeight="400" color={color.grey.grey12}>{step.description[0]}</Typography>
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
                  </Stack>
                </Stack>
              )
            })}
          </Stack>
          <Stack width="100%" height="66px" mt="-24px" sx={{clipPath: "ellipse(50% 100% at 50% 100%)", background: "linear-gradient(180deg, #FFE8D9 -6.04%, #FFF 100%)"}}></Stack>
        </Stack>
        <Stack ref={formRef} sx={{...containerStyle, background: "linear-gradient(180deg, #FFF 0%, #FEF8F4 100%)"}}>
          <Stack sx={pContent} py="80px" alignItems="center" gap="32px">
            <Stack  alignItems="center">
              <Typography mb="4px" fontSize="32px" fontWeight="600" color={color.main}>{textConst.checkEligibility}</Typography>
              <Typography fontSize="16px" fontWeight="400" color={color.black} sx={{textAlign: "center"}}>{textConst.eligibilityDescription} {textConst.eligibilityDescription1}</Typography>
            </Stack>
            <Stack px="24px" gap="24px" maxWidth="calc(100% - 48px)">
              <Stack p="24px" bgcolor={color.orange.orange3} borderRadius="16px" gap="8px">
                <Typography fontSize="20px" fontWeight="600" color={color.main}>{textConst.checkEligibility}</Typography>
                {eligibilityRequirement.map((option, index) => (
                  <Stack key={index} gap="8px" flexDirection="row" alignItems="center">
                    <CheckCircle sx={{color: color.orange.orange8}}/>
                    <Typography fontSize="14px" fontWeight="400" color={color.grey.grey12}>{option}</Typography>
                  </Stack>
                ))}
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
                <Stack p="24px" gap="24px" bgcolor={color.white} borderRadius= "16px">
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color={color.grey.grey11Text}>{textConst.question1}</Typography>
                      <Select {...register("field[125]", {required: errorText.selectField})} defaultValue="">
                        {Object.entries(solutions).map(([index, solution]) => (
                          <MenuItem key={index} value={index}>{solution.title}</MenuItem>
                        ))}
                      </Select>
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors["field[125]"]?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
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
                  <Stack flex={1}>
                    <FormControl>
                      <Typography fontSize="16px" fontWeight="400" color={color.grey.grey11Text}>{textConst.question6}</Typography>
                      <Select {...register("field[123]", {required: errorText.selectField})} defaultValue="">
                        {question6Options.map((option, index)=> (
                          <MenuItem key={index} value={option}>{option}</MenuItem>
                        ))}
                      </Select>
                      <Typography fontSize="16px" fontWeight="400" color="error">
                        {errors["field[123]"]?.message}
                      </Typography>
                    </FormControl>
                  </Stack>
                  <Typography fontSize="14px" fontWeight="400" color={color.grey.grey10Text}>{textConst.declaration}</Typography>
                  <Stack alignItems="center">
                    <Button variant="contained" type="submit" sx={{...buttonStyle, bgcolor: color.main, width: "150px", fontSize:"20px", fontWeight:"600", color: color.grey.grey1 }}>{buttonText.submit}</Button>
                  </Stack>
                </Stack>
              </form>
            </Stack>
          </Stack>
        </Stack>
        <Stack py="80px" sx={{...containerStyle, background: "linear-gradient(180deg, #FFF 0%, #FEF8F4 100%)"}}>
          <FAQ view="mobile" fixWidth="calc(100% - 48px)"/>
        </Stack>
        <Stack sx={containerStyle} bgcolor={color.grey.grey11}>
          <Stack p="64px 24px" gap="36px">
            <Footer fixWidth="317px" view="mobile"/>
          </Stack>
        </Stack>
    </Stack>
  );
}

export default MobileView;
