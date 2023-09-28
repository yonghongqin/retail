
import React, { FC } from 'react';
import { useProductsFetch } from './fetch';
import { SelectorComponent } from './SelectorComponent';

interface Props {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}

export const CategorySelector: FC<Props> = ({ selectedCategory, onCategoryChange }) => {
  const [fetchState] = useProductsFetch();
  const { data: categories, loading, error } = fetchState;

  return (
    <SelectorComponent 
      data={categories} 
      label="Category" 
      value={selectedCategory} 
      loading={loading} 
      error={error?.message || null} 
      onChange={onCategoryChange} 
    />
  );
};

export default CategorySelector