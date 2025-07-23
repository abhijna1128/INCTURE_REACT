// function shortestPalindrome(s){
//     if (s) {
//     if (s.split('').reverse().join('') === s) {
//         return s;
//     }

//     let n=s.length;
//     let splits=s.split(s[0]);
//     let j=splits[1];
//     //  return j;
//     let size=j.length;
//     let rev=j.split('').reverse().join('')
//     let pal=rev+s;
//         return pal;
//     }
// }
// console.log(shortestPalindrome("aacecaaa"));

function shortestPalindrome(s) {
    for (let i = s.length; i >= 0; i--) {
        let pre = s.substring(0, i);
        let rev = pre.split('').reverse().join('');
        if (pre=== rev) {
            let suf = s.substring(i);
            let add = suf.split('').reverse().join('');
            return add + s;
        }
    }
    return "";
}
console.log(shortestPalindrome("aacecaaa"));


