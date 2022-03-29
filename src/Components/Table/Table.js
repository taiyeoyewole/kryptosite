import React from 'react'
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR } from '../Table/tableElements'
import btc from '../../images/btc.png';


const data = [
    {
        logo: '',
        name: '',
        symbol: '',
        daily: '',
        price: 'fff',
        marketcap: '',
        totalsupply: '',
        holders: '',
        vote:'',
    },
    {
        logo: 'btc',
        name: '',
        symbol: '',
        daily: '',
        price: 'fff',
        marketcap: '',
        totalsupply: '',
        holders: '',
        vote:'',
    },
    {
        logo: '',
        name: '',
        symbol: '',
        daily: '',
        price: 'fff',
        marketcap: '',
        totalsupply: '',
        holders: '',
        vote:'',
    }

]

const keys = Object.keys(data[0]);
const Table = () => {
  return (
    <>
    <STable>
        <STHead>
            <STHeadTR>
                {['#', ...keys].map((item, index) =>
                <STH key={index}>
                    {item}
                </STH>
                )}
            </STHeadTR>
        </STHead>
        <STBody>
            {data.map ((obj, index) => (
                <STBodyTR key={index}>
                    <STD>{index + 1}</STD>
                    {keys.map((item, index) => {
                        const value = obj[item];
                        return <STD key={index}> {value}</STD>
                   })}
                </STBodyTR>
            ))}
        </STBody>
    </STable>

    
    </>
  )
}

export default Table