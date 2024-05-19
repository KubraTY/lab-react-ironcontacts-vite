import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {

  const [contactsData, setContactsData] = useState(contacts.slice(0,5))

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {
            contactsData.map(contact => (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} style={{width:150, height:200}}/></td> 
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            )

            )
          }

        </tbody>
      </table>
    </div>
  );
}

export default App;
