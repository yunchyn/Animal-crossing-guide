import { useState } from "react";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: relative;
  width: 220px;
  cursor: pointer;
`;

const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
  background-color: white;
`;

const DropdownLabel = styled.div`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;

const DropdownIcon = styled.div`
  width: 45px;
  height: 45px;
  background-color: #61d0d0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;
  border-top: none;
  background-color: white;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function Dropdown({ value, onChange, options, defaultText }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={handleToggle}>
        <DropdownLabel>{value ? options.find((option) => option.value === value).label : defaultText}</DropdownLabel>
        <DropdownIcon>{!isOpen ? "▼" : "▲"}</DropdownIcon>
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}
