export function probability():number
{
  return Math.floor(Math.random() * (7 - 0 + 1) + 0)
}
console.log(probability())