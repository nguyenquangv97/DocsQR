import Searchbar from '@/components/SearchBar';
import React from 'react';

const LeftSideBar = () => {
  return (
    <section className="left_sidebar h-[calc(100vh-58px)] border-r border-slate-200">
      <Searchbar/>
      TAGS for documents
    </section>
  );
};

export default LeftSideBar;
