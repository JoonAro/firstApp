import { useState } from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Card from './Card.jsx';

function App() {
    const [persons, setPersons] = useState([
        { id: 1, name: "Mia", title: 'Boss', age: 35 },
        { id: 2, name: 'Mikko', title: 'COO', age: 24 },
        { id: 3, name: 'Pekka', title: 'worker', age: 40 }
    ]);
    return (
        <>
            <Header logo="Joona Aronen" />
            <main>
                <h2>This is my application</h2>
                <div className="cards">
                    {persons.map((person) => (
                        <Card
                            name={person.name}
                            title={person.title}
                            age={person.age}
                        />
                    ))}
                </div>
            </main>
            <Footer copyright="Copyright Joona Aronen 2023" />
        </>
    );
}

export default App;