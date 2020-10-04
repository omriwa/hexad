import React, { FC } from "react";
import { IBook } from "../../types/index"
import { Book } from "../book/Book";

export interface IUserProps {
    books: IBook[]
}

export const User: FC<IUserProps> = ({ books }) => <div>
    <h4>User Books</h4>
    <div>

        {
            books.map((book, index) =>
                <Book {...book} key={index} />
            )
        }
    </div>
</div>