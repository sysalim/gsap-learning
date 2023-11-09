// scrollUtil.js
export const handleScroll = (callback) => {
  window.addEventListener('scroll', callback);

  return () => {
    window.removeEventListener('scroll', callback);
  };
};
