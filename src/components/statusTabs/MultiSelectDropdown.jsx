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
      className="w-full"
      styles={{
        control: (provided) => ({
          ...provided,
          borderRadius: "8px",
          padding: "2px",
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
