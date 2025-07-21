module.exports = function toReadable(number) {
  const digits = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const dozens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) {
    return digits[number];
  }

  if (number < 100) {
    const tens = Math.floor(number / 10);
    const units = number % 10;
    return units === 0 ? dozens[tens] : `${dozens[tens]} ${digits[units]}`;
  }

  if (number < 1000) {
    const hundreds = Math.floor(number / 100);
    const remainder = number % 100;

    if (remainder === 0) {
      return `${digits[hundreds]} hundred`;
    }

    return `${digits[hundreds]} hundred ${toReadable(remainder)}`;
  }

  return '';
};
