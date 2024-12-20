import React, { useMemo } from "react";
import { classNames } from "../../utils/classNames";
import { FiguresProps } from "./Figures.types";

const Figures: React.FC<FiguresProps> = React.memo(
  ({
    gap,
    description,
    children,
    rounded = true,
    customClass = "",
    direction = "",
  }): JSX.Element => {
    const containerClassNames = useMemo(() => {
      return classNames(
        `${rounded ? "rounded-[0.625rem] sm:rounded-[1.25rem] border border-[#ECF4FD]" : ""} inline-flex items-center bg-white`,
        gap,
        direction,
        customClass
      );
    }, [gap, direction, customClass]);

    return (
      <div className={containerClassNames}>
        {children}
        <div className="text-secondary text-center text-[0.6875rem] sm:text-[1.125rem] font-normal leading-[1.03125rem] sm:leading-[1.6875rem] -tracking-[0.01375rem] sm:-tracking-[0.0225rem]">
          {description}
        </div>
      </div>
    );
  }
);

export default Figures;
