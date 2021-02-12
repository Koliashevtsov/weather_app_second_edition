import React from 'react';
import { useSelector } from 'react-redux';

import Position from '../../components/position';

const PositionContainer = () => {
  const cityName = useSelector(state => state.place.cityName)
  return (
    <Position cityName={cityName}/>
  );
}
export default PositionContainer;
