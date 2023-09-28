import { FC, useEffect } from 'react';
import { useCategoryFetch } from './fetch';
import { SelectorComponent } from './SelectorComponent';

interface Props {
  category: string;
  product: string;
  onProductChange: (value: string) => void;
}

export const ProductSelector: FC<Props> = ({ category, product, onProductChange }) => {
  const [fetchState, setUrl] = useCategoryFetch(category);

  useEffect(() => {
    if (category) {
      const fetchUrl = `https://fakestoreapi.com/products/category/${category}`;
      setUrl(fetchUrl);
    }
  }, [category]);

  const { data: products, loading, error } = fetchState;
  let dataArr = ['none']
  return (
    <SelectorComponent
      data={error ? dataArr : products}
      label="Product"
      value={product}
      loading={loading}
      error={null}
      onChange={onProductChange}
      disabled={!category}
    />
  );
};

export default ProductSelector;
