import styled from "@emotion/styled";

export const Wrapp = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  background-color: ${(p) => p.theme.colors.light};
  margin: 50px auto;
  border-radius: 10px;
`;
