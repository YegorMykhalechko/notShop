import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

interface GameStyleProps {
  $animated?: boolean;
  $animatedPack?: boolean;
  $animatedInstrumental?: boolean;
  $animatedTitle?: string;
  $animatedChar?: boolean;
  $animatedCloseGame?: boolean;
}

export const drag = keyframes`
  0% {
    transform: rotate(0deg)
  }
  10% {
    transform: rotate(-8deg)
  }
  30% {
    transform: rotate(6deg)
  }
  55% {
    transform: rotate(-3deg)
  }
  80% {
    transform: rotate(1deg)
  }
  100% {
    transform: rotate(0deg)
  }
`;

export const slideFromRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const slideAndRotate = keyframes`
  0% {
    transform: translateY(-100vh) rotate(0deg);
  }
  100% {
    transform: translateY(0%) rotate(360deg);
  }
`;

export const downAndRotate = keyframes`
  0% {
    transform: translateY(0%) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
  }
`;

export const GameContainer = styled.div<GameStyleProps>`
  height: 100vh;
  background-image: url("https://img.freepik.com/free-photo/simple-white-metal-wall-background_23-2148262066.jpg?w=2000");
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${({ $animated }) =>
    $animated
      ? css`
          ${drag} .8s ease forwards
        `
      : "none"};
`;

export const GameTitle = styled.h1<GameStyleProps>`
  margin: 0;
  height: 100%;
  font-size: 8rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5f5f5;
  text-shadow: 5px 4px 11px rgb(0, 0, 0), 0 2px 5px rgb(0, 0, 0);
  span {
    position: relative;
    img {
      width: 3rem;
      cursor: grab;
    }
    &:after {
      content: "I";
      position: absolute;
      left: 0;
      transform: ${({ $animatedTitle }) =>
        css`
          ${$animatedTitle}
        `};
      transition: 0.8s ease;
      animation: ${({ $animatedChar }) =>
        $animatedChar
          ? css`
              ${downAndRotate} .8s ease forwards
            `
          : "none"};
    }
  }
`;

export const GameOpen = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  cursor: inherit;
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 5rem;
  height: 5rem;
  background-image: url("https://img.icons8.com/external-creatype-flat-colourcreatype/64/external-automobile-car-machine-creatype-flat-colourcreatype-11.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
`;

export const GamePack = styled.div<GameStyleProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: fixed;
  bottom: 1%;
  right: 1%;
  padding: 1rem;
  width: auto;
  height: 3rem;
  background-color: transparent;
  animation: ${({ $animatedPack }) =>
    $animatedPack
      ? css`
          ${slideFromRight} .8s ease forwards
        `
      : "none"};
`;

export const GamePackButton = styled.button<GameStyleProps>`
  border: none;
  background: none;
  cursor: pointer;
  animation: ${({ $animatedInstrumental }) =>
    $animatedInstrumental
      ? css`
          ${slideAndRotate} .8s ease forwards
        `
      : "none"};
  img {
    width: 2rem;
    height: 2rem;
  }
`;
