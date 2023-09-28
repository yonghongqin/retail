import { FC, useEffect } from "react";
import { useProductDetailFetch } from "../leftView/fetch";
import {
  BasicInfoAndImgDiv,
  CategoryBar,
  DescriptionDiv,
  DetailCard,
  ImageBar,
  InfoSchema,
  PriceBar,
  RightViewPlaceholder,
} from "./styled";

interface Props {
  productId: string;
}

export const ProductDetail: FC<Props> = ({ productId }) => {
  const [fetchState, setUrl] = useProductDetailFetch(productId);
  const { data: product } = fetchState;
  useEffect(() => {
    // Get data according to category
    if (productId) {
      const fetchUrl = `https://fakestoreapi.com/products/${productId}`;
      setUrl(fetchUrl);
    }
  }, [productId]);

  return (
    <div>
      <RightViewPlaceholder>{product?.title}</RightViewPlaceholder>
      <DetailCard>
        <BasicInfoAndImgDiv>
          <InfoSchema>
            <CategoryBar>
              <CategoryBar>{product?.category?.toUpperCase()}</CategoryBar>
              <CategoryBar>SKU: {product?.id}</CategoryBar>
            </CategoryBar>
            <PriceBar>$ {product?.price}</PriceBar>
          </InfoSchema>
          <ImageBar>
            <img
              style={{ marginLeft: "300px", height: "200px" }}
              src={product?.image}
            ></img>
          </ImageBar>
        </BasicInfoAndImgDiv>
        <DescriptionDiv>{product?.description}</DescriptionDiv>
      </DetailCard>
    </div>
  );
};

export default ProductDetail;
