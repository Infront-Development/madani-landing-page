import { Fab, Fade } from "@mui/material";
import { VerticalAlignTop } from "@mui/icons-material";

interface IScrollToTopButton {
    function: () => void,
    scrollToTopButton: boolean;
}

export const ScrollToTopButton = (props: IScrollToTopButton) => {
    const { function: scrollToTop, scrollToTopButton } = props;

    return (
        <Fade in={scrollToTopButton} timeout={300}>
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
    )
};

export default ScrollToTopButton;