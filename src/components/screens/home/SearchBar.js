import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getAllComicBooks } from '../../../redux/actions';

const Container = styled.div({
  display: 'flex',
  margin: '2rem 1rem',
  border: '3px solid #777777',
  boxSizing: 'border-box',
  borderRadius: '8px',
  padding: '5px',
});

const TextInput = styled.input({
  backgroundColor: 'inherit',
  border: 'none',
  width: '100%',
  color: '#FFFFFF',
  fontWeight: '500',
  fontSize: '20px',
});

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    dispatch(getAllComicBooks(searchTerm.trim()));
  };

  return (
    <Container>
      <input
        data-cy="searchButton"
        type="image"
        src={`${process.env.PUBLIC_URL}/assets/SVG/SearchIcon.svg`}
        alt="search button"
        onClick={handleSearch}
      />
      <TextInput
        data-cy="searchInput"
        style={{ backgroundColor: 'inherit', border: 'none' }}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search by book name"
        onKeyPress={e => {
          if (e.key === 'Enter') handleSearch();
        }}
      />
    </Container>
  );
};

export default SearchBar;
