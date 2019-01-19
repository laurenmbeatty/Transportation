import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px;
  img {
    width: 20rem;
    height: 20rem;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }
`;
