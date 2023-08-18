import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import StockRow from '../Stockrow/StockRow';
import { getTopGainers } from '../../api/stockService';
import { useDispatch, useSelector } from 'react-redux';
import { setNewUser } from '../../redux/actions/homeActions';
import { StockListTable, StocklistContainer } from './StockListStyles';
import { LIST } from './stockConstant'

const StockList = () => {
    const dispatch = useDispatch()
    const TABLEHEADER_LIST:Array<string> = ['Symbol','Closing Date','Open Price','Close Price','Gain'];
    const listOfStocks: any = useSelector((state:any) => state?.home?.new);


    useEffect (() => {
        const stockList = async () => {
            const res = await getTopGainers( {
                trend_type: 'GAINERS',
                country: 'us',
                language: 'en'
              });
            dispatch(setNewUser(res));
        }
    
        dispatch(setNewUser(LIST.trends));
        //stockList();
    },[]);

  return (
      <StocklistContainer>
          <StockListTable>
              <table className="table mt-5">
                  <thead className='table-head'>
                      <tr>
                          {TABLEHEADER_LIST?.map((list, index) => <th key={index}>{list}</th>)}
                      </tr>
                  </thead>
                  <tbody>
                      <StockRow rowStock={listOfStocks} />
                  </tbody>
              </table>
          </StockListTable>
      </StocklistContainer>
  );
}

export default StockList;
