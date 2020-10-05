import React from 'react';
import { render ,fireEvent} from '@testing-library/react';
import { User, IUserProps } from './User'

var bookProp: IUserProps;

beforeEach(() => {
    bookProp = {
        books: [
            {
                bookTitle: "title1",
        id: 1,
        numberOfCopies: 1,
        numberOfOrigin: 2
            }
        ],
        returnCopyBook: jest.fn(),
        returnOriginalBook: jest.fn()
    }
})

test('renders book card with props', () => { 
    const { container } = render(<User {...bookProp} />);
    const listItems = container.querySelectorAll('li');
    const buttons = container.querySelectorAll('button');

    expect(listItems.length).toBe(bookProp.books.length * 2);
    expect(buttons.length).toBe(2);
    expect(buttons[0].textContent).toEqual('Return original book');
    expect(buttons[1].textContent).toEqual('Return copy book');
});

test('should click on return original book', () => {
    const { getByText } = render(<User {...bookProp} />);
    const returnOriginalBookButton = getByText('Return original book');
    jest.spyOn(bookProp, 'returnOriginalBook').mockImplementation(jest.fn);
    
    fireEvent.click(returnOriginalBookButton)

    expect(returnOriginalBookButton).toBeInTheDocument();
    expect(bookProp.returnOriginalBook).toBeCalled();
});

test('should click on return copy book', () => {
    const { getByText } = render(<User {...bookProp} />);
    const returnCopyBookButton = getByText('Return copy book');
    jest.spyOn(bookProp, 'returnCopyBook').mockImplementation(jest.fn);
    
    fireEvent.click(returnCopyBookButton)

    expect(returnCopyBookButton).toBeInTheDocument();
    expect(bookProp.returnCopyBook).toBeCalled();
});
