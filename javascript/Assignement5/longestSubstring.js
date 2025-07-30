function lengthOfLongestSubstring(s)
{
let count=0;
for(let i=0;i<s.length;i++){
    let unique=new Set();
for(let j=i;j<s.length;j++){
    if(unique.has(s[j])){
        break;
    } 

unique.add(s[j]);
count=Math.max(count,unique.size);
}
}
return count;
}
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("dvde"));



