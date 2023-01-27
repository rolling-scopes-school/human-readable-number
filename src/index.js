module.exports = function toReadable (roundednumber) {
   const x = ['zero', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
   const p = ['ten', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
   const q =[' ', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   const u = [' ','one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
   if (roundednumber >= 0 && roundednumber <= 19)return(x[roundednumber])

   else if (roundednumber > 19 && roundednumber < 100) {
      const a = roundednumber.toString();
      if (a[1] === '0') return(q[a[0]])
      else if(a[1] !== '0') return(`${q[a[0]]} ${x[a[1]]}`)
    }

   else if (roundednumber > 99 && roundednumber < 1000) {
          let m = roundednumber.toString();
          if (m[2] === '0' && m[1] === '0') return(`${u[m[0]]}`)
          else if(m[1] === '0' && m[2] != '0') return(`${u[m[0]]} ${x[m[2]]}`)
          else if (m[2] === '0' && m[1] != '0') return(`${u[m[0]]} ${q[m[1]]}`)
          else if (m[1] === '1' && m[2] != 0)return(`${u[m[0]]} ${p[m[2]]}`)
          else if( m[2] != '0' && m[1] != '0')return(`${u[m[0]]} ${q[m[1]]} ${x[m[2]]}`)
       }
}
