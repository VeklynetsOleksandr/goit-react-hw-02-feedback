import styled from '@emotion/styled';

export const Button = styled.button`
font-size: 18px;
  border: 2px solid #541267;
  border-radius: 10px;
  padding: 8px 25px;
  margin-right: 8px;
  border-color: #D6EAF8;
  color: #fff;
  
  box-shadow: 0 0 40px 40px #D6EAF8 inset, 0 0 0 0 #D6EAF8;
  transition: all 150ms ease-in-out;
  &:hover {
    box-shadow: 0 0 10px 0 #D6EAF8 inset, 0 0 10px 4px #D6EAF8;
  }

  &:nth-of-type(1):hover,
  &:nth-of-type(1):focus {
    transform: scale(1.05);
    color: #66df4edc;
  }
  &:nth-of-type(2):hover,
  &:nth-of-type(2):focus {
    transform: scale(1.05);
    color: #93a790dc;
  }
  &:nth-of-type(3):hover,
  &:nth-of-type(3):focus {
    transform: scale(1.05);
    color: #f10b0bdf;
  }
`;
export const Title = styled.h2`
`