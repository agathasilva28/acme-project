import { search } from '../request/index'
import ImageList from './ImageList';
import { useState } from 'react';


const SearchForm = () => {
    const [imageList, setImageList] = useState([]);
    let imageQuery = '';

    function handleChange(event) {
        imageQuery = event.target.value;
    }

    const handleSearch = () => {
        search(imageQuery).then((response) => {
            setImageList(response.data.data)
        });
    };

    return (
        <div className='content'>
            <div className='form'>
                <input type='text' onChange={handleChange} />
                <button onClick={handleSearch}>search</button>
            </div>
            <ImageList imageData={imageList}></ImageList>
        </div>
    )
};

export default SearchForm;