import styled from "styled-components";
import { theme } from "../../styles";

export const HeroContainer = styled(({...props}) => <div {...props} />)`
    min-height: 100vh;
    background: url(${theme.backgrounds.hero});
    background-repeat: no-repeat;
    background-size: cover;
`;