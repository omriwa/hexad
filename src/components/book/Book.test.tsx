import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {Book, IBookProps} from './Book';

var bookProp: IBookProps;

beforeEach(() => {
    bookProp = {
        bookTitle: "title",
        id: 1,
        numberOfCopies: 2,
        numberOfOrigin: 3,
        takeCopyBook: jest.fn,
        takeOriginalBook: jest.fn
    }
})

test('renders book card with props', () => {
    const { getByText, container } = render(<Book {...bookProp} />);
    const listItems = container.querySelectorAll('li');
    const buttons = container.querySelectorAll('button');

    expect(getByText(bookProp.bookTitle)).toBeInTheDocument();
    expect(listItems.length).toBe(2)
    expect(buttons.length).toBe(2);
    expect(buttons[0].textContent).toEqual('Take original book');
    expect(buttons[1].textContent).toEqual('Take copy book');
    expect(listItems[0].textContent).toEqual(`Number of original copies : ${bookProp.numberOfOrigin}`);
    expect(listItems[1].textContent).toEqual(`Number of copies : ${bookProp.numberOfCopies}`);
});

test('should click on take original book', () => {
    const { getByText } = render(<Book {...bookProp} />);
    const takeOriginalBookButton = getByText('Take original book');
    jest.spyOn(bookProp, 'takeOriginalBook');

    fireEvent.click(takeOriginalBookButton)

    expect(takeOriginalBookButton).toBeInTheDocument();
    expect(bookProp.takeOriginalBook).toBeCalled();
});

test('should click on take copy book', () => {
    const { getByText } = render(<Book {...bookProp} />);
    const takeCopyBookButton = getByText('Take copy book');
    jest.spyOn(bookProp, 'takeCopyBook').mockImplementation(jest.fn);
    
    fireEvent.click(takeCopyBookButton)

    expect(takeCopyBookButton).toBeInTheDocument();
    expect(bookProp.takeCopyBook).toBeCalled();
});