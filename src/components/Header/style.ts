import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 0 1rem 7rem;
  width: 100%;
  height: 20rem;

  img {
    width: 4.8rem;
    height: 4.8rem;
  }

  nav {
    width: 55%;
    backdrop-filter: blur(10px);
    background-color: ${transparentize(0.9, '#979797')};
    height: 9.5rem;
    padding-left: 13rem;
    position: relative;

    display: flex;
    align-items: center;

    ul {
      list-style-type: none;

      height: 100%;
      width: 60%;
      display: flex;
      justify-content: space-between;

      a {
        height: 100%;
        border-bottom: 2px solid transparent;
        transition: border 0.2s;
        color: white;

        display: flex;
        align-items: center;

        li {
          font-size: 1.6rem;
          transform: translateY(2px);

          strong {
            margin-right: 1rem;
          }
        }

        &:hover {
          border-color: ${transparentize(0.7, '#fff')};
        }

        &.selected {
          border-color: white;
        }
      }
    }

    &::before {
      content: '';
      position: absolute;
      height: 1px;
      width: 70%;
      background-color: ${transparentize(0.75, '#979797')};
      left: -68%;
    }
  }

  @media (max-width: 820px) {
    height: 10rem;
    padding: 0;
    padding-left: 4rem;

    nav {
      height: 100%;
      padding: 0 4rem;
      width: 65%;

      ul {
        width: 100%;

        li {
          text-transform: uppercase;
          letter-spacing: 0.19rem;

          strong {
            display: none;
          }
        }
      }

      &::before {
        display: none;
      }
    }
  }
`;
