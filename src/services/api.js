const fetchCategory = async () => {

  try {
    const data = await fetch('./Json/Categories.json');
    return data.json()

  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }

};


const getIndexes = (arr) => {
  let randomIndexes = []
  let randomProducts = new Set()
  for (let i = 0; i < 10; i++) {
    randomIndexes.push(Math.floor(Math.random() * arr.length).toFixed(0))
    randomProducts.add(arr[i]);
  }

  console.log(randomIndexes)
  console.log(Array.from(randomProducts))
  return Array.from(randomProducts)
}


export { fetchCategory, getIndexes };