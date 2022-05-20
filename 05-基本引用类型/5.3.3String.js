
const text = 'cat bat sat fat'
const res = text.replace(/(.at)/g, 'word($1)') // $n  n代表匹配到的第n个字符串
console.log(res) // word(cat) word(bat) word(sat) word(fat)


function htmlEscape(text) {
  // match: 匹配到的字符串 pos: 匹配到字符串的位置 originalText: 整个字符串
  return text.replace(/[<>"&]/g, function(match, pos, originalText) {
    switch(match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      case '\"':
        return '&quot;'
    }
  })
}
console.log(htmlEscape('<p class=\"greeting\">Hello world</p>')) // &lt;p class=&quot;greeting&quot;&gt;Hello world&lt;/p&gt;