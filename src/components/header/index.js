import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { Background, Container, Logo, Social, Button} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.Social = function HeaderSocial({ children, ...restProps}) {
    return <Social {...restProps}>{children}</Social>
}

Header.Button = function HeaderButton({ children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}
