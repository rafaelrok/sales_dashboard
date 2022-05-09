import Select from 'react-select';
import { useEffect, useState } from 'react';
import { FilterData, Stores } from '../../types/types';
import { requestBackend } from '../../utils/request';

import './styles.css';

type Props = {
    onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
    const [selectStores, setSelectStores] = useState<Stores[]>([]);

    const handleChangeStore = (value: Stores) => {
        onFilterChange({ store: value });
    };

    useEffect(() => {
        requestBackend({ url: '/stores' }).then((response) => {
            setSelectStores(response.data);
        });
    }, []);

    return (
        <div className="filter-container base-card">
            <div className="filter-content">
                <Select
                    options={selectStores}
                    placeholder="Lojas"
                    classNamePrefix="filter-card"
                    onChange={(value) => handleChangeStore(value as Stores)}
                    isClearable
                    getOptionLabel={(store: Stores) => store.name}
                    getOptionValue={(store: Stores) => String(store.id)}
                />
            </div>
        </div>
    );
}

export default Filter;
