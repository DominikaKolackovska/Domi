/*  5.Vytvořte soubor books.ts, kde vyexportujete typ Book. V souboru main.ts importujte
tento typ a použijte jej pro vytvoření pole knih.  */

export type Book = {
    title: string,
    pageCount: number,
    author:string
}
export const listOfBooks: Book[] = [
    { title: "Designing Interface Animation", pageCount: 240, author: "Val Head" },
    { title: "Start with why", pageCount: 256, author: "Simon Sinek" },
    { title: "The Design of Everyday Things", pageCount: 368, author: "Donald A. Norman" },
    { title: "Don't Make Me Think", pageCount: 216, author: "Steve Krug" },
    { title: "Atomic Design", pageCount: 189, author: "Brad Frost" }
];

console.log(listOfBooks);