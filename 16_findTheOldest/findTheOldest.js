const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    let oldestAge = 0;
    let index = 0;
    for (let num in arr){
        if (arr[num].yearOfDeath){
            if ((arr[num].yearOfDeath - arr[num].yearOfBirth) > oldestAge){
                oldestAge = arr[num].yearOfDeath - arr[num].yearOfBirth
                index = num;
            }
        }
        else{
            if ((currentYear - arr[num].yearOfBirth) > oldestAge){
                oldestAge = currentYear - arr[num].yearOfBirth
                index = num;
            }
        }
    }
        return arr[index];
}

// Do not edit below this line
module.exports = findTheOldest;
