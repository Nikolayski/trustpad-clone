import styled from "styled-components";

export const H1 = styled(({width,fontSize, padding, margin, weight, fontFamily, ...props}) => <h1 {...props} />)`
     width: ${({width}) => width};
     margin: ${({margin}) => margin};
     padding: ${({padding}) => padding};
     font-size: ${({fontSize}) => fontSize};
     font-weight: ${({weight}) => weight};
     font-family: ${({fontFamily}) => fontFamily};
`
export const H2 = styled(({width,fontSize, padding, margin, weight, fontFamily, ...props}) => <h2 {...props} />)`
    width: ${({width}) => width};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    font-size: ${({fontSize}) => fontSize};
    font-weight: ${({weight}) => weight};
    font-family: ${({fontFamily}) => fontFamily};
`
export const H3 = styled(({width,fontSize, padding, margin, weight, fontFamily, ...props}) => <h3 {...props} />)`
    width: ${({width}) => width};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    font-size: ${({fontSize}) => fontSize};
    font-weight: ${({weight}) => weight};
    font-family: ${({fontFamily}) => fontFamily};
`
export const H4 = styled(({width,fontSize, padding, margin, weight, fontFamily, ...props}) => <h4 {...props} />)`
    width: ${({width}) => width};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    font-size: ${({fontSize}) => fontSize};
    font-weight: ${({weight}) => weight};
    font-family: ${({fontFamily}) => fontFamily};
`
export const H5 = styled(({width,fontSize, padding, margin, weight, fontFamily, ...props}) => <h5 {...props} />)`
    width: ${({width}) => width};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    font-size: ${({fontSize}) => fontSize};
    font-weight: ${({weight}) => weight};
    font-family: ${({fontFamily}) => fontFamily};
`
export const H6 = styled(({width,fontSize, padding, margin, weight, fontFamily, ...props}) => <h6 {...props} />)`
    width: ${({width}) => width};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    font-size: ${({fontSize}) => fontSize};
    font-weight: ${({weight}) => weight};
    font-family: ${({fontFamily}) => fontFamily};
`
export const Paragraph = styled(({width,fontSize, padding, margin, weight, fontFamily, afterDropdown, ...props}) => <p {...props} />)`
    width: ${({width}) => width};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    font-size: ${({fontSize}) => fontSize};
    font-weight: ${({weight}) => weight};
    font-family: ${({fontFamily}) => fontFamily};
    ${({afterDropdown}) => afterDropdown ? `:after{
        display: inline-block;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
    }` : ''
}`