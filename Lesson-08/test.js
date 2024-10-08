"use strict";
/*  Definujte interface nebo type TypeScriptu, které popisuje strukturu
    očekávaných uživatelských dat z API.
    Příklad polí: id, name, username, email atd. */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*      Napište async funkci v TypeScriptu, která načte uživatelská data z mock API (např. JSONPlaceholder).
        Příklad API endpointu pro použití: https://jsonplaceholder.typicode.com/users
        Otypujte odpověď z API:
        Implementujte zpracování chyb pomocí try...catch.
         ● V případě selhání načítání dat z API zobrazte uživatelsky přívětivou chybovou zprávu.
         ● Zamyslete se nad tím, jaká chybová zpráva by byla vhodná a informativní.  */
const apiUrl = `https://jsonplaceholder.typicode.com/users`;
function Users() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error loading data. Check your connection and try again.`);
            }
            const users = yield response.json();
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
            return users;
        }
        catch (error) {
            console.error(`Error:`, error);
            return [];
        }
    });
}
Users();
