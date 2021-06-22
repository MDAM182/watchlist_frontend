class Program {
  constructor(program, programAttributes) {
    this.id = program.id
    this.title = programAttributes.title
    this.favorite_quote = programAttributes.favorite_quote
    this.media_type = programAttributes.media_type
    this.image_url = programAttributes.image_url
    this.genre = programAttributes.genre
    Program.all.push(this)
  }



  renderProgramCard(){

    return `

       <div class="col-md-3">
         <div class="card mb-3 shadow-sm">
           <div data-id=${this.id}>
             <img src=${this.image_url} class="card-img-top" alt="..." >
            <div class="card-body">
              <h5 class="card-title">${this.title}</h5>
              <p class="card-text">"${this.favorite_quote}".</p>
             <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
               </div>
                <small class="text-muted">${this.genre.name}</small>
               </div>
              </div>
             </div>
            </div>
           </div>

    `
    // return `
    //
    //     <div data-id=${this.id}>
    //       <img src=${this.image_url} height="350" width="250">
    //       <h3>${this.title}</h3>
    //       <p>"${this.favorite_quote}"</p>
    //       <p>${this.media_type}</p>
    //       <p>${this.genre.name}</p>
    //       <button data-id=${this.id}>Edit</button>
    //     </div>
    //     <br><br>`
    }

    static findById(id) {
       return this.all.find(program => program.id == id)
   }

   renderPatchForm() {
       return `
         <form data-id=${this.id} >
           <h3>Edit Program</h3>

          <input id='input-title' type="text" name="title" value="" placeholder="${this.title}" class="input-text">
         <br><br>

         <textarea id='input-quote' name="favorite_quote" rows="8" cols="80" value="" placeholder="${this.favorite_quote}"></textarea>
         <br><br>

         <input id='input-url' type="text" name="image" value="" placeholder="${this.image_url}" class="input-text">
         <br><br>

         <select id="media_type" name="media_type" value="${this.media_type}">
           <option value="Film">Film</option>
           <option value="TV">TV</option>
         </select>

           <select id="genres" name="genres" value="${this.genre.name}">
             <option value="1">Comedy</option>
             <option value="2">Sci-Fi</option>
             <option value="3">Action</option>
             <option value="4">Horror</option>
             <option value="5">Drama</option>
             <option value="6">Fantasy</option>
           </select>
           <br><br>

        <input id= 'edit-button' type="submit" name="submit" value="Submit Edit" class="submit">
     </form>
       `

     }
     //

     // update(title, favorite_quote, image_url, media_type, genre) {
     //      this.title = title;
     //      this.favorite_quote = favorite_quote;
     //      this.image_url = image_url;
     //      this.media_type = media_type;
     //      this.genre = genre;
     //
     //  }


}

Program.all = []
