const body = document.querySelector('body');
const bookReview = document.getElementById('book-list');

const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

function createBookArticle(book) {
    // Article element
    const article = document.createElement('article');
    article.classList.add('book');

    // Div for date, age range, genre, and stars
    const metaData = document.createElement('div');
    metaData.classList.add('description');

    const date = document.createElement('p');
    date.textContent = book.date;

    const ageRange = document.createElement('p');
    ageRange.textContent = book.ages;

    const genre = document.createElement('p');
    genre.textContent = book.genre;

    const stars = document.createElement('p');
    stars.textContent = book.stars;

    metaData.append(date, ageRange, genre, stars);

    // Header, image, description
    const header = document.createElement('h2');
    header.textContent = book.title;

    const image = document.createElement('img');
    image.src = book.imgSrc;
    image.alt = book.imgAlt;

    const description = document.createElement('p');
    description.classList.add('desc');
    description.textContent = book.description;

    article.append(metaData, header, image, description);

    return article; // Return it to be appended to fragment
}

const fragment = document.createDocumentFragment(); // Create fragment to append to

articles.forEach((book) => {
    fragment.append(createBookArticle(book)); // append books to page
});

bookReview.append(fragment);
