import React from 'react'
import '../styles/process.css'
import ProcessProp from '../props/ProcessProp'
import { MdBarChart, MdGroup, MdLock, MdAccountBalanceWallet } from 'react-icons/md';

function Process() {
  return (
    <div className='process1'>
        <h2><u>Start Your Journey</u></h2>
        <div className='processdiv'>
            <ProcessProp icon={<MdBarChart/>}
            title="Choose Plans"/>

            <ProcessProp icon={<MdGroup/>}
            title="Create An Account"/>

            <ProcessProp icon={<MdLock/>}
            title="Login Authentication"/>

            <ProcessProp icon={<MdAccountBalanceWallet/>}
            title="Start Work" />
        </div>
    </div>
  )
}

export default Process
