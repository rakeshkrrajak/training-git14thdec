const greet = (name) => {
  return `Hello, ${name}!`;
};

const main = () => {
  console.log(greet('World'));
  console.log('Node.js application is running...');
  unused_variable = "This will fail lint"  // Missing const/let/var and semicolon
};

main();

module.exports = { greet };
