import { useTheme,  useMediaQuery } from "@mui/material";
import WebView from "./WebView";
import MobileView from "./MobileView";

export default function App () {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            {(isDesktop || isTablet) && <WebView />}
            {isMobile && <MobileView />}
        </>
    )       
}
