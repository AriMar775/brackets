module.exports = function check(str, bracketsConfig) {
    let length = str.length;
    let comparer = bracketsConfig.map((item) => item.join(""));

    for (let i = 0; i <= length; i++) {
        comparer.forEach((item) => {
            if (str.includes(item)) {
                str = str.replace(item, "");
            }
        });
    }

    return str === "";
};
