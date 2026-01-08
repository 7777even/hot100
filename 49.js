<<<<<<< HEAD
var groupAnagrams = function (strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
=======
var groupAnagrams = function(strs) {
    const map  = new Map();
    for(let i=0;i<strs.length;i++){
>>>>>>> 9f4179d72d3e4e17a3a187849f1e665389695a5c
        let str = strs[i];
        let key = str.split('').sort().join('');
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }

    return Array.from(map.values());
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]


console.log(groupAnagrams(strs));
