import { Link, useMatch } from "react-router-dom";


export const CustomLink = ({ children, to, ...props }) => {
    const match = useMatch(to);
    console.log({ match });

    return (
        <Link
            to={to}
            style={{
                color: match ? 'royalblue' : 'white',
            }}
            {...props}>
            {children}
        </Link>
    )
}


