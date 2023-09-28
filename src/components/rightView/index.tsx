import React, { FC } from "react";
import { RightViewPlaceholder } from "../../Styles";
import { Paper } from "@material-ui/core";
import BarChart from "./ColumnChart";
import TableView from "./Table";
import ProductDetail from "./ProductDetail";

/**
 * Props type for the RightView component.
 *
 * @param category - The selected category.
 * @param product - The selected product.
 */
interface Props {
  category: string;
  product: string;
}

const RightView: FC<Props> = ({ category, product }) => {
  return (
    <>
      {!category && !product && (
        <RightViewPlaceholder>Please select a category</RightViewPlaceholder>
      )}
      {category && !product && (
        <>
          <Paper style={{ marginRight: "20px", marginTop: "20px" }}>
            <BarChart category={category} />
          </Paper>
          <div style={{ marginRight: "20px", marginTop: "20px" }}>
            <TableView category={category}></TableView>
          </div>
        </>
      )}
      {category && product && <ProductDetail productId={product} />}
    </>
  );
};

export default RightView;
