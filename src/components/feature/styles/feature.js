import styled from 'styled-components';

export const Background = styled.section`
background: url('./images/misc/home-bg2.png');
display: flex;
flex-direction: column;
background-repeat: no-repeat;
background-size: cover;
align-items: center;
justify-content: space-between;
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
max-width: 1100px;
margin: auto;
padding: 200px 56px;
color: white;



@media (max-width: 800px) {
    flex-direction: column;
    padding: 50px 30px;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: normal;
    margin: 0px 0;
    @media (max-width: 600px) {
        font-size: 35px;
        padding: 30px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 18px;
    font-weight: normal;
    line-height: normal;
    margin: 0px 0;
    @media (max-width: 600px) {
        font-size: 18px;
    padding: 30px;
    }`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
    grid-gap: 15px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    display: block;
    margin-top: 20px;

    @media (max-width: 800px) {
        display: flex;
        width: 100%;
        margin: 0 10px;
        padding-top: 50px;
    }

    @media (max-width: 600px) {
        display: flex;
        width: 70%;
        margin: 0 10px;
        padding-top: 50px;
    }


`;

