import React from 'react';
import { classNames } from '../../utils/classNames';
import { HeadingProps } from './Heading.types';

const Heading: React.FC<HeadingProps> = ({
  children,
  seeAll = false,
  customClass = '',
  onClick = () => {},
}): JSX.Element => {
  return (
    <div className={classNames('', customClass)}>
      {children}
      {seeAll && (
        <button
          type="button"
          className="hidden xl:block xl:text-primary xl:text-2xl xl:font-medium xl:leading-9 xl:-tracking-[0.03rem]"
          onClick={onClick}
        >
          See All
        </button>
      )}
    </div>
  );
};

export default Heading;
