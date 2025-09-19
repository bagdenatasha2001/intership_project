import React from "react";
import Dropdown from "../form_fields/Dropdown";

export default function Hours({ value, unit, onChangeHours, onChangeUnit }) {
  return (
    <>
      <label className="text-sm font-semibold text-[#051B44] mb-2">
        Hours (Optional)
      </label>

      <div className="flex items-center rounded-md h-[56px] border border-gray-300 py-2">
        <input
          type="number"
          min="1"
          value={value}
          onChange={(e) => onChangeHours(Number(e.target.value))}
          placeholder="40"
          className="flex-1 w-20 py-2 outline-none border-none bg-transparent text-center"
        />
        <div className="w-28 border border-gray-300  rounded-lg">
          <Dropdown
            value={unit}
            onChange={onChangeUnit}
            options={[
              { value: "Week", label: "Week" },
              { value: "Month", label: "Month" },
            ]}
             withBorder={false}
             
          />
        </div>
      </div>
    </>
  );
}





