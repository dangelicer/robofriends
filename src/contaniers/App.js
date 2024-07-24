import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'
import ErrorBoundry from "../components/ErrorBoundry";


function App() {
    const [robots, setRobots] = useState([])
    const [searchfield, setsearchfield] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, [])

    const onSearchChange = (event) => {
        setsearchfield(event.target.value );
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
        <div className="tc">
            <h1 className='f1'>Robo Friends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default App;