const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

for ( let employee of employees){
  console.log(employee);
  let returnValue=calculateBonus(employee);
  console.log(returnValue);
}

function calculateBonus(employee) {
console.log('calculate emplyee', employee );


let bonusPercentage;

if(employee.reviewRating <-2){
  bonusPercentage=0;

}
else if( employee.reviewRating ===3){
  bonusPercentage=0,04;
}
else if(employee.reviewRating===4){
  bonusPercentage = 0,06;

}
else if( employee.reviewRating ===5) {
  bonusPercentage =0.10;
}
if(employee.employeeNumber.length ===4 ){
  bonusPercentage += 0.05;
}
if(employee.annualSalary > annualSalary){
  bonusPercentage -=0.01;
}

if(bonusPercentage > 0.13){
  bonusPercentage =0.13;
}
let totalBonus= employee.annualSalary * bonusPercentage
let totalCompensation= number(employee.annualSalary) + totalBonus

return {
  name: employees.name,
  bonusPercentage: bonusPercentage,
totalCompensation: totalCompensation,
totalBonus: total
};


}


 