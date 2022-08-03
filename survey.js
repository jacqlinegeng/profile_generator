const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// syntax: r.question("",(answer)=>{});

// let question = ["What's your name?"];

rl.question("What's your name? Nicknames are also acceptable:)", (answer) => {
  console.log(`Hi ${answer}!`);

rl.question('What\'s your favorite hobby', (answer) => {
    console.log(`${answer} is awesome!`);

rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
  console.log(`I love ${answer} too!`);
  

rl.close();
});
});
});

