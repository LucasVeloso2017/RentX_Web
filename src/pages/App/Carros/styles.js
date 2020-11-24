import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.div`
  width:100%;

  display:flex;
  justify-content:space-between;
  align-items:center;

  .list{
    flex:1;

    height:60vh;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .scroll{
    width:90%;
    height:60vh;
    padding:10px 0;
    overflow-y:scroll;

    display:flex;
    flex-direction:column;
    align-items:center;


    ::-webkit-scrollbar {
        width: 12px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #E5E5E5;
        border-radius:8px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #DC1637;
        border-radius:8px;

        &:hover{
            background:${shade(0.2,'#DC1637')};
        }
    }
  }
`;
