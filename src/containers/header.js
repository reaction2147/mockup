import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';


export function HeaderContainer() {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src="/images/misc/swarfLogo.png" alt="swarfLogo"/>
                <Header.Button><p>test</p>
                </Header.Button>
                <Header.Social src="/images/twitter.png" />
            </Header.Frame>
            
        </Header>
    )
}