// ES6
import sum from "./vendor/sum";
console.log("sum(1, 2) = ", sum(1, 2));

// CommonJs
var minus = require("./vendor/minus");
console.log("minus(1, 2) = ", minus(1, 2));

// AMD
require(["./vendor/multi"], function(multi) {
  console.log("multi(1, 2) = ", multi(1, 2));
});

$.get(
  "/comments/hotflow",
  {
    id: "4263554020904293",
    mid: "4263554020904293",
    max_id_type: "0"
  },
  function(data) {
    console.log(data);
  }
);

if (module.hot) {
  module.hot.accept("./vendor/sum.js", function() {
    console.log("/vendor/sum.js is changed");
  });
}
