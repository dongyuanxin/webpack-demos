// transform 选项是在import css样式后执行的
module.exports = function(css) {
  console.log(css);
  return window.innerWidth < 1000 ? css.replace("red", "green") : css;
};
