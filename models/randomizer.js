var randomGenerator = function (length) {
   var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
   var returnValue = "";
   while (returnValue.length < length) {
      number = Math.round(Math.random(1, characters.length) * 100) - 1;
      randomValue = characters.charAt(number);
      returnValue = returnValue + randomValue;
   }
   return returnValue;
};


module.exports = randomGenerator;

