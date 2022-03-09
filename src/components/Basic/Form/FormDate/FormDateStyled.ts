import styled from 'styled-components';
import { COLORS } from '../../../../constants';

export const FormDateStyled = styled.div`
  width: 100%;
  input {
    width: 100%;
  }
  .react-datepicker__header {
    background: #fff;
  }
  .react-datepicker {
    border: 1px solid ${COLORS.GRAY_4};
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
  }
  .react-datepicker__header {
    border-bottom:  1px solid ${COLORS.GRAY_4};
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-size: 18px;
    font-weight: normal;
    color: ${COLORS.GRAY_1};
  }

  .react-datepicker__day-name,
  .react-datepicker__time-name {
    font-size: 12px;
    font-weight: normal;
    width: 35px;
    height: 30px;
    line-height: 30px;
    color: ${COLORS.GRAY_9};
  }

  .react-datepicker__day {
    width: 35px;
    height: 35px;
    line-height: 35px;
  }

  .react-datepicker__time-container {
    border-left: 1px solid ${COLORS.GRAY_4};
  }
  .react-datepicker__day--selected{
    background: ${COLORS.PRIMARY_BLUE};
  }

  .react-datepicker__time-container  {
    width: 180px;
  }
  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 185px;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box{
    width: 180px;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar {
    width: 10px;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-track {
    background-color: transparent;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY_BLUE};
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY_BLUE};
    border-radius: 10px;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY_BLUE};
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
  .react-datepicker-popper {
    z-index: 10;
  }
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    border-width: 2px 2px 0 0;
    border-color: ${COLORS.GRAY_8};
    transition: all .3s ease-in-out;
  }

  .react-datepicker__navigation:hover *::before {
    border-color: ${COLORS.PRIMARY_BLUE};
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background: ${COLORS.PRIMARY_BLUE};
  }
`;
