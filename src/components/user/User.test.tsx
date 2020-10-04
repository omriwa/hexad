import React from 'react';
import { render } from '@testing-library/react';
import {User,IUserProps} from './User'

test('renders book card with props', () => {
    const bookProp: IUserProps = {
        books: [
            {
                bookTitle: "title1",
        id: 1,
        numberOfCopies: 1,
        numberOfOrigin: 2
            },
            {
                bookTitle: "title2",
        id: 1,
        numberOfCopies: 3,
        numberOfOrigin: 4
            }
        ]
    }
    const { container } = render(<User {...bookProp} />);
    const listItems = container.querySelectorAll('li')

    expect(listItems.length).toBe(bookProp.books.length * 2);
});
