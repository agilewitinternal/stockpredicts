import React from 'react';

const StockRow = (props: any) => {
    const { rowStock } = props
  return (
    rowStock?.length> 0 && rowStock.map((list:any) => {
        const date:string = new Date(list?.exchange_close)?.toLocaleDateString()
    return(<>
        <tr>
        <td>{list?.symbol}</td>
        <td>{date}</td>
        <td>{list?.previous_close}</td>
        <td>{list?.price}</td>
        <td>{list?.change}</td>
    </tr>
    </>)})  
  );
}

export default StockRow;
