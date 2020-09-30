import Countdown from './countdown.js';

const diasNatal = new Countdown('24 December 2020 23:59:59 GMT-0300');

console.log(`Faltam ${diasNatal.total.days} dias, ${diasNatal.total.hours} horas e ${diasNatal.total.seconds} segundos para o Natal ! :D`)