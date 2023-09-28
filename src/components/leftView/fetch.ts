import useFetch from "../useFetch";

export const useProductsFetch = () => useFetch<string[]>('https://fakestoreapi.com/products/categories');
export const useCategoryFetch = (category:string) => useFetch<string[]>(`https://fakestoreapi.com/products/category/${category}`);
export const useProductDetailFetch = (CategoryId: string) => useFetch<any>(`https://fakestoreapi.com/products/${CategoryId}`);