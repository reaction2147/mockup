import styled from 'styled-components'


export const Inner = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: ${({direction}) => direction}
max-width: 1100px;
margin: auto;
width: 100%;


@media (max-width: 1000px) {
    flex-direction: column;
}
`;

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 20px 15%;
    color: white;
    overflow: hidden;
   
   
`;

export const Pane = styled.div`
    width: 50%;
        @media (max-width: 1000px) {
        width: 50%;
        padding: 0 60px;
        text-align: center;
`;

export const Container = styled.section`
    background: url('../images/misc/home-bg.jpg');
    background-color: rgba(255, 255, 255, 0.5);

    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
`;

export const Title = styled.h1`
font-size: 50px;
line-height: 1;
margin-bottom: 8px;

@media (max-width: 600px) {
    font-size: 35px;
}
`;

export const SubTitle = styled.h2`
font-size: 26px;
font-weight: normal;
line-height: normal;
text-align: center;
@media (max-width: 600px) {
    font-size: 18px;
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
`;

