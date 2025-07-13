// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
    const [dogImage, setDogImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                setDogImage(data.message);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching dog image:', error);
                setIsLoading(false);
            });
    }, []);

    const fetchNewDog = () => {
        setIsLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                setDogImage(data.message);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching dog image:', error);
                setIsLoading(false);
            });
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <img src={dogImage} alt="A Random Dog" />
            <button onClick={fetchNewDog}>Get a new dog</button>
        </div>
    );
}

export default App;
