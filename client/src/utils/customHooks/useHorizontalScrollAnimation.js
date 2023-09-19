import { useEffect } from "react";

const useHorizontalScrollAnimation = (scrollContentRef, animationSpeed = 50) => {
    useEffect(() => {
        const scrollContentElement = scrollContentRef.current;
        const scrollWidth = scrollContentElement.scrollWidth;
        const containerWidth = scrollContentElement.clientWidth;
        const scrollDistance = scrollWidth - containerWidth;

        const calculatedDuration = Math.max(scrollDistance / animationSpeed, 5);

        scrollContentElement.style.setProperty('--scroll-offset', `${scrollDistance}px`);
        scrollContentElement.style.setProperty('--scroll-duration', `${calculatedDuration}s`);
    }, [scrollContentRef, animationSpeed]);
}

export default useHorizontalScrollAnimation;
