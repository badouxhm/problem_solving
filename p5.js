
var containsDuplicate = function(nums) {

    for(i=0;i<=nums.length;i++){
        for(j=i+1;j<=nums.length;j++){
            if (nums[i] == nums[j]) return true
        }
    }
    return false
    
};

console.log(containsDuplicate([1,2,3,1]))
