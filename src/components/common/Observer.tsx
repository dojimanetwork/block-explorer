import { useEffect, useState } from 'react';
import { createObserver, onImageInView } from './LazyImage';

export function ImageObserver() {
  const [imageObserver, setImageObserver] =
    useState<IntersectionObserver | null>(null);

  useEffect(() => {
    const imageObserver = createObserver(onImageInView);
    // if (imageObserver === null)
    setImageObserver(imageObserver);

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return imageObserver;
}
