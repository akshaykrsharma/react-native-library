const boldFont = (fontSize = 14) => ({
  //fontFamily: 'NotoSerif-Bold',
  fontSize: fontSize,
});

const regularFont = (fontSize = 12) => ({
  //fontFamily: 'NotoSerif-Regular',
  fontSize: fontSize,
});

const italicFont = (fontSize = 12) => ({
  //fontFamily: 'NotoSerif-Italic',
  fontSize: fontSize,
});

const italicBoldFont = (fontSize = 14) => ({
  //fontFamily: 'NotoSerif-BoldItalic',
  fontSize: fontSize,
});

module.exports = {
  boldFont,
  regularFont,
  italicFont,
  italicBoldFont,
};
