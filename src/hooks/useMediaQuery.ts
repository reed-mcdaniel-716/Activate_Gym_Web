import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    // media.matches is whether or not the document equals the media query at load time
    // if the that evaluation does not equal what we currently have in "matches", update it
    if(media.matches !== matches){
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [matches, query])

  // we return whether or not a given media query is satisfied
  return matches;
}

export default useMediaQuery;