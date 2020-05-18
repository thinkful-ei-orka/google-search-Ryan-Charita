import React from 'react';
import Book from './components/Book'

export default class App extends React.Component {
  state = {
    books: [],
  }

  searchBooksInApi() {
  };

  // componentDidMount() {
  //   const url = 'https://www.googleapis.com/books/v1/volumes?q=HenryVII';
  //   fetch (url)
  //   .then (res => {
  //     if (!res.ok) {
  //       throw new Error('aaarrgh');
  //     }
  //     return res;
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     //this.setState({
  //       //books: "items"
  //     //})
  //   })
  // }




  handleSearchInitialized = (event) => {
    event.preventDefault()
    console.log(event.target.input.value)
    const url = `https://www.googleapis.com/books/v1/volumes?q=${event.target.input.value}`;
    fetch (url)
    .then (res => {
      if (!res.ok) {
        throw new Error('bluh!');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      //console.log(data.items)
      this.setState({
        books: data.items
      })
    })
  }

  render() {
    console.log(this.state)
    return(
        <div>
          <h1>Google Book Search</h1>
          <main>
            <section className="search-container">
              <form onSubmit={this.handleSearchInitialized}>
                <label htmlFor="search">Search</label>
                <input type="text" name="input" id="input" placeholder="Search"></input>
                <button type="submit">Search</button>
              </form>
              <label htmlFor="print-type">Print Type</label>
              <select id="print-type">
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
              </select>
              <label htmlFor="book-type">Book Type</label>
              <select id="book-type">
                <option htmlFor="free-ebooks">Free eBooks</option>
                <option htmlFor="full">Full</option>
                <option htmlFor="paid-ebooks">Paid eBooks</option>
                <option htmlFor="partial">Partial</option>
              </select>
            </section>
            <section className="results-container">
              {this.state.books.map(book => (
                <Book 
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                key={book.id}
                />
              ))}
            </section>
          </main>
        </div>
    )
}}