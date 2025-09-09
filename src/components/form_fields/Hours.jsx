import React from "react";
import Dropdown from "../form_fields/Dropdown";

export default function Hours({ value, unit, onChangeHours, onChangeUnit }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-[#051B44] mb-2">
        Hours (Optional)
      </label>

      <div className="flex border border-gray-300 rounded-md bg-white h-[56px] relative">
        <input
          type="number"
          min="1"
          value={value}
          onChange={(e) => onChangeHours(Number(e.target.value))}
          placeholder="40"
          className="w-20 p-3  border-none focus:outline-none" />
        <div className="absolute right-0 ">
          <Dropdown
            value={unit}
            onChange={onChangeUnit}
            options={[
              { value: "Week", label: "Week" },
              { value: "Month", label: "Month" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
