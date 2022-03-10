import styled from 'styled-components';
import { motion } from 'framer-motion';
import { transparentize } from 'polished';

export const Container = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: auto;

  img {
    transform: scale(1.1);
  }

  .infos {
    width: 44rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    nav a {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1.6rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: white;

      padding: 1rem 0;
      border-bottom: 3px solid transparent;
      transition: border 0.25s;

      & + a {
        margin-left: 3.5rem;
      }

      &:hover {
        border-bottom: 3px solid ${transparentize(0.6, '#fff')};
      }

      &.selected {
        border-bottom: 3px solid white;
      }
    }

    h1 {
      font-size: 11rem;
    }

    p {
      line-height: 3rem;
      padding-bottom: 4.5rem;
      border-bottom: solid 1px ${transparentize(0.8, '#fff')};
    }

    .travel-info {
      display: flex;
      gap: 4rem;

      div {
        display: flex;
        flex-direction: column;

        h5 {
          font-size: 1.6rem;
          padding-bottom: 1rem;
          color: var(--text);
        }

        span {
          font-size: 2.8rem;
          font-family: 'Bellefair', serif;
          text-transform: uppercase;
        }
      }
    }
  }
`;
