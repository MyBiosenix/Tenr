import React from 'react'
import StrategyProp from '../props/StrategyProp'
import '../styles/strategy.css'
import { FaUsers, FaHandHoldingHeart, FaWallet, FaMoneyBillWave } from 'react-icons/fa';

function Strategy() {
  return (
    <div className='strategydiv'>
      <h2><u>Our Strategy</u></h2>
      <div className='mystrategy'>
        <StrategyProp icon={<FaUsers/>}
        count="1300+"
        para="Total Users"/>

        <StrategyProp icon={<FaHandHoldingHeart/>}
        count="8M+"
        para="Total Withdrawl"/>

        <StrategyProp icon={<FaWallet/>}
        count="10M+"
        para="Total Deposit"/>

        <StrategyProp icon={<FaMoneyBillWave/>}
        count="9M"
        para="Total Invested"/>
      </div>
    </div>
  )
}

export default Strategy
