function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched successfully!');
      }, 1000); // Simulate an asynchronous operation with a 1-second delay
    });
  }
  

async function fetchDataAsync() {
    console.log('Before fetching data');
  
    const data = await fetchData();
    console.log(data);
  
    console.log('After fetching data, I logged after 1-second');
  }
  
  fetchDataAsync();