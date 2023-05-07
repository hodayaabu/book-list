import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';
import Book from './Book';

function BookList() {

    return (
        <>
            <h1>Amazon Best Sellers Books</h1>
            <section className='booklist'>
                {books.map((book, index) => {
                    return <Book {...book} number={index} key={book.id} />
                })}
            </section>
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
