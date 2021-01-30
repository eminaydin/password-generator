import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Slider,
  TextField,
} from "@material-ui/core";

export default function PasswordGenerator() {
  const [hasSpecialChars, setHasSpecialChars] = useState(false);
  const [hasCamelCase, setHasCamelCase] = useState(false);

  return (
    <Container maxWidth="sm">
      <Container>
        <h1>Generate Password</h1>
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
      </Container>
      <Button variant="contained" color="primary">
        Generate
      </Button>
      <h3>Password Length</h3>
      <Slider
        defaultValue={12}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        max={45}
        valueLabelDisplay="auto"
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={hasSpecialChars}
              onChange={() => setHasSpecialChars(!hasSpecialChars)}
              name="hasSpecialChars"
            />
          }
          label="Special Characters"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={hasCamelCase}
              onChange={() => setHasCamelCase(!hasCamelCase)}
              name="hasCamelCase"
              color="primary"
            />
          }
          label="Camel Case"
        />
      </FormGroup>
    </Container>
  );
}
