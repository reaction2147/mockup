import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { FeatureContainer } from '../containers/feature';

export default function Home() {
    return (
        <>
           <HeaderContainer></HeaderContainer>
            
           <FeatureContainer />
            <JumbotronContainer />
           
            <FooterContainer />
        </>
    )
}