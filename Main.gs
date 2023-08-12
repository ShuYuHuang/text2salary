/**
 * Convert the given salry discription to USD/ year.
 * @param {String} input The salary to Unify.
 * @return Annual salary inUSD.
 * @customfunction
 */

const FORMAT = JSON.stringify({
        "value": "converted annual salary in decimal number",
        "currency": "The detected currecy code"
      })
const EXAMPLE = JSON.stringify({
  "value": 200000,
  "currency":"TWD"
})
const PRE_PROMPT = "Turn it to JSON format: ```" + FORMAT + "```, for example " +
  'input: TWD 200K, return: ' + EXAMPLE + ', your turn:';

function getUSDSalary(jsonData){
  Logger.log(jsonData)
  const json = JSON.parse(jsonData)
  Logger.log(json)
  return convertCurrency(json.value, json.currency, "USD");
}
  

function UNIFY_SALARY(input) {
  // Logger.log(PRE_PROMPT)
  return Array.isArray(input) ?
    input.flat().map(text => 
      getUSDSalary(
        queryGPT(PRE_PROMPT, text.toUpperCase())
      )
    ) :
    getUSDSalary(
      queryGPT(PRE_PROMPT, input.toUpperCase())
    );
}




