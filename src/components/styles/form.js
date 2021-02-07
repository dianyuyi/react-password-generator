import styled from "styled-components";
import {
  flexbox,
  color,
  space,
  layout,
  typography,
  border,
} from "styled-system";

export const Flex = styled("div")(flexbox);

export const Box = styled("div")(
  {
    boxSizing: "border-box",
    boxShadow: "inset 3px 2px 3px rgba(255,255,255,0.75)",
    background: "#d8ccc5",
  },
  space,
  layout,
  flexbox,
  border
);

export const Title = styled("h1")(typography, color, space);

export const DisplayBox = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  .copy-btn {
    background: transparent;
    border: none;

    svg {
      font-size: 1.875rem;
      /* padding: 0 0.5rem; */
      fill: #4d4d4d;
    }
  }
`;
export const PasswordInput = styled.input`
  outline: none;
  width: 100%;
  padding: 0.5rem 0.5rem;
  text-align: center;
  border: none;
  border-radius: 3px;
  background: #4d4d4d;
  color: white;
  font-weight: 700;
  letter-spacing: 3px;
`;

export const Form = styled("form")(
  {
    borderRadius: "3px",
    boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.15)",
    background: "#fff4ef",
  },
  space,
  flexbox
);

export const FormBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  flex-wrap: wrap;
  font-family: "Robot";
  border-bottom: solid 1px #fff;

  label {
    color: #4d4d4d;
    font-size: 0.875rem;
  }

  p {
    font-size: 0.75rem;
    color: #ee7425;
    margin-bottom: 0;
  }
`;
export const FormInput = styled.input`
  outline: none;
  border: none;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 0.25rem 0.5rem;
  /* appearance: none; */
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;
export const FormButton = styled.button`
  outline: none;
  appearance: none;
  text-align: center;
  border: none;
  background: #fff084;
  font-size: 1rem;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  position: relative;
  overflow: hidden;
  transition: 0.35s;
  cursor: pointer;

  :before {
    content: "";
    position: absolute;
    top: -20px;
    left: -40%;
    height: 70px;
    width: 20px;
    background: #fff;
    opacity: 0.75;
    transition: 0.35s;
    transform: rotate(45deg);
  }
  &:hover {
    :before {
      left: 130%;
    }
  }
`;
