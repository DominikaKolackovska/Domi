/*Vytvořte si nový projekt v TypeScriptu pomocí příkazu tsc --init. Nastavte cílovou
verzi ECMAScript na ES2022.

1.  Vytvořte funkci getFullName, která jako parametr přijme objekt s povinnými
    vlastnostmi firstName (řetězec) a lastName (řetězec). Funkce vrátí řetězec s celým
    jménem. Použijte typování pro definování tvaru objektu v parametrech a návratové
    hodnoty funkce.  */

    type Name = {
        firstName:string,
        lastName:string
    }
    const getFullName = (person: Name): string => {
        return `${person.firstName} ${person.lastName}`
    }
    const user1 = {firstName:"Tom", lastName:"Schmidt"};
    console.log(getFullName(user1));


/*  2.Vytvořte rozhraní User s povinnými vlastnostmi id (číslo), name (řetězec), email
    (řetězec). Vytvořte funkci createUser, která přijme povinné parametry pro vytvoření
    uživatele a vrátí instanci rozhraní User.  */

    interface User { 
        id: number, 
        name: string, 
        email: string
    }
    
    const createUser = (id: number, name:string, email:string): Required<User> => {
        return {
            id: id,
            name: name,
            email: email
        }
    }
    
    const newUser = createUser (1234, "Tom", "tom.schmidt@example.com");
    
    console.log(newUser);


/*  3.Vytvořte třídu UserAccount s vlastnostmi username (řetězec) a isPremiumAccount
(logická hodnota). Od třídy vytvořte rozhraní UserAccountInterface a exportujte ho.  */

    export interface UserAccountInterface {
        username: string;
        isPremiumAccount: boolean;
    }

    export class UserAccount implements UserAccountInterface {
        username: string;
        isPremiumAccount: boolean;

        constructor(username: string, isPremiumAccount: boolean) {
            this.username = username;
            this.isPremiumAccount = isPremiumAccount;
        }
    }

    export const user = new UserAccount("Tom Schmidt", true);
    console.log(user);



/*  4.Vytvořte typ Book pro popis knihy, který bude obsahovat vlastnosti title (řetězec),
    pageCount (číslo) a author (řetězec). Vytvořte pole knih s alespoň 5 prvky.  */

    type Book = {
        title: string,
        pageCount: number,
        author:string
    }
    const listOfBooks: Book[] = [
        { title: "Designing Interface Animation", pageCount: 240, author: "Val Head" },
        { title: "Start with why", pageCount: 256, author: "Simon Sinek" },
        { title: "The Design of Everyday Things", pageCount: 368, author: "Donald A. Norman" },
        { title: "Don't Make Me Think", pageCount: 216, author: "Steve Krug" },
        { title: "Atomic Design", pageCount: 189, author: "Brad Frost" }
    ];

    console.log(listOfBooks);


/*  5.Vytvořte soubor books.ts, kde vyexportujete typ Book. V souboru main.ts importujte
tento typ a použijte jej pro vytvoření pole knih.  */
