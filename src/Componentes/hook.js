import { useEffect, useState } from "react";
const INITIALPROJECTS = 4;
export default function Pagination({ json }) {
  const [current, setProjects] = useState(INITIALPROJECTS);
  const [items, setItems] = useState([...json.slice(0, 4)]);
  const [isFakeLoading, setIsFakeLoading] = useState(false);
  useEffect(() => {
    let timer;
    if (json.length === items.length) setItems([...json.slice(0, 4)]);
    if (current === INITIALPROJECTS) return;
    if (current > 4) {
      setIsFakeLoading(true);
      timer = setTimeout(() => {
        setIsFakeLoading(false);
        if (!isFakeLoading) {
          setItems((prev) => [...prev, ...json.slice(items.length, current)]);
        }
      }, 200);
    }

    return () => clearTimeout(timer);
  }, [current, setItems, json]);
  console.log(current);
  return { setProjects, current, items, isFakeLoading };
}
