import styled from 'styled-components';

export const Container = styled.div`
  width:700px;
  height:10vh;
`;

export const Listed = styled.div`
    width:700px;
    height:10vh;
    border-radius:10px;
    background:#DAF3E5;

    display:flex;
    justify-content:center;
    align-items:center;

    h1{
        font-size:20px;
        font-weight:400;
        color:#03B252;
    }
`
export const Staged = styled.div`
    width:700px;
    height:10vh;
    border-radius:10px;
    background:#F4F5F6;

    display:flex;
    justify-content:center;
    align-items:center;

    h2{
        font-size:20px;
        font-weight:400;
        color:#AEAEB3;
        margin-right:10px;
    }

    .period{

        display:flex;
        justify-content:center;
        align-items:center;
        
        h1{
            font-size:23px;
            font-weight:400;
            color:#47474D;
            margin-right:10px;
        }
        svg{   
            margin-right:10px;
        }
    }
`
