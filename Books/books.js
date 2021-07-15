class Book {
    constructor(
        title,
        author,
        dateAcquired,
        childLiterature,
        available,
    ) {
        this.title = title,
        this.author = author,
        this.childLiterature = childLiterature,
        this.available = available,
        this.dateAcquired = dateAcquired
    }
rentBook(rent) {
this.available = rent; }

bookAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired;
    let yearsSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24 * 365));
    return yearsSinceAcquired;
}
}

export default Book;