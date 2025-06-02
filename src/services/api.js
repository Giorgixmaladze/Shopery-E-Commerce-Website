const fetchCategory = async () => {
  
  try {
    const data = await fetch('./Json/Categories.json');
    return data.json()
    
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }

};


const getIndexes = (arr) =>{
  let randomIndexes = []
  let randomProducts = []
  for(let i = 0; i <10; i++){
    randomIndexes.push((Math.random() * arr.length - 1).toFixed(0))
  }
  randomIndexes.forEach(index =>{
    randomProducts.push(arr[index])
  })
  return randomProducts
}


export { fetchCategory,getIndexes };