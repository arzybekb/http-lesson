import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

function CourseCard({
  image,
  courseName,
  date,
  description,
  openEditCourse,
  submitDelete,
}) {
  return (
    <Container>
      <Image src={image} />
      <Wrapper>
        <TitleWrapper>
          <Title>{courseName}</Title>
          <p>{date}</p>
        </TitleWrapper>
        <Description>{description}</Description>
        <Button variant="contained" onClick={submitDelete}>
          Delete
        </Button>
      </Wrapper>
    </Container>
  );
}

export default CourseCard;

const Container = styled("div")`
  width: 270px;
  background: #ffffff;
  border-radius: 10px;
  color: black;
`;
const Wrapper = styled("div")`
  padding: 16px;
`;
const TitleWrapper = styled("div")`
  display: flex;
  color: black;
  justify-content: space-between;
`;
const Image = styled("img")`
  width: 100%;
  height: 171px;
`;
const Title = styled("p")`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #1d293f;
`;
const Description = styled("p")`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #1d293f;
  height: 66px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
