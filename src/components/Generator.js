import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { HiClipboardCopy, HiDocumentDuplicate } from "react-icons/hi";

import {
  Flex,
  Box,
  Title,
  Form,
  FormBox,
  FormInput,
  DisplayBox,
  PasswordInput,
  FormButton,
  BtnBox,
} from "./styles/form";

const Generator = () => {
  const { register, handleSubmit, formState, errors } = useForm({
    defaultValues: {
      length: 10,
      upper: true,
      lower: true,
      number: true,
      symbol: true,
      exclude: "",
    },
  });

  const passRef = useRef(null);
  const [password, setPassword] = useState("");
  // const [length, setLength] = useState(10);
  // const [hasUppercase, setHasUppercase] = useState(true);
  // const [hasLowercase, setHasLowercase] = useState(true);
  // const [hasNumber, setHasNumber] = useState(true);
  // const [hasSymbol, setHasSymbol] = useState(true);
  // const [excludeChars, setExcludeChars] = useState("");
  const [setting, setSetting] = useState({});
  const [isConflict, setIsConflict] = useState(false);

  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };
  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };
  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };
  const getRandomSymbol = () => {
    const symbols = "!@#$%^&*(){}[]=<>/";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  const generatePassword = (setting) => {
    const { length, upper, lower, number, symbol, exclude } = setting;

    let genPassword = "";
    let typeCount = upper + lower + number + symbol;
    const typeArr = [{ upper }, { lower }, { number }, { symbol }].filter(
      (value) => Object.values(value)[0]
      // filter [0] = value true
    );
    // console.log(typeCount, typeArr);

    if (typeCount == 0) {
      alert("You don't choose any type, please check options.");
    }

    const exChars = new Set();
    while (genPassword.length < length && typeCount && !isConflict) {
      if (
        exclude &&
        exChars.size >= exclude.length &&
        genPassword.length == 0
      ) {
        alert(
          "Ohh... Your exclude chars are conflict with options. Please to check your setting."
        );
        setIsConflict(true);
        break;
      }

      typeArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        let nextChar = randomFunc[funcName]();
        if (!exclude.includes(nextChar)) {
          genPassword += nextChar;
        } else {
          if (!exChars.has(nextChar)) {
            exChars.add(nextChar);
          }
        }
      });
    }
    // console.log(tmp, exclude);

    const finalPassword = genPassword.slice(0, length);
    // console.log(finalPassword, genPassword);
    setPassword(finalPassword);
  };

  const handleCopy = () => {
    if (password) {
      passRef.current.select();
      document.execCommand("copy");
    }
  };

  // useEffect(() => {
  //   console.log(formState.touch);
  // }, [formState]);

  const passWordSetting = (data) => {
    setSetting(data);
    generatePassword(data);
    setIsConflict(false);
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        width={[1, 1 / 2, 1 / 4]}
        m="auto"
        mt={5}
        p={3}
        alignItems="center"
        justifyContent="center"
        borderRadius={5}
      >
        <Title fontSize={4} textAlign="center" color="white" my={1}>
          Password Generator
        </Title>
        <Title fontSize={0} textAlign="center" fontWeight={1} color="gray">
          get 4~24 digit password
        </Title>
        <DisplayBox>
          <PasswordInput
            type="text"
            name="password"
            readOnly
            value={password}
            ref={passRef}
          />
          <button className="copy-btn" onClick={handleCopy}>
            <HiClipboardCopy />
          </button>
        </DisplayBox>
        <Form onSubmit={handleSubmit(passWordSetting)} p={2}>
          <FormBox>
            <label>Password length</label>
            <FormInput
              type="number"
              name="length"
              ref={register({ required: true, min: 4, max: 24 })}
            />
            {errors.length && <p> The length limit is between 4~24.</p>}
          </FormBox>
          <FormBox>
            <label>Include Uppercase letters</label>
            <FormInput type="checkbox" name="upper" ref={register} />
          </FormBox>
          <FormBox>
            <label>Include Lowercase letters</label>
            <FormInput type="checkbox" name="lower" ref={register} />
          </FormBox>
          <FormBox>
            <label>Include numbers</label>
            <FormInput type="checkbox" name="number" ref={register} />
          </FormBox>
          <FormBox>
            <label>Include symbols</label>
            <FormInput type="checkbox" name="symbol" ref={register} />
          </FormBox>
          <FormBox>
            <label>Exclude chars: </label>
            <FormInput type="text" name="exclude" ref={register} />
          </FormBox>
          <BtnBox>
            <FormButton type="submit">Generate</FormButton>
          </BtnBox>
        </Form>
      </Box>
    </Flex>
  );
};

export default Generator;
