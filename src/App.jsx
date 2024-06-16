import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {

  const [contactsData, setContactsData] = useState(contacts.slice(0,6))

  const remainingContacts = contacts.filter(
    contact => !contactsData.some(contactinData => contactinData.id === contact.id)
  )

  const addRandomClick = () => {
    const randomContact = remainingContacts[Math.floor(Math.random()* remainingContacts.length)] 
    setContactsData([ ...contactsData, randomContact])
  }

  const sortByPopularity = () => {
    const sortedData = [...contactsData].sort((a,b) => b.popularity - a.popularity)
     setContactsData(sortedData)
  }

  const sortByName = () => {
    const sortedData = [...contactsData].sort((a,b) => a.name.localeCompare(b.name))
    setContactsData(sortedData)
  }

  const handleDelete = (contact) => {
    //console.log(contact.id)
    const filteredData = [...contactsData].filter(c => c.id !== contact.id)
    setContactsData(filteredData)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={()=>addRandomClick()}>Rondom Contacts</button>
      <button onClick= {()=>sortByPopularity()}>Sort By Popularity</button>
      <button onClick= {()=>sortByName()}>Sort By Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won <br/>Oscar</th>
            <th>Won <br/>Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            contactsData.map(contact => (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} style={{width:150, height:200}}/></td> 
                <td>{contact.name}</td>
                <td>{Math.floor(contact.popularity * 100)/100}</td>
                <td>{ contact.wonOscar ? "🏆" : " " }</td> 
                <td> {contact.wonEmmy ? "🌟" : " " }</td>
                <td>
                <button onClick={()=>handleDelete(contact)}>Delete</button>
                </td>
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
