import styled, { keyframes } from "styled-components";

interface props {
  delay?: string;
}

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Project = styled.div`
  width: 100%;
  height: 100vh;

  padding-left: 100px;
  padding-top: 50px;
`;

export const ContentCont = styled.div<props>`
  display: flex;
  flex-direction: column;

  animation: ${slideInUp} 0.5s ease-out forwards;
  animation-delay: ${(props: { delay?: string }) => props.delay || "0s"};
`;

export const ProjectWrap = styled.div<props>`
  max-width: 600px;

  padding: 20px;
  margin-bottom: 20px;

  border-radius: 10px;

  background-color: #141414;
  color: #8f9094;

  opacity: 0;

  animation: ${slideInUp} 0.5s ease-out forwards;
  animation-delay: ${(props: { delay?: string }) => props.delay || "0s"};

  h3 {
    margin-bottom: 10px;

    color: #3ccf91;

    font-size: 1.5rem;
  }

  a {
    color: #3ccf91;

    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
