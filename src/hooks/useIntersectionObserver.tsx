import React from "react";
export const useIntersectionObserver = (ref: any, options: any) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      console.log("I'm disconnecting");

      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
};
