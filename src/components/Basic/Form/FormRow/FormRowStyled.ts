import styled from 'styled-components';

export const FormRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .formik-field {
    width: calc(50% - 10px);
  }
  &.three-elements {
    .formik-field {
      width: 30%
    }
  }
  &.one-element {
    .formik-field {
      width: 100%;
    }
  }
`;
