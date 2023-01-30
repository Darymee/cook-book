import styled from "@emotion/styled";

import { ReactComponent as Logo } from "../../../images/cookbookLogo.svg";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoIcon = styled(Logo)`
  width: 40px;
  height: 40px;
`;

export const LogoText = styled.p`
  font-size: 20px;
  font-family: "Luckiest Guy", cursive;
`;

export const LogoLousing = styled.p`
  font-size: 10px;
  font-family: "Luckiest Guy", cursive;
`;
