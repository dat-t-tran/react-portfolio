import React from 'react';
import { assets } from '../../assets/assets.config';
import { CardProps } from './ExpertiseCard.types';
import ImageResponsive from '../ImageResponsive';
import Button from '../Button';

const ExpertiseCard: React.FC<CardProps> = ({
  header,
  body,
  footer,
  customClass = '',
}): JSX.Element => {
  return (
    <div className={customClass}>
      {header.type !== 'none' && (
        <div className={header.wrapperClass}>
          <ImageResponsive
            sources={header.sources}
            originSrc={header.originSrc}
            alt={header.alt}
            className={'relative ' + header.className}
            lazyLoad={header.lazyLoad}
          />
        </div>
      )}
      <div className="self-stretch h-[102px] flex-col justify-start items-start gap-2 flex">
        <div className="text-black text-2xl font-medium leading-9">
          {body.title}
        </div>
        <div className="self-stretch text-secondary text-base font-normal leading-7">
          {body.description}
        </div>
      </div>
      {footer.visible && footer.name && (
        <Button
          className="justify-start items-center gap-2 inline-flex text-primary text-base font-medium leading-normal"
          id="btn-more-info"
          type="button"
          image={assets.global.arrowRight}
          onClick={() => {}}
        >
          {footer.name}
        </Button>
      )}
    </div>
  );
};

export default ExpertiseCard;
