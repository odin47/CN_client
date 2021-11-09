import {useState, useEffect} from 'react'
import Layout from 'components/Layout'
import Input from 'components/Input'
import Button from 'components/Button'
import Tile from 'components/Tile'
import {getNews} from 'adapters';
import './App.css'

function App() {
	const [state, setState] = useState({
		search: '',
		list: []
	});

	const handleInput = (ev) => {
		setState(prevState => ({
			...prevState,
			search: ev.target.value
		}));
	}

	const handleSearch = () => {
		fetchData(state.search)
	}
	
	const fetchData = async (keyword) => {
		const response = await getNews(keyword);
		setState(prevState => ({
			...prevState,
			list: response
		}));
	}
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="App">
			<Layout>
				<>
					<div>
						<Input isLabelRequired={false} handleChange={handleInput} value={state.search} />
						<Button handleClick={handleSearch}>Search</Button>
						<div className="gridContainer">
							{
								state && state.list.length > 0 && state.list.map((item, index) => (
									<Tile 
										key={`${index}-${item.publishedAt}`}
										imageUrl={item.urlToImage}
										title={item.title}
										publishedAt={item.publishedAt}
										link={item.url}
									/>
								))
							}
						</div>
					</div>
				</>
			</Layout>
		</div>
	);
}

export default App;
