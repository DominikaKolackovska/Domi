/*  Definujte interface nebo type TypeScriptu, které popisuje strukturu
    očekávaných uživatelských dat z API.
    Příklad polí: id, name, username, email atd. */

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string | number;
}
  
interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
  
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string | number;
    website: string;
    company: Company;
}
  
/*      Napište async funkci v TypeScriptu, která načte uživatelská data z mock API (např. JSONPlaceholder).
        Příklad API endpointu pro použití: https://jsonplaceholder.typicode.com/users
        Otypujte odpověď z API: 
        Implementujte zpracování chyb pomocí try...catch.
         ● V případě selhání načítání dat z API zobrazte uživatelsky přívětivou chybovou zprávu.
         ● Zamyslete se nad tím, jaká chybová zpráva by byla vhodná a informativní.  */


const apiUrl = `https://jsonplaceholder.typicode.com/users`;
  
async function Users(): Promise<User[]> {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Error loading data. Check your connection and try again.`);
      }
  
      const users: User[] = await response.json();

 /*     Zobrazení Uživatelských Dat Pomocí Šablonových Literálů:
         ● Formátujte a zobrazte načtená uživatelská data pomocí šablonových literálů.
         ● Ujistěte se, že data jsou prezentována přívětivě a čitelně.
         ● Použijte například console.table   */
         
      console.table(users.map((user) => ({
        Id: user.id,
        Name: user.name,
        Username: user.username,
        Email: user.email,
        Address: `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`,
        Contact: user.phone,
        })));
  
      return users;} 
      
    catch (error) {
      console.error(`Error:`, error);
      return [];
    }}
  Users();
  