import styled from "styled-components";

export const LogoContainer = styled(({...props}) => <div {...props} />)`
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    letter-spacing: 0.3px;
`;

export const IconContainer = styled(({...props}) => <div {...props} />)`
    width: 63px;
`;

export const ContentContainer = styled(({...props}) => <div {...props} />)`
    width: 175px;
`;