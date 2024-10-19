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

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div<props>`
  opacity: 0;

  animation: ${slideInUp} 0.5s ease-out forwards;
  animation-delay: ${(props: { delay?: string }) => props.delay || "0s"};
`;

export const IntrodWrap = styled.div`
  padding: 20px 0;
`;

export const Introd = styled.div<props>`
  color: #8f9094;

  opacity: 0;

  animation: ${slideInUp} 0.5s ease-out forwards;
  animation-delay: ${(props: { delay?: string }) => props.delay || "0s"};
`;

export const ContentCont = styled.div<props>`
  display: flex;

  padding: 10px 0;
  gap: 15px;

  opacity: 0;

  animation: ${slideInUp} 0.5s ease-out forwards;
  animation-delay: ${(props: { delay?: string }) => props.delay || "0s"};
`;

export const ContactWrap = styled.div`
  width: 100px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 7px;

  background-color: #141414;

  transition: background-color 0.2s ease-in;

  .contactLink {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    font-weight: 550;
    font-size: 0.9rem;
  }

  .githubIcon {
    width: 16px;
    height: 16px;
  }

  .mailIcon {
    width: 20px;
    height: 20px;
  }

  &:hover {
    cursor: pointer;
    background-color: #292929;
  }
`;
