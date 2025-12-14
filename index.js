const greet = (name) => {
  return `Hello, ${name}!`;
};

const main = () => {
  console.log(greet('World'));
  console.log('Node.js application is running...');
};

main();

module.exports = { greet };
