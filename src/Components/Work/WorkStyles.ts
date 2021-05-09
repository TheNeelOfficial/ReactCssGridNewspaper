import styled from 'styled-components';

// importing media devices
import { device } from '../../utils/devices';

// importing fonts
// import * as fonts from '../../utils/fonts';


export const Grid = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 1fr;
  max-width: 90%;
  grid-template-areas:
    "one"
    "two"
    "three"
    "four"
    "five"
    "six"
    "seven"
    "eight";
    @media ${device.laptop} {
      grid-template-columns: repeat(9, 1fr);
      grid-template-areas:
      "one one one one one one two two two"
      "three three three four four four five five five"
      "six six six six six seven seven seven seven"
      "eight eight eight eight eight eight eight eight eight";
    }
  }
  .articleContents{
    .fig{
      padding: 0.5em;
      img{
        width: 100%;
        border: 1px solid black;
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        filter: grayscale(100%);
        transition: all 0.5s ease;
        &:hover{
          -webkit-filter: grayscale(0%);
          -moz-filter: grayscale(0%);
          filter: grayscale(0%);
        }
      }
    }
    padding: 1em;
    text-align: justify;
    column-count: 1;
    @media ${device.laptop} {
      column-count: 3;
      h1{
        text-align: left;
      }
    }
  }
  .one {
      grid-area: one;
      // background: lightyellow;
      h1{
        text-align: center;
      }
      @media ${device.laptop} {
        h1{
          text-align: left;
        }
        border-right: 1px solid black;
        border-bottom: 1px solid black;
      }
  }
  .two {
      grid-area: two;
      // background: pink;
      border-bottom: 1px solid black;
  }
  .three {
      grid-area: three;
      // background: orange;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
  }
  .four {
      grid-area: four;
      // background: skyblue;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
  }  
  .five{
    grid-area: five;
    // background: lightgreen;      
    border-bottom: 1px solid black;
  }
  .six{
    grid-area: six;
    // background: grey;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
  .seven{
    grid-area: seven;
    border-bottom: 1px solid black;
  }
  .eight{
    grid-area: eight;
    margin-bottom: 1em;
  }

`;


