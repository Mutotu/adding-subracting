function func(n) {
  return {
    add: function () {
      n += 1;
      console.log(n);
    },
    sub: function () {
      n--;
    }
  };
}

const colors = [
  "blue",
  "red",
  "orange",
  "green",
  "yellow",
  "blue",
  "red",
  "orange",
  "green",
  "yellow"
];
const vars = { func, colors };

export default vars;
