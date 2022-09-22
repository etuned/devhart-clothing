import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
    @media only screen and (min-width: 900px) {
      width: 900px;
      margin: 30px auto;
    }
    @media only screen and (max-width: 899px) {
      width: 100%;
      margin: 10px auto;
      flex-direction: column;
      align-items: center;
    }

`;
