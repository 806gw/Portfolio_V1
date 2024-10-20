import styled, { keyframes } from "styled-components";

interface props {
  delay?: string;
}

const slideInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutMe = styled.div`
  width: 100%;
  height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding-left: 100px;
`;

export const ContentCont = styled.div<props>`
  display: flex;
  flex-direction: column;

  animation: ${slideInUp} 0.5s ease-out forwards;
  animation-delay: ${(props: { delay?: string }) => props.delay || "0s"};
`;

export const ContentWrap = styled.div<props>`
  max-width: 550px;

  padding: 10px 0;

  color: #8f9094;

  opacity: 0;

  animation: ${slideInUp} 0.5s ease-out forwards;
  animation-delay: ${(props: { delay?: string }) => props.delay || "0s"};
`;
