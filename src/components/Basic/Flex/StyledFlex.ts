import styled from 'styled-components';
import { StyledFlexInterface } from './StyledFlexInterface';

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props:StyledFlexInterface) => props.direction || 'row'};
  align-items: ${(props:StyledFlexInterface) => props.align || 'stretch'};
  justify-content: ${(props:StyledFlexInterface) => props.justify || 'stretch'};
`;
