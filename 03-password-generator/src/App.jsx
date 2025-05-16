import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [checkNumber, setCheckNumbers] = useState(false);
  const [checkSymbol, setCheckSymbols] = useState(false);
  const inputRef = useRef(null)

  const copyPassword = useCallback(() => {
    inputRef.current.select()
    navigator.clipboard.writeText(inputRef.current.value)
  }, [password])

  // function copyPassword() {
  //   inputRef.current.select()
  //   inputRef.current.setSelectionRange(0, 4) // to select a specific range of value
  //   navigator.clipboard.writeText(inputRef.current.value)
  // }

  const generatePassword = useCallback(() => {
    let passwordCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let passwordNumbers = "12345678912345678901234567890";
    let passwordSymbols = "!@#$%^&*><|+=`~{}[]()";
    let passowrd = "";

    if (checkNumber) {
      passwordCharacters += passwordNumbers;
    }
    if (checkSymbol) {
      passwordCharacters += passwordSymbols;
    }

    for (let i = 0; i < length; i++) {
      passowrd +=
      passwordCharacters[
        Math.floor(Math.random() * passwordCharacters.length)
      ];
    }
    setPassword(passowrd);
  }, [length, checkNumber, checkSymbol, setPassword])

  useEffect(() => {
    generatePassword();
  }, [length, checkNumber, checkSymbol]);

  return (
    <>
      <div className="h-screen w-full flex flex-col gap-10 items-center p-16">
        <div>
          <input
            ref={inputRef}
            className="border w-[350px] rounded-l-full px-2 py-1"
            type="text"
            readOnly
            value={password}
          />
          <button
            onClick={copyPassword}
            className="border rounded-r-full hover:bg-blue-800 border-white px-3 py-1 bg-blue-600 font-semibold text-white  cursor-pointer"
          >
            COPY
          </button>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-1">
            <input
              value={length}
              onChange={(e) => setLength(e.target.value)}
              min={6}
              max={30}
              type="range"
              id="lengthRange"
            />
            <label htmlFor="lengthRange">length ({length})</label>
          </div>
          <div className="flex gap-1">
            <input
              id="numbersCheckbox"
              onChange={() => setCheckNumbers((x) => !x)}
              type="checkbox"
            />
            <label htmlFor="numbersCheckbox">Numbers</label>
          </div>
          <div className="flex gap-1">
            <input
              id="symbolsCheckbox"
              onChange={() => setCheckSymbols((x) => !x)}
              type="checkbox"
            />
            <label htmlFor="symbolsCheckbox">Symbols</label>
          </div>
        </div>
      </div>
    </>
  );
}
