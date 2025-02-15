import styled from "styled-components";
import {color} from "../../config/colors"

export const ProfileStyles = styled.div`
  height: 100%;
  width: max-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 10%;

  .imageContainer {
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    cursor: pointer;
  }
  .profileTextAndIcon {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    margin-left: 0.5rem;
    cursor: pointer;
    b {
      font-size: 1rem;
      margin-right: 0.2rem;
    }
  }
  .profileContentContainer {
    width: max-content;
    padding: 1.6rem 1rem;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
    background: whitesmoke;
    position: absolute;
    right: 0;
    top: 4.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: ${color.primary};
    font-weight: bold;
    .profileContent {
      width: max-content;
      padding: 1.6rem 1rem;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
      background: whitesmoke;
      position: absolute;
      right: 0;
      top: 4.5rem;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      && span {
        margin-left: 0.5rem;
      }
    }
  }
`;
