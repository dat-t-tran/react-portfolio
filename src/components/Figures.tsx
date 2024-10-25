import React from 'react'
import { classNames } from '../utils/utils';

interface FiguresProps {
    gap: string;
    description: React.ReactNode;
    children: React.ReactNode;
    direction?: string;
    customClass?: string;
}

const Figures: React.FC<FiguresProps> = ({ gap, description, children, customClass = "", direction = "" }) => {
    return (
        <div className={classNames("inline-flex py-2 px-4 sm:p-4 items-center rounded-[0.625rem] sm:rounded-[1.25rem] border border-[#ECF4FD] bg-white absolute", gap, direction, customClass)}>
            {children}
            <div className='text-secondary text-center text-[0.6875rem] sm:text-[1.125rem] font-normal leading-[1.03125rem] sm:leading-[1.6875rem] -tracking-[0.01375rem] sm:-tracking-[0.0225rem]'>{description}</div>
        </div>
    )
}

export default Figures