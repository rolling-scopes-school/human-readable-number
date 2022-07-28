module.exports = function toReadable(number) {
    if ((toReadable = toReadable.toString()).length > 9) return "overflow";
    n = ("000000000" + number)
        .substr(-9)
        .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    let str = "";
    str +=
        n[1] != 0
            ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
            : "";
    str +=
        n[2] != 0
            ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
            : "";
    str +=
        n[3] != 0
            ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
            : "";
    str +=
        n[4] != 0
            ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
            : "";
    str +=
        n[5] != 0
            ? (str != "" ? "and " : "") +
              (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
              "only "
            : "";
    return str;
};
