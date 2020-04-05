import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesSelector from './CategoriesSelector';
import { getAllComicBooks } from '../../../redux/actions';
import Categories from './Categories';
import SearchBar from './SearchBar';

const Home = () => {
  // get comicbooks group by category from redux
  const comicbooksByCategory = useSelector(({ ComicBook }) =>
    ComicBook.get('categories'),
  ).toJS();
  const dispatch = useDispatch();

  useEffect(() => {
    const loadComicBooks = async () => {
      await dispatch(getAllComicBooks());
    };

    loadComicBooks();
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      <CategoriesSelector />
      <Categories categories={comicbooksByCategory} />
    </>
  );
};

export default Home;
