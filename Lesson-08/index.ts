/*  Definujte interface nebo type TypeScriptu, které popisuje strukturu
    očekávaných uživatelských dat z API.
    Příklad polí: id, name, username, email atd. */
    
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string|number;
    };
    phone: string|number;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
/*      Napište async funkci v TypeScriptu, která načte uživatelská data z mock API (např. JSONPlaceholder).
        Příklad API endpointu pro použití: https://jsonplaceholder.typicode.com/users
        Otypujte odpověď z API: 
        
        Implementujte zpracování chyb pomocí try...catch.
        ● V případě selhání načítání dat z API zobrazte uživatelsky přívětivou chybovou zprávu.
        ● Zamyslete se nad tím, jaká chybová zpráva by byla vhodná a informativní.*/
        

const apiurl = `https://jsonplaceholder.typicode.com/users`;

async function fetchUsers(): Promise<User[]> {
    try {
      const response = await fetch(apiurl);
      if (!response.ok) {
        throw new Error(`Error loading data. Check your connection and try again.`);
      }
      const users: User[] = await response.json();
      console.table(users, ['id', 'name', 'email', 'username']);
      const formattedUsers = users.map(user => ({
        "Database of Users":`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Username: ${user.username}`
      }));
      console.table(formattedUsers);
      return users
    } 
    catch (error) {
      console.error(`Error:`, error);
      return [];
    }
  }
   /* 
     Zobrazení Uživatelských Dat Pomocí Šablonových Literálů:
         ● Formátujte a zobrazte načtená uživatelská data pomocí šablonových literálů.
         ● Ujistěte se, že data jsou prezentována přívětivě a čitelně.
         ● Použijte například console.table   */

fetchUsers().then(users => {
    console.table(users,[`id`, `name`, `email`, `username`]);
  });

fetchUsers()
