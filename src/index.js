module.exports = function toReadable (number) {
  let roundednumber = Math. round(number);
     function x (roundednumber) {
        if (roundednumber ===0) return('zero')
        if (roundednumber ===1) return('one')
        if (roundednumber ===2) return('two')
        if (roundednumber ===3) return('three')
        if (roundednumber ===4) return('four')
        if (roundednumber ===5) return('five')
        if (roundednumber ===6) return('six')
        if (roundednumber ===7) return('seven')
        if (roundednumber ===8) return('eight')
        if (roundednumber ===9) return('nine')
        if (roundednumber ===10) return('ten')
        if (roundednumber ===11) return('eleven')
        if (roundednumber ===12) return('twelve')
        if (roundednumber ===13) return('thirteen')
        if (roundednumber ===15) return('fifteen')
        if (roundednumber ===18) return('eighteen')
     }
     if (0 <= roundednumber <=13){
        console.log(x(roundednumber));
     }

     function rn(roundednumber){
                let v = roundednumber - 10;
                if (v ===5) x (roundednumber)
                if (v ===8) x (roundednumber)
                else console.log(`${x(v)}teen`)
     }
     if(14 <= roundednumber <=19)rn(roundednumber)
     
     function q(roundednumber){
        if(20<= roundednumber <= 29)return ('twenty')
        if(30<= roundednumber <= 39)return ('thirty')
        if(40<= roundednumber <= 49)return ('forty')
        if(50<= roundednumber <= 59)return ('fifty')
        if(60<= roundednumber <= 69)return ('sixty')
        if(70<= roundednumber <= 79)return ('seventy')
        if(80<= roundednumber <= 89)return ('eighty')
        if(90<= roundednumber <= 99)return ('ninety')
     }
     function p(roundednumber){
        if(20<= roundednumber <= 29)return (20)
        if(30<= roundednumber <= 39)return (30)
        if(40<= roundednumber <= 49)return (40)
        if(50<= roundednumber <= 59)return (50)
        if(60<= roundednumber <= 69)return (60)
        if(70<= roundednumber <= 79)return (70)
        if(80<= roundednumber <= 89)return (80)
        if(90<= roundednumber <= 99)return (90)
     }
     function y(roundednumber){
        let b = roundednumber - p(roundednumber);
        if (b === 0) console.log(q(roundednumber))
        else console.log(`${q(roundednumber)} ${x(b)}`)
     }

     if(20<= roundednumber<= 99) y(roundednumber)

     function u(roundednumber){
        if(100<= roundednumber<= 199) return ('one hundred')
        if(200<= roundednumber<= 299) return ('two hundred')
        if(300<= roundednumber<= 399) return ('three hundred')
        if(400<= roundednumber<= 499) return ('four hundred')
        if(500<= roundednumber<= 599) return ('five hundred')
        if(600<= roundednumber<= 699) return ('six hundred')
        if(700<= roundednumber<= 799) return ('seven hundred')
        if(800<= roundednumber<= 899) return ('eight hundred')
        if(900<= roundednumber<= 999) return ('nine hundred')
     }
     function h(roundednumber){
        if(100<= roundednumber<= 199) return (100)
        if(200<= roundednumber<= 299) return (200)
        if(300<= roundednumber<= 399) return (300)
        if(400<= roundednumber<= 499) return (400)
        if(500<= roundednumber<= 599) return (500)
        if(600<= roundednumber<= 699) return (600)
        if(700<= roundednumber<= 799) return (700)
        if(800<= roundednumber<= 899) return (800)
        if(900<= roundednumber<= 999) return (900)
     }
     
     if(100<= roundednumber<= 999){
        let m = roundednumber - h(roundednumber);
        if (m === 0) console.log(`${u(roundednumber)}`);
        if (1<=m<=13) console.log(`${u(roundednumber)} ${x(m)}`);
        if (14<=m<=19) console.log(`${u(roundednumber)} ${rn(m)}`);
        if (20<=m <=99)console.log(`${u(roundednumber)} ${y(m)}`);
     }
}
