import React from 'react';
import styled from 'styled-components';

interface InputCheckBoxPropsType {
  type: string;
  name: string;
  value: string;
  checked?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  type,
  name,
  value,
  checked,
  handleChange,
}: InputCheckBoxPropsType) {
  return (
    <Label htmlFor={value}>
      <InputCheckBox
        type={type}
        id={value}
        value={value}
        name={name}
        checked={checked}
        onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
      />
      {value}
    </Label>
  );
}

export default Input;

const Label = styled.label`
  display: block;
  cursor: pointer;
`;

const InputCheckBox = styled.input`
  margin-right: 10px;
  vertical-align: middle;
`;
