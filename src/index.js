module.exports = function toReadable(number) {
    const
        h = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
        t = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        o = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
        p = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let str = number.toString(), out = '';

    if (str.length == 1) return o[number - 1];
    else if (str.length == 2) {
        if (str[0] == 1) out = p[parseInt(str[1]) - 1];
        else out = (t[parseInt(str[0]) - 1] + ((str[1] != '0') ? (' ' + o[parseInt(str[1]) - 1]) : ''));
    }
    else if (str.length == 3) {
        out = (h[parseInt(str[0]) - 1] + ((str[1] != '0') ? (' ' + t[parseInt(str[1]) - 1]) : '') + ((str[2] != '0') ? (' ' + o[parseInt(str[2]) - 1]) : ''));
    }

    let arr = out.split('');
    arr[0] = arr[0].toUpperCase();
    out = arr.join('');
    return out;
}

