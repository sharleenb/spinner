process.stdout.write('hello from spinner1.js... \rheyyy\n');

let delay = 100;
let spinnerList = ['|', '-', '\\', '|', '/', '-', '\\', '|'];
for (const char in spinnerList){
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
};
