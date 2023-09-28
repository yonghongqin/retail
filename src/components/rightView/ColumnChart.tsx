import { FC, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useCategoryFetch } from "../leftView/fetch";

interface Props {
  category: string;
}

export const BarChart: FC<Props> = ({ category }) => {
  const [fetchState, setUrl] = useCategoryFetch(category);
  const { data: products,  } = fetchState;
  useEffect(() => {
    if (category) {
      const fetchUrl = `https://fakestoreapi.com/products/category/${category}`;
      setUrl(fetchUrl);
    }
  }, [category]);

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Price Comparison",
    },
    xAxis: {
      categories: products?.map((item: any) => item?.title),
    },
    yAxis: {
      min: 0,
      title: {
        text: "Price",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<td style="padding:0"><b>{point.y:.1f} $</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        borderWidth: 0,
      },
    },
    series: [
      {
        name: category,
        data: products?.map((item: any) => item?.price),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
