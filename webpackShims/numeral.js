/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var numeral = module.exports = require('@elastic/numeral');
//var locale = window.navigator.userLanguage || window.navigator.language || 'en';
var localization = require('localization');

let locale = localization.getFormattingCulture();
if (locale === 'sv-se') {
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
