// Code your solution in this file!
function distanceFromHqInBlocks(block){
  let distance = 0;
  if (block >= 42){
    distance = block - 42;
  }
    else{
    distance = 42 - block;
    }
    return distance;
};

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264
}
