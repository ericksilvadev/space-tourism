import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  height: 100vh;
  width: 100%;
`;

export const Content = styled(motion.main)`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  height: 50%;

  .heading {
    width: 45rem;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      line-height: 3rem;
    }
  }

  button {
    height: 27.4rem;
    width: 27.4rem;
    border-radius: 50%;
    border: none;
    background-color: white;
    position: relative;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);

      transition: transform 0.4s ease-in-out;
    }

    &:hover::before {
      transform: scale(1.8);
    }
  }

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin: 11rem 0;
    height: 70%;

    .heading {
      width: 52rem;
      height: 40rem;
      text-align: center;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        font-size: 18rem;
      }
      p {
        line-height: 3rem;
      }
    }
  }
`;
