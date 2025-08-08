import { Button, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IButton {
    text: string,
    type: "contained" | "outlined",
    function: () => void;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    borderRadius?: string;
    fullWidth?: boolean;
    p?: string;
}

export const NavigateButton = (props: IButton) => {
    const { 
        text, 
        type, 
        function: onClick, 
        icon: IconComponent, 
        borderRadius, 
        fullWidth,
        p,
    } = props;
    const isContained = type === "contained";

    return (
        <Button 
            onClick={onClick} 
            endIcon={IconComponent ? <IconComponent /> : undefined}
            variant={type}
            sx={{
                p: p ?? "8px 24px",
                bgcolor: isContained ? "#FE5000" : "#FBFCFD", 
                color: isContained ? "#FBFCFD" : "#FE5000", 
                borderColor: isContained ? "" : "#FE5000", 
                textTransform: "none",
                boxShadow: "none",
                fontSize:"20px", 
                fontWeight:"600", 
                borderRadius: borderRadius ?? "16px", 
                width: fullWidth ? "100%" : "fit-content",
            }} 
        >
            {text}
        </Button>
    )
};

export default NavigateButton;