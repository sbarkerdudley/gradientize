import React, { useState } from 'react';
import { MultiSelect } from '@mantine/core';
import { genres } from '../utils'

const GENRES = Object.entries(genres).map(([value, label]) => {
  return { value, label, image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png' }
})

function GenreSelect() {

  const [value, setValue] = useState([])

  return (
    <MultiSelect
      clearable
      data={GENRES}
      value={value}
      onChange={setValue}
      dropdownPosition='flip'
      // label="Filter by Genre"
      maxDropdownHeight={300}
      clearButtonLabel='Clear Filters'
      maxSelectedValues={5}
      nothingFound="No Matching Results"
      placeholder="Filter by Genre"
      searchable
    />
  );
}
export default GenreSelect