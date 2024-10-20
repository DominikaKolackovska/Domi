/*  1. Nastavení projektu:
        ○ Vytvořte nový React projekt pomocí Create React App:
            npx create-react-app data-fetching-hw --template typescript
        ○ Přejděte do nově vytvořené složky:
            cd data-fetching-hw

    2. Vytvoření komponenty:
        ○ V src/components složce vytvořte nový soubor s názvem UserList.tsx
        ○ V tomto souboru vytvořte funkční komponentu UserList
        ○ Nezapomeňte vytvořit barrel file index.ts, abychom neměli nehezké importy

    3. Pomocí useEffect a useState načtěte seznam uživatelů z mockAPI
        ○ https://jsonplaceholder.typicode.com/users

    4. Renderování komponenty:
        ○ Zobrazte zprávu &quot;Načítání...&quot; když se data načítají (použijte state)
        ○ Po načtení dat zobrazte seznam jmen uživatelů
        ○ Pro každého uživatele zobrazte jméno, email a název společnosti

    5. Nezapomeňte komponentu vyrenderovat v App

    6. Implementujte zachycení a zobrazení chyb:
        ○ Přidejte nový state pro ukládání chybových zpráv
        ○ Zobrazte chybovou zprávu uživateli, pokud načtení dat selže
*/

import { useEffect, useState } from "react";
import './UserList.css';

type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed load users from database.");
        }
        const UserData: User[] = await response.json();
        setUsers(UserData);
      } catch (err: any) {
        setError(err.message || "We can't load the list of users right now. Please try refreshing the page or try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="user-list"> {}
      {users.map((user) => (
        <div className="user-container"> {}
        <div className="upperPart"> 
          <div className="avatar"></div> {}
          <div className="user-name">{user.name}
          </div>
        </div>
          <div className="contact">
            <p className="contact-title">Contact</p>
            <p className="email-label">Email</p>
            <p className="email-string">{user.email}</p>
            </div>
          <div className="company">
            <p className="company-title">Company</p>
            <p className="company-name-label">Company name</p>
            <p className="company-name-string">{user.company.name}</p>
            <p className="divider"></p>
            <p className="catchPhrase-label">CatchPhrase</p>
            <p className="company-catchphrase-string">{user.company.catchPhrase}</p>
            <p className="divider"></p>
            <p className="bs-label">Bs</p>
            <p className="company-bs-string">{user.company.bs}</p>
            </div>
        </div>
      ))}
    </div>
  );

};
