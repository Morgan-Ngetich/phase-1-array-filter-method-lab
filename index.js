// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (arrayDriver, name) {
 return arrayDriver.filter((driver => driver.toLowerCase() === name.toLowerCase()))
}
console.log(findMatching(drivers, 'bobby'))



function fuzzyMatch (driver, name) {
  return driver.filter((driver) => driver.charAt(0).toLowerCase() === name.charAt(0).toLowerCase())
}
console.log(fuzzyMatch(drivers, "Sally"))


const arrayDrivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName (drivers, name) {
  return arrayDrivers.filter((driver) => driver.name.toLowerCase() === name.toLowerCase())
}
console.log(matchName(arrayDrivers, "Bobby"))


