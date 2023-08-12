const XCHANGE_URL = "https://api.exchangerate.host/latest";

function convertCurrency(value, start_unit, end_unit) {
  var response = UrlFetchApp.fetch(XCHANGE_URL);
  var json = response.getContentText();
  var data = JSON.parse(json);
  
  var start_rate = data.rates[start_unit];
  var end_rate = data.rates[end_unit];
  
  return (value / start_rate) * end_rate;
}