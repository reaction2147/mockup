import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src="/images/misc/swarfLogo.png" alt="swarfLogo"/>
                
            </Header.Frame>
            {children}
        </Header>
    )
}