  const endPoint = "http://localhost:3000/api/v1/programs"

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is Loaded");
  getPrograms()
  const createProgramForm = document.querySelector("#create-program-form" )
  createProgramForm.addEventListener("submit", (e) => createFormHandler(e))
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
              <p>"${program.attributes.favorite_quote}"</p>
              <p>${program.attributes.media_type}</p>
              <button data-id=${program.id}>edit</button>
            </div>
            <br><br>`;

            document.querySelector('#program-container').innerHTML += programMarkup
    })
   })
  }

function createFormHandler(e){
  e.preventDefault()
  const titleInput = document.querySelector('#input-title').value
  const quoteInput = document.querySelector('#input-quote').value
  const imgInput = document.querySelector('#input-url').value
  const mediaTypeInput = document.querySelector('#media_type').value
  const genreInput = parseInt(document.querySelector('#genres').value)

  postFetch(titleInput, quoteInput, imgInput, mediaTypeInput, genreInput)

}

function postFetch(title, favorite_quote, image_url, media_type, genre_id ){
  const bodyData = {title, favorite_quote, image_url, media_type, genre_id}
  fetch(endPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(res => res.json())
  .then(program => {
    console.log(program);
    const programData = program.data
    const programMarkup = `
      <div data-id=${program.id}>
        <img src=${programData.attributes.image_url} height="350" width="250">
        <h3>${programData.attributes.title}</h3>
        <p>${programData.attributes.genre.name}</p>
        <p>"${programData.attributes.favorite_quote}"</p>
        <p>${programData.attributes.media_type}</p>
        <button data-id=${programData.id}>edit</button>
      </div>
      <br><br>`;

      document.querySelector('#program-container').innerHTML += programMarkup;
  })
}
