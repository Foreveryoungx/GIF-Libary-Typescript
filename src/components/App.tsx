// @ts-ignore
import React,{useEffect, useState} from 'react';
import '../App.css';
import axios from 'axios';
import SearchForm from './SearchForm';
import GifList from './GifList';

function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('random');
  const [isLoading, setIsLoading] = useState(true);
  const performSearch = (value: React.SetStateAction<string>) => setQuery(value);
  useEffect(() => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=50&api_key=brR0v35olOE77EvfqD2gwATa3TH1xFbB`)
        .then(res => {
            setData(res.data.data)
            console.log(res.data.data);
        }).catch(error => console.log('error fetching data what is you doing', error))
        .finally(() => setIsLoading(false))
  },[query])

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch}/>
        </div>
      </div>
      <div className="main-content">
        {
          isLoading
              ? <p>Loading...</p>
              : <GifList data={data} />
        }
      </div>

    </>
  );
}

export default App;
