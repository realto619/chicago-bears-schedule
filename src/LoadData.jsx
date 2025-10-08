async function LoadData() { 
  const url = 'https://raw.githubusercontent.com/realto619/chicago-bears-schedule/refs/heads/main/games.json'; 
  //replace this with json public url above 
   const result = await fetch(url)
     .then((response) => {
         if (response.ok) {
             return response.json()
         }
         throw new Error("Unable to fetch data")
     });
     
 // you can do anything with the result
console.log(result.games)

 return result;

} 

export default LoadData;