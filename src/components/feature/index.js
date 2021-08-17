import React from 'react';
import { Background, Container, Title, SubTitle, Row, Column, Image} from './styles/feature';

export default function Feature({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Feature.Container = function FeatureContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Feature.Row = function FeatureRow({children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}

Feature.Column = function FeatureColumn({children, ...restProps}) {
    return <Column {...restProps}>{children}</Column>
}

Feature.Image = function FeatureImage({children, ...restProps}) {
    return <Image {...restProps}>{children}</Image>
}