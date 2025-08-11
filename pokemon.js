function myData() {
    let pImage = document.getElementById('poke').value.toLowerCase();
    console.log(pImage);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pImage}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Pokemon not found : ${pImage}`);
            }
            return response.json();
        })
        .then(abc => {
            console.log(abc.sprites.front_default);
            let photo = document.getElementById('p');
            photo.src = abc.sprites.front_default;
            photo.style.display = 'block';
        })
        .catch(error => alert(error.message));
}