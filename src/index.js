
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if (matrix) {
    matrix.map((item, index) => {
      if (index % 2 == 0) {
      	res = res.concat(item);
      } else {
      	res = res.concat(item.reverse());
      }
    })
  }
  return res;
}
