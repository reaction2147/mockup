import styled from 'styled-components';

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: #dc3c39
`

export const Container = styled.div`
display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;
    `;

export const Link = styled.p``;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;