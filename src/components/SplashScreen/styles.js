import styled,{css} from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  width:100vw;
  height:100vh;

  background:#29292E;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
  .simbol{
    margin-bottom:100px;
    animation: spin 2s linear infinite;   
  }
  
  .logo{
    width:300px;
  }

  @keyframes spin {
  to {
    transform: rotate(360deg);
  }
}


`
