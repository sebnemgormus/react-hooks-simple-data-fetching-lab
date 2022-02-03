import React, { useEffect, useState } from 'react';

function App() {
const [dog, setDog] = useState(null);

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((dog) => dog.json())
    .then((d) => {
    setDog(d.message);
    });
}, []);

    if(!dog){
        return <p>Loading...</p>
    }

  return <img src={dog} alt="A Random Dog" />;
}

export default App;

