const API_URL = "https://67ac7e2c5853dfff53daf268.mockapi.io/libros"; 

async function fetchBooks() {
    let response = await fetch(API_URL);
    let books = await response.json();
    displayBooks(books);
}

async function addBook() {
    let title = document.getElementById("book-title").value;
    if (title === "") {
        alert("Escribe un título");
        return;
    }

    let newBook = { title, completed: false };
    let response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook)
    });

    if (response.ok) {
        document.getElementById("book-title").value = "";
        fetchBooks(); 
    } else {
        alert("Error al agregar el libro");
    }
}

async function deleteBook(id) {
    let response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (response.ok) {
        fetchBooks();
    } else {
        alert("Error al eliminar el libro");
    }
}

async function toggleCompleted(id, title, completed) {
    let updatedBook = { title, completed: !completed };

    let response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBook)
    });

    if (response.ok) {
        fetchBooks();
    } else {
        alert("Error al actualizar el libro");
    }
}

function displayBooks(books) {
    let bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    books.forEach(book => {
        let bookDiv = document.createElement("div");
        bookDiv.className = "book-item";
        bookDiv.innerHTML = `
            <span>${book.title} - ${book.completed ? "✅ Leído" : "❌ No leído"}</span>
            <button onclick="toggleCompleted('${book.id}', '${book.title}', ${book.completed})">✔</button>
            <button onclick="deleteBook('${book.id}')">🗑</button>
        `;
        bookList.appendChild(bookDiv);
    });
}

document.getElementById("add-book").addEventListener("click", addBook);
fetchBooks();
