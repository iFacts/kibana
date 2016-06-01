var numeral = module.exports = require('@spalger/numeral');
//var locale = window.navigator.userLanguage || window.navigator.language || 'en';
var localization = require('localization');

let locale = localization.getFormattingCulture();
if (locale === 'sv-SE') {
  var languageData = {
    delimiters: {
      thousands: ' ',
      decimal: ','
    },
    abbreviations: {
      thousand: 'k',
      million: 'M',
      billion: 'G',
      trillion: 'T'
    },
    ordinal: function (number) {
      var str = number.toString();
      var endsWith = str[str.length - 1];
      return (endsWith === '1' || endsWith === '2') ? ':a' : ':e';
    },
    currency: {
      symbol: 'SEK'
    }
  };
  numeral.language(locale, languageData);
  numeral.language(locale);
}