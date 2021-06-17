class App {
  attachEventListeners() {
     document.querySelector('#update-program').addEventListener('submit', e => {
       e.preventDefault();
       const id = parseInt(e.target.dataset.id);
       const program = Program.findById(id);
       const title = e.target.querySelector('#input-title').value;
       const favorite_quote = e.target.querySelector('#input-quote').value;
       const image_url = e.target.querySelector('#input-url').value;
       const media_type = e.target.querySelector('#media_type').value
       const genre_id = parseInt(e.target.querySelector('#genres').value);

       document.querySelector('#update-program').innerHTML = program.renderPatchForm()


       const bodyJSON = {title, favorite_quote, image_url, media_type, genre_id}
       fetch(`http://localhost:3000/api/v1/programs/${program.id}`, {
         method: "PATCH",
         headers: {
              'Content-Type': 'application/json',
            Accept: 'application/json',
          },
         body: JSON.stringify(bodyJSON),
       })
         .then(res => res.json())
         .then(updatedProgram =>
           console.log(updatedProgram)

             // const program = Program.findById(updatedProgram.data.id);
             // program.update(updatedProgram.data.attributes);
             // document.querySelector('#program-container').innerHTML = '';
             // Program.all.forEach(program => document.querySelector('#program-container').innerHTML += program.renderProgramCard());
             // document.querySelector('#update-program').innerHTML = '';
        )
      })
    }

  
}
