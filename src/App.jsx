import Header from './Components/Header.jsx';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './Components/PunkList';
import Main from './Components/Main.jsx';

function App() {
	const [punkListData, setPunkListData] = useState([]);
	const [selectedPunk, setSelectedPunk] = useState([0]);

	useEffect(() => {
		const getMyNtfs = async () => {
			const openseaData = await axios.get(
				'https://testnets-api.opensea.io/assets?asset_contract_address=0xa5f58a09c1c693d8ECC62D20eAD168206D1dBFDB&order_direction=asc',
			);
			console.log(openseaData.data.assets);
			setPunkListData(openseaData.data.assets);
		};

		return getMyNtfs();
	}, []);

	return (
		<div className="app">
			<Header />
			{punkListData.length > 0 && (
				<>
					<Main punkListData={punkListData} selectedPunk={selectedPunk} />
					<PunkList
						punkListData={punkListData}
						setSelectedPunk={setSelectedPunk}
					/>
				</>
			)}
		</div>
	);
}

export default App;
