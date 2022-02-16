import "styled-components";

declare module "styled-components"{
    export interface DefaultTheme{
        colors: {
            white: string,
            black: string,
            pinkLinear: string,
            aquaLinear: string,
            lightPurple: string,
        },
        backgrounds:{
            hero: string,
        }
    }
}