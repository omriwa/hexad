import React,{ FC } from "react";
import { IBook } from "../../types/index"

interface IBookProps extends IBook {}

export const Book: FC<IBookProps> = ({bookTitle,numberOfCopies,numberOfOrigin }) => <div>
    <h4>{bookTitle}</h4>
    <div>
        <ul>
            <li>
                <span>Number of original copies</span> : {numberOfOrigin}
            </li>
            <li>
                <span>Number of copies</span> : {numberOfCopies}
            </li>
        </ul>
    </div>
</div>