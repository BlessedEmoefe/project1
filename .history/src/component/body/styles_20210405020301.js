import styled from "styled-components";

export const BodyStyles = styled.div`
  background: transparent;
  width: 100%;
  .bodyContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, minmax(200px, auto));
    grid-gap: 1rem;
    padding: 2rem;

    .section1,
    .section2,
    .section3,
    .section4 {
      border-radius: 0.6rem;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      font-weight: bold;
      color: white;
    }

    .section1 {
      background: #184d47;
      grid-column: 1/2;
      grid-row: 1/2;
    }
    .section2 {
      background: #96bb7c;
      grid-column: 2/4;
      grid-row: 1/2;
    }
    .section3 {
      background: #bd9354;
      grid-column: 1/3;
      grid-row: 2/3;
    }
    .section4 {
      background: #e3d18a;
      grid-column: 3/4;
      grid-row: 2/3;
    }
  }

  @media (max-width: 450px) {
    .bodyContainer {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, minmax(200px, auto));

      .section1,
      .section2,
      .section3,
      .section4 {
        font-size: 1rem;
      }

      .section1 {
        grid-column: 1/2;
        grid-row: 1/2;
      }
      .section2 {
        grid-column: 1/2;
        grid-row: 2/3;
      }
      .section3 {
        grid-column: 1/2;
        grid-row: 3/4;
      }
      .section4 {
        grid-column: 1/2;
        grid-row: 4/5;
      }
    }
  }
`;
