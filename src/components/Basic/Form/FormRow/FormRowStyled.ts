import styled from 'styled-components';

export const FormRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0;
  }
  justify-content: space-between;
  .formik-field,
  .field-update {
    width: calc(50% - 10px);
    margin-bottom: 0;
  }
  &.three-elements {
    .formik-field,
    .field-update {
      width: 30%
    }
  }
  &.one-element {
    .formik-field,
    .field-update {
      width: 100%;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
