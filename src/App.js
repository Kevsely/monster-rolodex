import { Component } from 'react';

import CardList from './components/card-list/card-list.component';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super()

        this.state = {
            monsters: [],
            searchString: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(monsters => this.setState({ monsters }))
    }

    onSearchChange = (event) => {
        const searchString = event.target.value.toLowerCase()
        this.setState({ searchString })
    }
    
    render() {
        const { monsters, searchString } = this.state
        const { onSearchChange } = this;
        
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchString)
        })

        return (
            <div className="App">
                <input className='search-box' type='search' placeholder='Search monsters' onChange={onSearchChange} />
                {/* {
                    filteredMonsters.map((monster) => {
                        return (
                            <div key={monster.id}>
                                <h1>{monster.name}</h1>
                            </div>
                        )
                    })
                } */}
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
