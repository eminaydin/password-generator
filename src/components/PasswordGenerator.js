import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Slider,
  TextField,
} from "@material-ui/core";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [hasSpecialChars, setHasSpecialChars] = useState(true);
  const [hasCapitals, setHasCapitals] = useState(false);
  const [passwordLength, setPasswordLength] = useState(12);

  const generatePassword = () => {
    const upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const lowerCase = upperCase.toLowerCase();
    const specialCharacters = `1234567890!"#%^&'()*+,-/;<=>?@[]\\_\`{}|~`;
    let possiblePassword = "";
    if (hasCapitals) possiblePassword += upperCase;
    if (lowerCase) possiblePassword += lowerCase;
    if (hasSpecialChars) possiblePassword += specialCharacters;
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword +=
        possiblePassword[
          Math.floor(Math.random() * Math.floor(possiblePassword.length - 1))
        ];
    }
    setPassword(generatedPassword);
  };

  return (
    <Card maxWidth="sm" className="generatorWrapper">
      <CardContent>
        <Container className="generatorHeader">
          <h1>Generate Password</h1>
          <FormControl fullWidth>
            <TextField
              disabled
              id="standard-disabled"
              label="Password"
              value={password}
            />
          </FormControl>
        </Container>
        <Button
          variant="contained"
          color="primary"
          className="generateButton"
          onClick={generatePassword}
        >
          Generate
        </Button>
        <h3>Password Length</h3>
        <Slider
          value={passwordLength}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          marks
          min={12}
          max={36}
          valueLabelDisplay="auto"
          onChange={(event, newValue) => {
            setPasswordLength(newValue);
            newValue !== passwordLength && generatePassword();
          }}
          color="primary"
        />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={hasSpecialChars}
                onChange={() => setHasSpecialChars(!hasSpecialChars)}
                name="hasSpecialChars"
                color="primary"
              />
            }
            label="Special Characters"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={hasCapitals}
                onChange={() => setHasCapitals(!hasCapitals)}
                name="hasCapitals"
                color="primary"
              />
            }
            label="Capital Letters"
          />
        </FormGroup>
      </CardContent>
    </Card>
  );
}
