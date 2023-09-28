import styled from "styled-components";
import { Box as MuiBox, Button as MuiButton, FormControl,Select } from '@material-ui/core';

export const StyledFormControl = styled(FormControl)`
  margin: 20px 0 !important;
  margin-left: 20px !important;
`;

export const StyledBox = styled(MuiBox)`
  display: flex;
  align-items: center;
`;



export const StyledButton = styled(MuiButton)`
  margin-left: 10px;
`;
