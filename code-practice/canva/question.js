const userIds = [1, 2, 3,4];
// console.log(JSON.stringify(userIds));

const urls = Array(3).fill('https://example.com/api'); // Replace with your actual URLs

const fetchPromises = urls.map(url => fetch(url));
console.log(fetchPromises);

Promise.all(fetchPromises)
  .then(responses => {
    // All requests have completed
    return Promise.all(responses.map(response => response.json()));
  })
  .then(data => {
    console.log('All data received:', data);
  })
  .catch(error => {
    console.error('Error with one or more requests:', error);
  });