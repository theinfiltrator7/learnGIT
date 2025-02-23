let fun = () => {
  let a = 0;
  let b = 1;
  let x = 5;
  let y = () => {
    console.log("this");
  };
  a++;
  console.log(a + b);
};
