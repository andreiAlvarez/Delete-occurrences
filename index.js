//solution 1
function deleteNth(arr,n){
  const res = [];
  const count = {};
    
  arr.forEach((elem, idx) => {
    count[elem] = count[elem] ? count[elem] + 1 : 1;
    if(count[elem] <= n) {
      res.push(elem);
    }
  })
  return res; 
}; 

// clever 

const deleteNth = (arr, n) =>
  arr.filter((val, idx) => arr.slice(0, idx).filter(v => v === val).length < n);
