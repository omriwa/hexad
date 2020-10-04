import React from 'react';
import { render } from '@testing-library/react';
import {Book} from './Book';
import { IBook } from '../../types';

test('renders book card with props', () => {
    const bookProp: IBook = {
        bookTitle: "title",
        id: 1,
        numberOfCopies: 2,
        numberOfOrigin: 3
    }
    const { getByText, container } = render(<Book {...bookProp} />);
    const listItems = container.querySelectorAll('li')

    expect(getByText(bookProp.bookTitle)).toBeInTheDocument();
    expect(listItems.length).toBe(2)
    expect(listItems[0].textContent).toEqual(`Number of original copies : ${bookProp.numberOfOrigin}`);
    expect(listItems[1].textContent).toEqual(`Number of copies : ${bookProp.numberOfCopies}`);
});
