import React from 'react'
import "./Style/House.css"
import Hcharts from './Hcharts'
import Hinsight from './Hinsight'
import HouseTable from './HouseTable'
import HTask from './HTask'

export default function House() {
    return (
        <div>
            <Hinsight/>
            <div className='second'>
                <Hcharts/>
                <HTask/>
            </div>
            <HouseTable/>
        </div>
    )
}
