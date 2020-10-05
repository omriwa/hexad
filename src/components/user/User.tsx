import React, { FC } from "react";
import { IBook,libraryFunction } from "../../types/index"
import { Book } from "../book/Book";

export interface IUserProps {
    books: IBook[];
    returnOriginalBook: libraryFunction;
    returnCopyBook: libraryFunction;
}

export const User: FC<IUserProps> = ({ books,returnOriginalBook,returnCopyBook }) => <div>
    <h4>User Books</h4>
    <div>

        {
            books.map((book, index) =>
                <Book {...book} key={index} returnOriginalBook={() => returnOriginalBook(book)} returnCopyBook={() => returnCopyBook(book)}/>
            )
        }
    </div>
</div>