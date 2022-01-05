import React from 'react';
import { IconsInterface } from './IconsInterface';

const CheckoutIcon:React.FC<IconsInterface> = ({ className = '', fill = 'inherit' }: IconsInterface) => (
  <svg width="45" height="43" viewBox="0 0 45 43" className={className} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M43.5938 43C44.3704 43 45 42.3704 45 41.5938V33.0625C45 32.2859 44.3704 31.6562 43.5938 31.6562H36.5625V1.40625C36.5625 0.629625 35.9329 0 35.1562 0H1.40625C0.629623 0 0 0.629625 0 1.40625V33.0625C0 38.542 4.41591 43 9.84375 43H43.5938ZM42.1875 34.4688V40.0443C39.4304 39.4749 37.2547 37.2652 36.7 34.4688H42.1875ZM2.8125 2.8125H33.75V33.0625C33.75 35.8544 34.8968 38.3806 36.7393 40.1875H9.84375C5.96672 40.1875 2.8125 36.9912 2.8125 33.0625V2.8125Z" fill={fill} />
    <path d="M27.696 14.014L27.0737 13.3323C26.8781 13.1179 26.6173 13 26.339 13C26.0606 13 25.7997 13.1179 25.6042 13.3323L16.8591 22.9105L11.3952 16.9259C11.1997 16.7119 10.9388 16.5938 10.6604 16.5938C10.3822 16.5938 10.1215 16.7119 9.92575 16.9259L9.30323 17.6074C9.10751 17.8221 9 18.108 9 18.4126C9 18.7173 9.10751 19.003 9.30323 19.2174L15.4722 25.9739C15.4804 25.9866 15.489 25.9984 15.4991 26.0092L16.1216 26.6797C16.3172 26.8932 16.5781 27 16.8586 27H16.8618C17.1404 27 17.4013 26.8932 17.5965 26.6797L18.2192 26.0033C18.2292 25.9925 18.2377 25.9835 18.2428 25.9744L27.6959 15.6216C28.1014 15.1785 28.1014 14.4576 27.696 14.014Z" fill={fill} />
  </svg>

);

export default CheckoutIcon;
