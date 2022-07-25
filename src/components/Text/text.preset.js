import { colors } from "../../themes/Colors";
import { Typography } from "../../themes/Typography";

const BASE = {
    fontFamily: Typography.Primary,  
    color: colors.white
}

const BASE_BOLD = {
    fontFamily: Typography.PrimaryBold, 
    color: colors.white
}

const BOLD = {
    fontFamily: Typography.PrimaryExtraBold, 
    color: colors.white
}

export const presets = {
    default : BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32,
    },
    h2: {
        ...BASE_BOLD,
        fontSize: 28

    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24
    },
    h4: {
        ...BASE,
        fontSize: 18,
        lineHeight: 25
    },
    
}