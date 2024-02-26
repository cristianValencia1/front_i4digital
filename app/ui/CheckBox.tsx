import React from "react";
/* eslint-disable no-unused-vars, no-undef*/
enum Size {
  small = "w-[18px] h-[18px]",
  regular = "w-[28px] h-[28px]",
}

enum BorderWidth {
  small = "border-[1px]",
  regular = "border-[2px]",
}

enum SvgPosition {
  small = "w-[10px] h-[10px] m-[4px]",
  regular = "w-[16px] h-[16px] m-[6px]",
}

type CheckBoxProps = {
  checked?: boolean;
  id?: string;
  name: string;
  size?: "small" | "regular";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
};
/* eslint-enable no-unused-vars */

const CheckBox = ({
  checked,
  id,
  name,
  size = "regular",
  onChange,
  value,
}: CheckBoxProps) => {
  return (
    <div className="flex gap-2 relative">
      <input
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        value={value}
        type="checkbox"
        className={`peer shrink-0 appearance-none cursor-pointer rounded-[25%] accent-mainPurple border-mainPurple ${Size[size]} ${BorderWidth[size]} checked:bg-mainPurple`}
      />
      <svg
        className={`absolute hidden pointer-events-none ${SvgPosition[size]} peer-checked:block peer-checked:text-white`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default CheckBox;
