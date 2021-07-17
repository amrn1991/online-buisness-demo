import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Subtitle,
  TopLine,
  Heading,
  Img,
  ImgWrapper,
} from "./InfoSection.elements";
import { Container, Button } from "./../../globalStyles";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  primary,
  description,
  buttonLabel,
  topLine,
  headline,
  alt,
  start,
  img,
}) => {
  return (
    <Fragment>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </Fragment>
  );
};

export default InfoSection;
