import React from "react";
import { assets } from "../../assets/assets.config";
import { CardProps } from "./Card.types";
import ImageResponsive from "../ImageResponsive";
import Button from "../Button";
import DOMPurify from "dompurify";
import { isHtmlString } from "../../utils";

const Card: React.FC<CardProps> = ({
  header,
  body,
  footer,
  customClass = "",
}): JSX.Element => {
  return (
    <div className={customClass}>
      {header.type !== "none" && (
        <div className={header.wrapperClass}>
          <ImageResponsive
            sources={header.sources}
            originSrc={header.originSrc}
            alt={header.alt}
            className={"relative " + header.className}
            lazyLoad={header.lazyLoad}
          />
        </div>
      )}
      <div className={body.className}>
        <div className="text-black text-2xl font-medium leading-9">
          {body.title}
        </div>
        {isHtmlString(body.description) ? (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(body.description as string),
            }}
          />
        ) : (
          body.description
        )}
      </div>
      {footer.visible && footer.name && (
        <Button
          className=" justify-start items-center gap-2 inline-flex text-primary text-base font-medium leading-normal"
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

export default Card;
