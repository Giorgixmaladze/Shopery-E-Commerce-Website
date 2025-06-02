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
  let randomProducts = new Set()
  for(let i = 0; i<10; i++){
    randomIndexes.push((Math.random() * arr.length - 1).toFixed(0))
  }
  randomIndexes.forEach(index =>{
    randomProducts.add(arr[index])
  })
  return Array.from(randomProducts)
}


export { fetchCategory,getIndexes };