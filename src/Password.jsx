import { useState } from "react";

export default function Password() {
  const [length, setLength] = useState(6);
  const [numbers, setNumbers] = useState(true);
  const [special, setSpecial] = useState(true);
  const [caseupper, setCaseUpper] = useState(true);
  const [caselower, setCaseLower] = useState(true);
  const [password, setPassword] = useState("");

  function passwordGen() {
    let passwordset = "";
    let charset = "";

    if (numbers) charset += "0123456789";
    if (special) charset += "!@#$%^&*";
    if (caseupper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (caselower) charset += "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
      passwordset += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(passwordset);
  }

  return (
    <div>
      <h1>Password Generator</h1>

      <div id="pwdDisplay">
        {password ? (
          <h3>Password: {password}</h3>
        ) : (
          <h3>Password: Password123!</h3>
        )}
      </div>
      <div id="selections">
        <div>
          <label htmlFor="length">Set Password Length 6 - 16</label>
          <input
            type="number"
            name="length"
            id="length"
            max={16}
            min={6}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <label htmlFor="numbers">Numbers: 0123456789</label>
        <input
          type="checkbox"
          id="numbers"
          name="numbers"
          checked={numbers}
          onChange={() => setNumbers(!numbers)}
        />
        <label htmlFor="special">Special Characters: @#$%^&*</label>
        <input
          type="checkbox"
          id="special"
          name="special"
          checked={special}
          onChange={() => setSpecial(!special)}
        />
        <label htmlFor="case">UppercaseLetters: ABC</label>
        <input
          type="checkbox"
          id="case"
          name="caseUpper"
          checked={caseupper}
          onChange={() => setCaseUpper(!caseupper)}
        />
        <label htmlFor="case">Lowercase Letters: abc</label>
        <input
          type="checkbox"
          id="case"
          name="caseLower"
          checked={caselower}
          onChange={() => setCaseLower(!caselower)}
        />
      </div>
      <button id="generate" onClick={passwordGen}>
        Generate Password
      </button>
    </div>
  );
}
