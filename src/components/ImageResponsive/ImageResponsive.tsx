import React, { useCallback } from 'react';
import { ImageResponsiveProps } from "./ImageResponsive.types";

const ImageResponsive: React.FC<ImageResponsiveProps> = React.memo(({ sources, originSrc, alt, className, lazyLoad = true }): JSX.Element => {
    const renderSources = useCallback(() => {
        return sources.map((source) => (
            <source key={source.id} srcSet={source.srcSet} media={source.media} type={source.type} />
        ));
    }, [sources]);

    return (
        <picture>
            {renderSources()}
            <img src={originSrc} alt={alt} className={className} loading={lazyLoad ? "lazy" : undefined} />
        </picture>
    );
});

export default ImageResponsive;