import styled from 'styled-components';

// importing media devices
import { device } from '../../utils/devices';

export const HeaderContainer = styled.header`
  // text-align: center;
`;

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  line-height: 0.5em;
  @media ${device.laptop} {
    font-size: 5em;
  }
`;

export const SubTitle = styled.aside`
  text-align: center;
  padding: 3px 0;
  border: solid #1c1f33;
  border-width: 2px 0;
  letter-spacing: 1px;
  margin: 1.5rem 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.5em;
  @media ${device.laptop} {
    font-size: 1em;
  }
`

export const SubTitleContents = styled.div`
  display: flex;
  align-items: center;
  border: solid #1c1f33;
  border-width: 1px 0;
`;

export const SubTitleElement = styled.div`
  flex: 1;
  padding: 8px;
`; 