import styled from 'styled-components';
import { COLORS, HELPERS } from '../../../../constants';
import { fieldStateEnum } from './FieldUpdateInterface';

export const FieldUpdateStyled = styled.div`
  width: 100%;
  margin-bottom: 20px;
  input {
    border: none;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    padding-right: 30px;
    padding-left: 15px;
    background: ${COLORS.GRAY_4};
    transition: ${HELPERS.TRANSITION_FAST};
    border-radius: 3px;
    &::placeholder {
      font-weight: 400;
      color: ${COLORS.GRAY_1};
    }
  }
  label {
    font-size: 12px;
    line-height: 1.3;
    color: ${COLORS.GRAY_3};
    display: block;
    margin-bottom: 7px;
  }
  &.${fieldStateEnum.NO_EDIT} {
    input {
      pointer-events: none;
    }
  }
  .field-update {
    &__input {
      position: relative;
    }
    &__actions > div {
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      svg {
        transition: ${HELPERS.TRANSITION};
      }
    }
    &__error {
      margin-top: 7.5px;
      span {
        font-size: 12px;
        color: ${COLORS.RED}
      }
    }
    &__edit {
      svg {
        fill: ${COLORS.GRAY_3};
      }
      &:hover {
        svg {
          fill: ${COLORS.PRIMARY_BLUE}
        }
      }
    }

    &__send {
      svg {
        fill: ${COLORS.PRIMARY_BLUE};
      }
    }
  }
  &.${fieldStateEnum.WAITING_SEND} {
    input {
      color: ${COLORS.PRIMARY_BLUE};
    }
  }

`;
