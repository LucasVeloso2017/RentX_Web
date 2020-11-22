import styled from 'styled-components';

export const Container = styled.div`
    margin:0px 20px;
    width:400px;
    height:250px;

    background:#F4F5F6;
    border-radius:10px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.3);

    .car-infos{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .car,.values{
        margin:20px 20px;
        display:flex;
        flex-direction:column;
    }
    #car-name,#time{
        font-size:13px;
        font-family: 'Archivo', sans-serif;
        font-weight:600;
        letter-spacing:0.5px;
        color:#7A7A80;
        text-transform: uppercase;
    }
    #car-model{
        margin-top:5px;
        font-size:17px;
        font-family: 'Archivo', sans-serif;
        font-weight:600;
        letter-spacing:0.5px;
        color:#47474D;
        text-transform: uppercase;
    }
    #price{
        
        margin-top:5px;
        font-size:17px;
        font-family: 'Archivo', sans-serif;
        font-weight:600;
        letter-spacing:0.5px;
        color:#DC1637;
        text-transform: uppercase;
    }



    .car-picture{
        display:flex;
        justify-content:center;
        align-items:center;
    }
`;
