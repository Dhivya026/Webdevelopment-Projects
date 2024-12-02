// Initialize default books
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "A classic novel of the American dream, exploring themes of wealth, class, and ambition." },
    { title: "1984", author: "George Orwell", description: "A dystopian novel set in a totalitarian society where the government controls every aspect of life." },
    { title: "To Kill a Mockingbird", author: "Harper Lee", description: "A gripping story of racial injustice and moral growth set in the American South." },
    { title: "Pride and Prejudice", author: "Jane Austen", description: "A tale of love, marriage, and social expectations in early 19th-century England." },
    { title: "Moby-Dick", author: "Herman Melville", description: "An epic tale of obsession and revenge, centered around Captain Ahab's hunt for the white whale." },
    { title: "War and Peace", author: "Leo Tolstoy", description: "A monumental historical novel that weaves together personal and national struggles during the Napoleonic Wars." },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", description: "A novel about adolescent alienation and the quest for identity in a confusing adult world." },
    { title: "The Hobbit", author: "J.R.R. Tolkien", description: "An adventure of a reluctant hero who embarks on a journey to reclaim a lost treasure." },
    { title: "Brave New World", author: "Aldous Huxley", description: "A dystopian vision of a world where happiness is artificially engineered and individuality is suppressed." },
    { title: "The Odyssey", author: "Homer", description: "An epic journey of the hero Odysseus as he struggles to return home from the Trojan War." }
];

const popupoverlay = document.querySelector(".popup-overlay");
const popupbox = document.querySelector(".popup-box");
const addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

const cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

const container = document.querySelector(".container");
const addbook = document.getElementById("add-book");
const booktitleinput = document.getElementById("book-title-input");
const bookauthorinput = document.getElementById("book-author-input");
const bookdescriptioninput = document.getElementById("book-description-input");

// Function to display books
function displayBooks() {
    container.innerHTML = '';
    books.forEach((book, index) => {
        const div = document.createElement("div");
        div.setAttribute("class", "book-container");
        div.innerHTML = `<h2>${book.title}</h2>
                        <h5>${book.author}</h5>
                        <p>${book.description}</p>
                        <button onclick="deletebook(${index})">Delete</button>`;
        container.append(div);
    });
}

// Add a new book
addbook.addEventListener("click", function (event) {
    event.preventDefault();
    books.push({
        title: booktitleinput.value,
        author: bookauthorinput.value,
        description: bookdescriptioninput.value
    });
    booktitleinput.value = '';
    bookauthorinput.value = '';
    bookdescriptioninput.value = '';
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
    displayBooks();
});

// Delete a book
function deletebook(index) {
    books.splice(index, 1);
    displayBooks();
}

// Initialize page with default books
displayBooks();
