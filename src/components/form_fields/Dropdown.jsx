import React from "react";
import { BiFontSize } from "react-icons/bi";
import Select from "react-select";

export default function Dropdown({ label, value, onChange, options }) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "56px",
      height: "56px",
      boxShadow: "none",

      borderColor: state.isFocused ? "#D8DAE5" : "#D8DAE5",
      "&:hover": {
        borderColor: "#9ca3af",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "56px",
      padding: "0 8px",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: "56px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontWeight: 500,
      fontSize: "14px",
      color: "#6b7280",
    }),
  };

  return (
    <div className="flex flex-col w-full">
      {label && <label className="text-sm text-[#051B44] mb-2">{label}</label>}
      <Select
        options={options}
        value={options.find((opt) => opt.value === value)}
        onChange={(opt) => onChange(opt.value)}
        isSearchable
        placeholder="Select"
        styles={customStyles}
      />
    </div>
  );
}
