function majority(nums) {
    if (nums.length == 1) return nums[0];

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let count = map.get(nums[i]) + 1;

            if (count > nums.length / 2) {
                return nums[i];
            } else {
                map.set(nums[i], count);
            }
        } else {
            map.set(nums[i], 1);
        }
    }

    return null;
}

console.log(`Majority Element: ${majority([5, 5, 4, 1, 1, 1, 1, 2, 2])}`);
console.log(`Majority Element: ${majority([4, 4, 4, 4, 5, 5, 4, 3, 3])}`);
