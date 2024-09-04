let books = [
  {
      "buchname": "Der alte Mann und das Meer",
      "preis": 12.99,
      "autor": "Ernest Hemingway",
      "erscheinungsjahr": 1952,
      "genre": "Klassiker",
      "like": 234,
      "isLike": false
  },
  {
      "buchname": "1984",
      "preis": 10.49,
      "autor": "George Orwell",
      "erscheinungsjahr": 1949,
      "genre": "Dystopie",
      "like": 123,
      "isLike": false
  },
  {
      "buchname": "Die unendliche Geschichte",
      "preis": 15.99,
      "autor": "Michael Ende",
      "erscheinungsjahr": 1979,
      "genre": "Fantasy",
      "like": 23,
      "isLike": false
  },
  {
      "buchname": "Der Name des Windes",
      "preis": 18.99,
      "autor": "Patrick Rothfuss",
      "erscheinungsjahr": 2007,
      "genre": "Fantasy",
      "like": 92,
      "isLike": false
  },
  {
      "buchname": "Die große Reise",
      "preis": 8.99,
      "autor": "J.K. Rowling",
      "erscheinungsjahr": 2020,
      "genre": "Abenteuer",
      "like": 21,
      "isLike": false
  }
];

function bookTemplate(book, index) {
  return `
      <div class="book-card">
          <div class="headline"><h3>${book.buchname}</h3></div>
          <div class="book-picture"><img src="./src/img/brownBook.png"></div>

          <div class="price-and-like">
              <div class="price">${book.preis}$</div>
              <div class="like-button">
                  <div onclick="clickHeart(${index})" id="heart-button-${index}" class="${book.isLike ? 'bg-red' : ''}">
                      <img class="herz" src="./src/img/hearth.svg">
                  </div>
                  <span>${book.like}</span>
              </div>
          </div>
          <div class="book-info">
              <div class="autor"><p>Autor:</p><p>${book.autor}</p></div>
              <div class="since"><p>Erscheinungsjahr:</p><p>${book.erscheinungsjahr}</p></div>
              <div class="genre"><p>Genre:</p><p>${book.genre}</p></div>
          </div>

          <div class="comments-heading"><h4>Kommentare:</h4></div>
          <div id="comment-${index}" class="comment-section">        
          </div>
          <div class="input-section">
              <input id="inputfield-${index}" type="text" placeholder="Kommentar eingeben">
              <button onclick="addComment(${index})">send</button>
          </div>
      </div>
  `;
}

function renderBooks() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = ''; 

  for (let i = 0; i < books.length; i++) {
      contentRef.innerHTML += bookTemplate(books[i], i);
  }
}

function addComment(index) {
  let inputRef = document.getElementById(`inputfield-${index}`);  
  let contentRef = document.getElementById(`comment-${index}`);
  let noteInput = inputRef.value;
  
  contentRef.innerHTML += commentTemplate(noteInput);
  inputRef.value = "";
}

function clickHeart(index) { 
  let book = books[index];
  let heartButton = document.getElementById(`heart-button-${index}`);
  

  book.isLike = !book.isLike;


  if (book.isLike) {
      book.like += 1;
      heartButton.classList.add("bg-red");  
  } else { 
      book.like -= 1;
      heartButton.classList.remove("bg-red");  
  }


  renderBooks();
}

function commentTemplate(noteInput) { 
  return `<p>User32: "${noteInput}"</p>`;
}

renderBooks();
