const input = arr => { 
  const result = Math.floor(arr.length / 2), 
    nums = [...arr].sort((a, b) => a - b); 
  return arr.length % 2 !== 0 ? nums[result] : (nums[result - 1] + nums[result]) / 2; 
}; 
console.log(input([8, 7, 7, 9, 5, 4, 2, 9]));