import { Button, createTheme, styled } from "@mui/material";


const Colors = {
    primary: "#A8741A",
    secondary: "#95defb",
    success: "#4CAF50",
    info: "#00a2ff",
    projectColor: "#242424",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    trans: 'transparent',
    ///////////////
    // Solid Color
    ///////////////
    white: "#fff",
    black: "#000",
};

export const MyButton = styled(Button)(({ theme }) => ({
    color: Colors.white,
    backgroundColor: Colors.trans,
    border: `1px solid ${Colors.primary}`,
    padding: '8px 20px',
    fontFamily: 'Alice, serif',
    shadow: 'none',
    '&:hover': {
        backgroundColor: Colors.primary,
    },
}));

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        },
        muted: {
            main: Colors.muted
        },
        projectColor: {
            main: Colors.projectColor
        },
        danger: {
            main: Colors.danger
        }

    },
    typography: {
        fontFamily: 'Alice, serif'
    },
    textField: {
        border: '1px solid #845'
    }
})

export default theme;