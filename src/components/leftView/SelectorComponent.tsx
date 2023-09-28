import React, { FC, ChangeEvent } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  Box,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { StyledFormControl } from "./styled";
import Close from "@material-ui/icons/Close";

interface DataItem {
  id: string;
  title: string;
}

interface SelectorComponentProps {
  data?: (string | DataItem)[] | null;
  label: string;
  value: string;
  loading: boolean;
  error: string | null;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const SelectorComponent: FC<SelectorComponentProps> = ({
  data,
  label,
  value,
  loading,
  error,
  onChange,
  disabled,
}) => {
  if (loading)
    return (
      <StyledFormControl variant="outlined" fullWidth>
        <CircularProgress />
      </StyledFormControl>
    );
  if (error)
    return (
      <StyledFormControl variant="outlined" fullWidth>
        <Alert severity="error">{error}</Alert>
      </StyledFormControl>
    );

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <StyledFormControl variant="outlined" fullWidth>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Box display="flex" alignItems="center">
        <Select
          labelId={`${label}-label`}
          value={value}
          onChange={handleChange}
          label={label}
          disabled={disabled}
          style={{ flexGrow: 1, width: "80%" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {data &&
            data.map((item) => {
              if (typeof item === "string") {
                return (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                );
              } else {
                return (
                  <MenuItem key={item.id} value={item.id}>
                    {item.title}
                  </MenuItem>
                );
              }
            })}
        </Select>
        <Button
          onClick={handleClear}
          disabled={disabled || !value}
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
        >
          <Close />
        </Button>
      </Box>
    </StyledFormControl>
  );
};
