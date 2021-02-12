import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCityCoordinates, setCityName } from '../../actions';

import SearchInput from '../../components/search-input';
import OpenCageContext from '../../components/open-cage-context';

const SearchInputContainer = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const cityNameFromStore = useSelector(state => state.place.cityName);
  const openCageService = useContext(OpenCageContext);

  function handleSubmit(e){
    e.preventDefault()
    dispatch(setCityName(name));
    setName('')
  }

  useEffect(() => {
    dispatch(fetchCityCoordinates(openCageService, cityNameFromStore))
  }, [cityNameFromStore])

  return <SearchInput
            value={name}
            handleChange={(e) => setName(e.target.value)}
            handleSubmit={handleSubmit}/>;
}

export default SearchInputContainer;
