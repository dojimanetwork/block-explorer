import {useEffect, useRef} from "react";

export function createObserver(inViewCallback: IntersectionObserverCallback, newOptions: IntersectionObserverInit = {}) {
    const defaultOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    }
    return new IntersectionObserver(inViewCallback, Object.assign(defaultOptions, newOptions));
}

export function onImageInView(entries: Array<any>, observer: any) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const imageSrc = element.getAttribute('data-src');

            element.removeAttribute('data-src');
            element.setAttribute('src', imageSrc);

            observer.unobserve(element);
        }
    });
}

interface LazyImageProps {
    Component?: any;
    observer: any;
    src: any;
    alt: any;
    style?: any;
    className?: string
}

const LazyImage = (props: LazyImageProps) => {
    const {src, alt, observer, Component, style, className} = props
    const imageEl = useRef(null);

    useEffect(() => {
        const {current} = imageEl;
        if (observer !== null) {
            observer.observe(current);
        }
        return () => {
            observer?.unobserve(current);
        }
    }, [observer]);

    return (
        <>
       { Component ? <Component
            ref={imageEl}
            data-src={src}
            alt={alt}
            style={style}
            className={className}
        /> :  <img 
        ref={imageEl}
            data-src={src}
            alt={alt}
            style={style}
            className={className}/>}
        </>
    )
}
export default LazyImage;