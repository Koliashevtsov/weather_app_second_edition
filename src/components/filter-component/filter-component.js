import React, { useState, useEffect } from 'react';

import HoursItemsList from '../hours-items-list';
import ScrollItems from '../scroll-items';

const FilterComponent = ({ list }) => {

  const offsetLength = 6;

  const [ filteredList, setFilteredList ] = useState(list);
  const [ offsetIdx, setOffsetIdx ] = useState(0);
  const [countOffsets, setCountOffsets] = useState(0);

  function clickOnScroll(newOffsetIdx) {
    setOffsetIdx(newOffsetIdx);
  }

  useEffect(() => {
    const nOffsets = Math.ceil(list.length / offsetLength);
    setCountOffsets(nOffsets);
  }, [list, offsetLength])

  useEffect(() => {
    const idxElemInList = offsetIdx * offsetLength;
    const l = list.slice(idxElemInList, idxElemInList + offsetLength);
    setFilteredList(l);
  }, [offsetIdx])

  return (
    <>
      <HoursItemsList list={filteredList}/>
      <ScrollItems
        countOffsets={countOffsets}
        handleClick={clickOnScroll}
        activeOffsetIdx={offsetIdx}/>
    </>
  );
}
export default FilterComponent;
