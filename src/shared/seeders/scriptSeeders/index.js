const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('>> Insert a seeder name: ', function (answer) {
  const timestamp = Date.now();
  const fileName = `Seed${(answer.charAt(0).toUpperCase() + answer.slice(1)).replace(/\s/g, '')}${timestamp}.ts`;

  if (fs.existsSync(`./src/shared/seeders/${fileName}`)) {
    console.log('Failed to create seed. Seed already exists!');
    return;
  }

  fs.writeFileSync(`./src/shared/seeders/${fileName}`, '', err => {
    if (err) {
      console.log('Failed to create seed', err);
      throw err;
    }
  });

  if (fs.existsSync(`./src/shared/seeders/${fileName}`)) {
    console.log('Success to create seed');
  }
  rl.close();
});
