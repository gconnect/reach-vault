import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

// Alice and Bob account
const accAlice= await stdlib.newTestAccount(stdlib.parseCurrency(7000));
const accBob = await stdlib.newTestAccount(startingBalance)

console.log('Hello, Alice and Bob!');
console.log('Launching...');

// Alice deploys the contract
const ctcAlice = accAlice.contract(backend);
// Bob attaches to the contract
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const Shared = () =>({
  showTime: (t) =>{
    console.log(`Time is ${t}`)
  }
})

const choiceArray = ["I’m not here", "I’m still here”"]

const getAccountBalance = async (who) => stdlib.balanceOf(who)

console.log(`Starting account balance of Alice is ${await getAccountBalance(accAlice)}`)
console.log(`Starting account balance of Bob is ${await getAccountBalance(accBob)}`)

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    // implement Alice's interact object here
    ...stdlib.hasRandom,
    ...Shared(),
    inheritance: stdlib.parseCurrency(5000),
    getChoice: () => {
     const choice = Math.floor(Math.random() * 2)
     console.log(`Alice choice is ${choiceArray[choice]}`)
      return choice == 0 ? false : true
    }
  }),
  backend.Bob(ctcBob, {
    // implement Bob's interact object here
    ...stdlib.hasRandom,
    ...Shared(),
    acceptTerms: (amt) =>{
      console.log(`Bob accept the terms of the vault for  ${stdlib.parseCurrency(amt)}`)
      return true
    }
  }),
]);

console.log(`Ending account balance of Alice is ${await getAccountBalance(accAlice)}`)
console.log(`Ending account balance of Bob is ${await getAccountBalance(accBob)}`)
console.log('Goodbye, Alice and Bob!');
