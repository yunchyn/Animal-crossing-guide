import styled from "styled-components";

const DropdownSelect = styled.select`
  margin: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default function Dropdown({ value, onChange, options, defaultText }) {
  return (
    <DropdownSelect
      value={value}
      onChange={onChange}
    >
      <option value="">{defaultText}</option>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </DropdownSelect>
  );
}
