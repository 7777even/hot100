var groupAnagrams = function(strs) {
    const map  = new Map();
    for(let i=0;i<strs.length;i++){
        let str = strs[i];
        let key = str.split('').sort().join('');
        if(map.has(key)){
            map.get(key).push(str);
        }else{
            map.set(key,[str]);
        }
    }

    return Array.from(map.values());
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]


console.log(groupAnagrams(strs));
