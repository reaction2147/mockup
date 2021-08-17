import styled from 'styled-components';

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: #dc3c39;
    position: fixed;
    width: 100%;
`

export const Container = styled.div`
display: flex;
    margin: 0 120px;
    height: px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;
   
    `;

export const Link = styled.p`

`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const Social = styled.img`
    height: 25px;
    filter: brightness(0) invert(1);
    width: auto;
`;

export const Button = styled.button`
    display: block;
    background-color: #dc3c39;
    width: 100px;
    height: 30px;
    color: white;
    border: 1px solid white;
    font-size: 12px;
    border-radius: 30px;
    padding: 0px 10px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
   
    
    &:hover {
        background: #f40612;
    }
`;