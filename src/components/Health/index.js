import React from 'react'
import './Style/Health.css'
import Insights from './Insights'
import HealthChart from './HealthChart'
import Task from './Task'

export default function Health() {
    return (
        <div>
            <Insights/>
            <div className='second'>
            <HealthChart/>
            <Task/>
            </div>
        </div>
        
    )
}
