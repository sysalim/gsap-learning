export default function handleMouseOver(current, callback) {
  current.addEventListener("mouseover", callback);

  return () => {
    current.removeEventListener("mouseover", callback);
  };
}
