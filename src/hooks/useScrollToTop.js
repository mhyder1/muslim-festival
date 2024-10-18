import { useEffect } from "preact/hooks";
const useScrollToTop = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [window.location.hash]);
};
export default useScrollToTop;
