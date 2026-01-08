var longestConsecutive = function(nums){
    if(nums.length===0) return 0;


    let set = new Set(nums);

    let max = -1;

    for(let temp of set){
        if(set.has(temp-1)===false){
            let start;
            start = temp;
            while(set.has(temp)){
                temp++;
            }
            let end;
            end = temp;
            max = Math.max(max,end-start);
        }
    }
    return max;
}

const nums = [100,4,200,1,3,2];
console.log(longestConsecutive(nums));