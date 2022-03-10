import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1700px;
  margin: auto;
  width: 100%;
  height: 100%;
  padding: 0 10rem;

  .title {
    font: 2.8rem 'Barlow Condensed', sans-serif;
    letter-spacing: 0.475rem;
    text-transform: uppercase;
    color: var(--text);
    margin-bottom: 9rem;

    strong {
      color: ${darken(0.5, '#fff')};
      font-weight: 600;
    }
  }
`;
