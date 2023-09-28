import  { FC, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useCategoryFetch } from "../leftView/fetch";

interface Props {
  category: string;
}

export const TableView: FC<Props> = ({ category }) => {
  const [fetchState, setUrl] = useCategoryFetch(category);
  const { data: products } = fetchState;
  useEffect(() => {
    // Get data according to category
    if (category) {
      const fetchUrl = `https://fakestoreapi.com/products/category/${category}`;
      setUrl(fetchUrl);
    }
  }, [category, setUrl]);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>TITLE</TableCell>
            <TableCell align="right">PRICE ($)</TableCell>
            <TableCell align="right">DESCRIPTION</TableCell>
            <TableCell align="right">RATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((row: any) => (
            <TableRow key={row?.id}>
              <TableCell component="th" scope="row">
                {row?.title}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.rating?.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableView;
