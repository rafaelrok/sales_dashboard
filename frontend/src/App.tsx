import { useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import Sales from './components/sales-by-store';
import { FilterData } from './types/types';

function App() {
    const [filterData, setFilterData] = useState<FilterData>();

    const onFilterChange = (filter: FilterData) => {
        setFilterData(filter);
    };

    return (
        <>
            <Header />
            <div className="app-container">
                <Filter onFilterChange={onFilterChange} />
                <div className="sales-overview-container">
                    <Sales filterData={filterData} />
                </div>
            </div>
        </>
    );
}

export default App;
