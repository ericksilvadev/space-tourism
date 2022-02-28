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
    backdrop-filter: blur(45px);
    background-color: ${transparentize(0.9, '#979797')};
    height: 9.5rem;
    padding-left: 13rem;
    position: relative;

    display: flex;
    align-items: center;

    ul {
      list-style-type: none;

      height: 100%;
      width: 80%;
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
          font-size: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          font-family: 'Barlow Condensed', sans-serif;
          transform: translateY(2px);

          strong {
            margin-right: 0.3rem;
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

  @media (max-width: 500px) {
    height: 13rem;
    .nav-btn {
      width: 4rem;
      height: 4rem;
      background-color: transparent;
      border: none;

      position: absolute;
      right: 5rem;
      z-index: 4;

      .burger-menu {
        width: 4rem;
        height: 2px;
        background-color: white;
        transition: all 0.3s;

        &::before,
        &::after {
          content: '';
          position: absolute;
          width: 4rem;
          height: 2px;
          background-color: white;

          transform: translateY(-1.6rem);
          transition: all 0.7s;
        }

        &::after {
          transform: translateY(1.6rem);
        }

        &.active {
          transform: translateX(4rem);
          background-color: transparent;

          &::before {
            transform: translateX(-4rem) rotate(-45deg);
          }

          &::after {
            transform: translateX(-4rem) rotate(45deg);
          }
        }
      }
    }

    nav {
      position: absolute;
      top: 0;
      right: 0;

      height: 100vh;
      width: 0;
      overflow: hidden;
      padding: 0;
      z-index: 2;
      align-items: flex-start;

      transition: 0.8s;

      ul {
        margin-top: 40%;
        flex-direction: column;
        justify-content: space-around;
        height: auto;

        a {
          height: 10rem;
          border-right: 3px solid transparent;
          border-bottom: none;

          li {
            font-size: 3rem;
            color: transparent;
            transition: 0.2s;

            strong {
              display: inline;
            }
          }
        }
      }

      &.display {
        padding: 0 0 0 5rem;
        width: 60%;

        li {
          color: white;
          transition: 0.5s;
          transition-delay: 0.5s;
        }
      }
    }
  }
`;
