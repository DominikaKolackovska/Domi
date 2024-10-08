"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const apiUrl = `https://jsonplaceholder.typicode.com/users`;
function Users() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error loading data. Check your connection and try again.`);
            }
            const users = yield response.json();
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
