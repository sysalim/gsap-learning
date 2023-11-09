function handleMouseOver(current, callback) {
  current.addEventListener("mouseover", callback);

  return () => {
    current.removeEventListener("mouseover", callback);
  };
}
function handleMouseLeave(current, callback) {
  current.addEventListener("mouseleave", callback);
  return () => {
    current.removeEventListener("mouseleave", callback);
  };
}
export default {
  handleMouseOver,
  handleMouseLeave,
};
