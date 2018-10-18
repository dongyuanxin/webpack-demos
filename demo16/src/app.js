import "babel-polyfill";
import "./style/base.css";
import "./style/common.css";

import sum from "./vendor/sum";
console.log("sum(1, 2) = ", sum(1, 2));
var minus = require("./vendor/minus");
console.log("minus(1, 2) = ", minus(1, 2));
require(["./vendor/multi"], function(multi) {
  console.log("multi(1, 2) = ", multi(1, 2));
});

$("div").addClass("new");

/**在development中, 才能正常运行( 通过proxy ) */
if (process.env.NODE_ENV === "development") {
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
} else {
  console.log("开发模式下才能测试 '代理功能' ");
}
/***************************************** */
