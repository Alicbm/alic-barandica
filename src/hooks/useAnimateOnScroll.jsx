import { useEffect } from "react";

const useAnimateOnScroll = (selector, options = { threshold: 0.1 }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector, options]);
};

export default useAnimateOnScroll;
