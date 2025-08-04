import { Stack } from "@mui/material";
import { useState } from "react";
import eInvoicingBatch from "../assets/images/e-Invoicing_Batch Details.png";
import eInvoicingDashboard from "../assets/images/e-Invoicing_Dashboard.png";
import eInvoicingLHDN from "../assets/images/e-Invoicing_LHDN Portal.png";
import eInvoicingLogin from "../assets/images/e-Invoicing_Login Page (NEW).png";
import eInvoicingView from "../assets/images/e-Invoicing_View PDF.png";
import insuiteFile from "../assets/images/inSuite_File Protection.png";
import insuiteGoogle from "../assets/images/inSuite_Google Workspace.png";
import insuiteMalware from "../assets/images/inSuite_Malware.png";
import insuiteMicrosoft from "../assets/images/inSuite_Microsoft 365 App.jpg";
import insuiteUser from "../assets/images/inSuite_User.png";
import althrEpay from "../assets/images/altHR_epayslip.png";
import althrLeave from "../assets/images/altHR_Leave.png";
import althrPolicyDoc from "../assets/images/altHR_policydoc.png";
import althrStaff from "../assets/images/altHR_Staff Directory.png";
import althrTimeTrack from "../assets/images/altHR_Time Tracking.png";
import omniAndroid from "../assets/images/Omni_Mobile Android Interface.jpg.png";
import omniIOS from "../assets/images/Omni_Mobile IOS Interface.png";
import omniWindows from "../assets/images/Omni_Windows App Interface.png";

type ISolution = "emis" |  "althr" | "insuite" | "omni";

export const SampleProjectImages = ({solution, view}: {solution: ISolution, view:string}) => {
    const [ selectedPicture, setSelectedPicture ] = useState(0);
    const imageSets = {
        emis: [eInvoicingBatch, eInvoicingDashboard, eInvoicingLHDN, eInvoicingLogin, eInvoicingView],
        insuite: [insuiteFile, insuiteGoogle, insuiteMalware, insuiteMicrosoft, insuiteUser],
        althr: [althrEpay, althrLeave, althrPolicyDoc, althrStaff, althrTimeTrack],
        omni: [omniAndroid, omniIOS, omniWindows],
    };
    const isMobile = view === "mobile";
    const imageSize = {
        web: {
            height: "225px",
            width: "400px"
        },
        mobile: {
            height: "161px",
            width: "286px"
        }
    }
    
    return (
        <Stack gap="16px" alignItems="center">
            <img src={imageSets[solution as keyof typeof imageSets][selectedPicture]} alt="screenshots" height={imageSize[view as keyof typeof imageSize].height} width={imageSize[view as keyof typeof imageSize].width} />
            <Stack gap="8px" flexDirection="row" width={isMobile ? "calc(100% - 48px)" : "100%"} overflow={isMobile ? "auto" : "unset"}>
                {imageSets[solution as keyof typeof imageSets].map((item, index) => {
                    const isSelected = index === selectedPicture;
                    
                    return (
                        <Stack 
                            key={index}
                            border={isSelected ? "1px solid" : "0px solid"} 
                            borderColor={isSelected ? "#FE5000" : ""} 
                            borderRadius="8px" 
                            onClick={()=> setSelectedPicture(index)}
                            sx={{cursor: "pointer", ":hover": {boxShadow: "2px 2px 10px grey"}, transition: "ease-in"}}
                        >
                            <img src={item} alt="mini-screenshots" height="48px" width="64px" style={{borderRadius: "8px"}} />
                        </Stack>
                    )
                })}
            </Stack>
        </Stack>
    )
};

export default SampleProjectImages;