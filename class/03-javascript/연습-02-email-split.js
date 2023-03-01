const email = 'codecamp@gmail.com';
email.includes('@'); // true
email.split('@'); // ['codecamp', 'gmail.com']
email.split('@')[0] // 'codecamp'
email.split('@')[1] // 'gmail.com'

let userMail = email.split('@')[0];
let company = email.split('@')[1];
let maskingMail = [];
maskingMail.push(userMail[0]);
maskingMail.push(userMail[1]);
maskingMail.push(userMail[2]);
maskingMail.push(userMail[3]); 
console.log(maskingMail); // ['c', 'o', 'd', 'e']
maskingMail.push('*');
maskingMail.push('*');
maskingMail.push('*');
maskingMail.push('*');
console.log(maskingMail); // ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join(''); // 'code****'
let result = maskingMail.join('') + '@' + company; 
console.log(result); // 'code****@gmail.com'