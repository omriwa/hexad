export interface IBook {
    id: number;
    bookTitle: string;
    numberOfOrigin: number;
    numberOfCopies: number;
}
export type voidFunction = () => void
export type libraryFunction = (book: IBook) => void;
export type bookKeys = 'numberOfOrigin' | 'numberOfCopies';