function typeNameTranslate(name) {
  switch (name) {
    case '力量':
      return 'power'
    case '技巧':
      return 'tech'
    case '速度':
      return 'speed'
    case '虹色':
      return 'rainbow'
    case '无':
      return ''
  }
}

function eleNameTranslate(name) {
  switch (name) {
    case '火':
      return 'fire'
    case '水':
      return 'water'
    case '雷':
      return 'thunder'
    case '冰':
      return 'ice'
    case '龙':
      return 'dragon'
    default:
      return 'null'
  }
}

function getGeneSizeByName(name) {
  if (name.indexOf('【小】') !== -1) return '小'
  else if (name.indexOf('【中】') !== -1) return '中'
  else if (name.indexOf('【大】') !== -1) return '大'
  else if (name.indexOf('【特大】') !== -1) return '特大'
  else return '无'
}

function getGeneSizeBorderColor(size) {
  switch (size) {
    case '小':
      return '#483517'
    case '中':
      return '#CACACA'
    case '大':
      return '#E4CF5D'
    case '特大':
      return '#92D8EE'
    default:
      return '#483517'
  }
}

function fetchTypeColor(type) {
  if (type === '力量') return 'red-9'
  else if (type === '技巧') return 'green-7'
  else if (type === '速度') return 'blue-10'
  else if (type === '虹色') return 'pink-6'
  else return 'grey-6'
}

function fetchEleColor(ele) {
  if (ele === '火') return 'negative'
  else if (ele === '水') return 'blue-8'
  else if (ele === '冰') return 'info'
  else if (ele === '雷') return 'warning'
  else if (ele === '龙') return 'accent'
  else if (ele === '虹色') return 'pink-6'
  else return 'grey-6'
}

function getBingoRatio(bingoNum) {
  if (bingoNum <= 2) {
    return bingoNum * 10
  } else {
    return 20 + (bingoNum - 2) * 5
  }
}

export {
  eleNameTranslate,
  typeNameTranslate,
  getGeneSizeByName,
  getGeneSizeBorderColor,
  fetchTypeColor,
  fetchEleColor,
  getBingoRatio
}