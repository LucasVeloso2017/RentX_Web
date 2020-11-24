import styled,{ keyframes } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
    height:100vh;

    display:flex;
    align-items:stretch;
`
const appearFromLeft=keyframes`

    from{
        opacity:0;
        transform:translateX(-50px);
    }

    to{
        opacity:1;
        transform:translateX(0px);
    }

`


export const AnimationContainer = styled.div`
    display:flex;
    flex-flow: column;
    align-items:center;
    justify-content:center;

    animation:${appearFromLeft} 1s;

    form{
        margin:80px 0;
        width:340px;
        text-align:center;

        h1{
            margin-bottom:24px;
            width:180px;
            font-size:40px;
            
            text-align:left;
        }
        p{
            text-align:left;
            color:#7A7A80;  
            width: 204px; 
            line-height: 25px;
            font-size:15px;
        }

        a{
            color:#DC1637;
            display:block;
            margin-top:24px;
            text-decoration:none;

            transition:color 0.2s;
            &:hover{
                color:${shade(0.2,'#DC1637')};
            }

        }


    }

    > a{
            color:#1B1B1F;
            display:block;
            text-decoration:none;
            transition:color 0.2s;

            display:flex;
            align-items:center;
            svg{
                margin-right:16px;
            }

            &:hover{
                color:${shade(0.2,'#1B1B1F')};
            }

        }

`

export const Content = styled.div`
    display:flex;
    flex-flow: column;
    align-items:center;
    justify-content:center;

    width:100%;
    max-width:700px;

    background:#EBEBF0;
`

export const Background = styled.div`
    flex:1;
    background:#29292E;
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;

    .bg{
        position:absolute;
        width:48.7%;
        height:100%;
    }
    .logo{
        width:400px;
    }

`
