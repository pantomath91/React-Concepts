import React from 'react'
import './App.css'
import ComponentC from './components/ComponentC'

export const UserContext = React.createContext('Vishwas');
export const ChannelContext = React.createContext('Codevolution');

function App() {
	return (
		<div className="App">
			{/* <UserContext.Provider value={'Vishwas'}> */}
			{/* <ChannelContext.Provider value={'Codevolution'}> */}
			<ComponentC />
			{/* </ChannelContext.Provider> */}
			{/* </UserContext.Provider> */}
		</div>
	)
}

export default App