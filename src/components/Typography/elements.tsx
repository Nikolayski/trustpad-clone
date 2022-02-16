import styled from "styled-components";

export const H1 = styled(({width,fontSize, padding, margin, ...props}) => <h1 {...props} />)`
     width: ${({width}) => width};
     margin: ${({margin}) => margin};
     padding: ${({padding}) => padding};
     font-size: ${({fontSize}) => fontSize};
`
export const H2 = styled(({width,fontSize, padding, margin, ...props}) => <h2 {...props} />)`
    width: ${({width}) => width};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    font-size: ${({fontSize}) => fontSize};
`
export const H3 = styled(({width,fontSize, padding, margin, ...props}) => <h3 {...props} />)`
    width: ${({width}) => width};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    font-size: ${({fontSize}) => fontSize};
`
export const H4 = styled(({width,fontSize, padding, margin, ...props}) => <h4 {...props} />)`
    width: ${({width}) => width};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    font-size: ${({fontSize}) => fontSize};
`
export const H5 = styled(({width,fontSize, padding, margin, ...props}) => <h5 {...props} />)`
    width: ${({width}) => width};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    font-size: ${({fontSize}) => fontSize};
`
export const H6 = styled(({width,fontSize, padding, margin, ...props}) => <h6 {...props} />)`
    width: ${({width}) => width};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    font-size: ${({fontSize}) => fontSize};
`
export const Paragraph = styled(({width,fontSize, padding, margin, ...props}) => <p {...props} />)`
    width: ${({width}) => width};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    font-size: ${({fontSize}) => fontSize};
`