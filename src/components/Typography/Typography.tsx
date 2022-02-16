import * as E from './elements';

export interface TypographyProps {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p",
    weight?: 200 | 300 | 400 | 500 | 600 | 700;
    width?: string,
    fontSize?: string,
    margin?: string,
    padding?: string,
    fontFamily?: string,
    afterDropdown?: boolean,
}

const typographies = {
    h1: ({...props}) => <E.H1 {...props} />,
    h2: ({...props}) => <E.H2 {...props} />,
    h3: ({...props}) => <E.H3 {...props} />,
    h4: ({...props}) => <E.H4 {...props} />,
    h5: ({...props}) => <E.H5 {...props} />,
    h6: ({...props}) => <E.H6 {...props} />,
    p: ({...props}) => <E.Paragraph {...props} />,
}

export const Typography: React.FC<TypographyProps> = ({variant, ...props}) => {
    const TypographyElement = typographies[variant];
    return <TypographyElement {...props} />
}