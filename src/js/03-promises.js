import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "notiflix/dist/notiflix-3.2.6.min.css";

const form = document.querySelector('.form');
const inputDelay = document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');
const position = inputAmount.value;
const delay = inputStep.value;

form.addEventListener('submit', () => {
  const inputAmountTotal = 0;
  setInterval(() => {
    inputAmountTotal += 1;
    if(inputAmountTotal === inputAmount.value){
      return
    };
    setTimeout(() => { 
    position = inputAmountTotal;
    delay += inputStep.value;
    createPromise(position, delay);
    }, inputDelay.value);
  }, inputStep.value);
})

createPromise(2, 1500).then(({position, delay}) => {
    Notify.success(`✅ Fulfilled promise $(position) in $(delay)ms`);
  }).catch(({position, delay}) => {
    Notify.failure(`❌ Rejected promise $(position) in $(delay)ms`);
  }) 

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
      resolve(`✅ Fulfilled promise $(position) in $(delay)ms`);
      } else {
      reject(`❌ Rejected promise $(position) in $(delay)ms`);
      }
    })
  }
