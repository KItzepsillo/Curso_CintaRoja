import React from 'react';
import AppNav from '../../components/AppNav/AppNav';
import TaskCard from '../../components/TaskCard/TaskCard';

const MainContainer = () => {
    return (
        <div>
            <AppNav />     
            <div className="container">
                <TaskCard/>
            </div>       
        </div>
    )
}

export default MainContainer
