const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multi = (a, b) => {
  return a * b;
};
const divi = (a, b) => {
  return a / b;
};

// first way is single export
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.multi = multi;
// module.exports.divi = divi;

// second way to export

// this is commonjs module method for export
// module.exports = {
//   add,
//   sub,
//   multi,
//   divi
// };

// third ES moduele way
export { add, sub, multi, divi };
