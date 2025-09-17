import React from "react";
import Select from "react-select";

export default function MultiSelectDropdown({
  options = [],
  placeholder = "Select...",
  value = [],
  onChange,
  isSearchable = true,
}) {
  return (
    <Select
      isMulti
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isSearchable={isSearchable}
      className="w-full "
      styles={{
        control: (provided, state) => ({
          ...provided,
          borderRadius: "8px",
          padding: "2px",
          height:"56px",
          borderColor: state.isFocused ? "#D8DAE5" : provided.borderColor,
          boxShadow: state.isFocused ? "0 0 0 1px #D1D5DB" : provided.boxShadow,
          "&:hover": {
            borderColor: "9ca3af"
          }
        }),
        multiValue: (provided) => ({
          ...provided,
          backgroundColor: "#E5E7EB",
          borderRadius: "6px",
          padding: "2px 4px",
        }),
      }}
    />
  );
}
