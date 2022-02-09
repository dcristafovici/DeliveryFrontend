import styled from 'styled-components';

export const HeaderNavigationStyled = styled.div`
  display: flex;
  align-items: center;
  nav {
    margin-right: 75px;
  }
  ul {
    display: flex;
    align-items: center;
    li {
      margin-right: 35px;
      &:last-child {
        margin-right: 0
      }
    }
  }

  .header-phone a {
    font-weight: 500;
  }
`;
