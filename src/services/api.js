const fetchCategory = async () => {
  
  try {
    const data = await fetch('./Json/Categories.json');
    return data.json()
    
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }

   
};

export { fetchCategory };