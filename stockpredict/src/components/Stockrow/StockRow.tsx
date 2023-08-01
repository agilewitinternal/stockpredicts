import React from 'react';

const StockRow = (props: any) => {
    const { rowStock } = props
  return (
    rowStock?.length> 0 && rowStock.map((list:any) => {
        const date:string = new Date(list?.latestTime)?.toLocaleDateString()
        const gain: string = `$${(Number(list?.high) - Number(list?.low)).toFixed(2).toString()}`
    return(<>
        <tr>
        <td>{list?.symbol}</td>
        <td>{date}</td>
        <td>{list?.open}</td>
        <td>{list?.high}</td>
        <td>{list?.low}</td>
        <td>{list?.close}</td>
        <td>{gain}</td>
    </tr>
    </>)})  
  );
}

export default StockRow;
