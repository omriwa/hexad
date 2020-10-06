import React,{ FC } from "react";
import { IBook, voidFunction } from "../../types/index"

export interface IBookProps extends IBook {
    takeOriginalBook?: voidFunction
    returnOriginalBook?: voidFunction
    takeCopyBook?: voidFunction
    returnCopyBook?: voidFunction
}

export const Book: FC<IBookProps> = ({bookTitle,numberOfCopies,numberOfOrigin,takeOriginalBook,returnOriginalBook,takeCopyBook,returnCopyBook }) => <div>
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
    <div>
        {
            takeOriginalBook && <button onClick={takeOriginalBook}>Take original book</button>
        }
        {
            returnOriginalBook && <button onClick={returnOriginalBook}>Return original book</button>
        }
        {
            takeCopyBook && <button onClick={takeCopyBook}>Take copy book</button>
        }
        {
            returnCopyBook && <button onClick={returnCopyBook}>Return copy book</button>
        }
    </div>
</div>