const palindromes = function (str) {
    str = str.toLowerCase();
    let i = 0;
    let j = str.length - 1;
    while(i<j){
        while (!str[i].match(/[a-z0-9]/i) && i < str.length / 2) {
            i++;
        }
        while (!str[j].match(/[a-z0-9]/i) && j > str.length / 2) {
            j--;
        }
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
        }
    return true;
}
// Do not edit below this line
module.exports = palindromes;
