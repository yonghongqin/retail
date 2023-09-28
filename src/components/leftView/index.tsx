import React, { FC, useState, useEffect,  } from 'react';
import CategorySelector from './CategorySelector'
import ProductSelector from './ProductSelector'

interface Props{
  onCategoryChange: (value: any)=> void;
  onProductChange: (value: any) => void;
}

const LeftView: FC<Props> = ({onCategoryChange: handleCategoryChange,onProductChange: handleProductChange}) => {
  
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  useEffect(() => {
    setSelectedProduct('');
  }, [selectedCategory]);

  const handleCategoryChanged = (value: any) => {
    setSelectedCategory(value)
    handleCategoryChange(value)
  }

  const handleProductChanged = (value: any) => {
    setSelectedProduct(value);
    handleProductChange(value);
  }
  return (
    <>
      <CategorySelector selectedCategory={selectedCategory} onCategoryChange={handleCategoryChanged} />
      <ProductSelector category={selectedCategory} product={selectedProduct} onProductChange={handleProductChanged} />
    </>
  );
};

export default LeftView;
