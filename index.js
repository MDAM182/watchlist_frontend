  const endPoint = "http://localhost:3000/api/v1/programs"

document.addEventListener('DOMContentLoaded', () => {
  getPrograms()
})

  function getPrograms() {
    fetch(endPoint)
    .then(res => res.json())
    .then(programs => {
      programs.data.forEach(program => {
          const programMarkup = `
            <div data-id=${program.id}>
              <img src=${program.attributes.image_url} height="350" width="250">
              <h3>${program.attributes.title}</h3>
              <p>${program.attributes.genre.name}</p>
              <p>${program.attributes.favorite_quote}</p>
              <p>${program.attributes.media_type}</p>
              <button data-id=${program.id}>edit</button>
            </div>
            <br><br>`;

            document.querySelector('#program-container').innerHTML += programMarkup
    })
   })
  }
