import React from "react";
import styled from "styled-components";
import { SingleReview } from "./SingleReview";

export default function Reviews() {
  return (
    <ReviewContainer>
      <div className="reviewImgs">
        <img src="speaker3.png" alt="alternative speaker"></img>
      </div>

      <div className="reviewsContainer">
        <h2>REVIEWS</h2>
        <SingleReview
          title="ARTIST"
          content={"Love it, it's the Best. I can't live without it!"}
        />
        <SingleReview
          title="PRODUCER"
          content={"Love it, it's the Best. I can't live without it!"}
        />
        <SingleReview
          title="MUSIC FAN"
          content={"Love it, it's the Best. I can't live without it!"}
        />
      </div>
    </ReviewContainer>
  );
}

const ReviewContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  color: white;
  padding-left: 3em;
  padding-top: 7.5em;
  letter-spacing: 3px;
  row-gap: 5em;

  h2 {
    flex: 1 1 100%;
    font-size: 3rem;
    margin: 0;
    padding-bottom: 1.5em;
  }

  .reviewImgs {
    flex: 1 1 10%;
    img {
      width: 25vw;
      transform: rotate(270deg);
    }
  }
  .reviewsContainer {
    flex: 1 1 50%;
    flex-wrap: wrap;
    display: flex;
    row-gap: 3em;
    h2 {
      flex: 1 1 100%;
    }
  }

  .reviewContent-reviewsContainer {
    flex: 1 1 15em;
    h4 {
      font-size: 2.5rem;
      padding-top: 0.25em;
      padding-bottom: 0.5em;
    }
  }

  .starIcon {
    color: black;
    font-size: 2rem;
    font-weight: 900;
  }

  h5 {
    width: 100%;
    color: black;
    font-weight: 400;
    font-size: 1.8rem;
    width: 80%;
  }

  @media screen and (max-width: 1200px) {
    padding-top: 2.5em;
  }

  @media screen and (max-width: 768px) {
    .reviewImgs {
      display: none;
    }
    .reviewsContainer {
      row-gap: 1em;
    }
    .reviewContent-reviewsContainer {
      h4 {
        font-size: 1.75rem;
      }

      h5 {
        font-size: 1.25rem;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding-left: 2em;
    padding-top: 0.5em;

    h2 {
      padding-bottom: 0;
    }
  }

  @media screen and (max-width: 450px) {
    .reviewContent-reviewsContainer {
      h4 {
        padding-top: 0;
        padding-bottom: 0;
      }
    }
  }
`;
