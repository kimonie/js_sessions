// Unsplash API
const count = 10;
const apiKey = 'tRNT1clNQzdbyddjmFsKLMob1Q_aOPGcSEyghJyrmoY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// get photos 

async function getPhotos () {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getPhotos();