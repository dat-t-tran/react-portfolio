import React from 'react'
import { classNames } from '../utils/utils'

interface TitleProps {
    children: React.ReactNode;
    seeAll: boolean;
    customClass?: string;
    onClick: () => void
}

const Title: React.FC<TitleProps> = ({ children, seeAll, customClass = "", onClick }) => {
    return (
        <div className={classNames("", customClass)}>
            {children}
            {seeAll && <button type='button' className='hidden xl:block xl:text-primary xl:text-2xl xl:font-medium xl:leading-9 xl:-tracking-[0.03rem]' onClick={() => onClick}>See All</button>}
        </div>
    )
}

export default Title