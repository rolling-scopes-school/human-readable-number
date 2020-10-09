module.exports = function toReadable (number) {
const a = [
            ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],

            [,,'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],

            [,'one hundred', 'two hundred', 'three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred']
        ];

        let result='';

        n = parseInt(number, 10);
        console.log(n);

           
            if (n < 20) {
                return ((!n) ? a[0][0] : a[0][n]);
                
            }

            if (n < 100) {
                
                if (n%10==0) {return (a[1][parseInt(n / 10)]);} 

                else {return (a[1][parseInt(n / 10)] + ' '+a[0][n % 10])}; 
            }

            if ( (n%100)==0) {return (a[2][parseInt(n / 100)]); }

            v=n-(n-(n%100));

            if (v<20) {
                return (a[2][parseInt(n / 100)]+' '+a[0][v]);
            } 
            else {
                if (v%10==0) {
                    return (a[2][parseInt(n / 100)]+' '+a[1][parseInt(v / 10)]);    
                }
                else{
                    return (a[2][parseInt(n / 100)]+' '+a[1][parseInt(v / 10)] + ' '+a[0][v % 10]);
                }
                
            }
  
}
