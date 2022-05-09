import { FilterData, PieChartConfig, Summary } from '../../types/types';
import { useCallback, useEffect, useState } from 'react';
import { buildSalesByGenderChart } from './helpers';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../utils/request';
import { formatPrice } from '../../utils/formatters';
import PieChartCard from '../pie-chart-card';

import './styles.css';

type Props = {
    filterData?: FilterData;
};

function Sales({ filterData }: Props) {
    const [summary, setSummary] = useState<Summary>();
    const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

    const getGender = useCallback(() => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: '/sales/by-gender',
            params: {
                storeId: filterData?.store?.id
            }
        };

        requestBackend(config).then((response) => {
            const newSalesByGender = buildSalesByGenderChart(response.data);
            setSalesByGender(newSalesByGender);
        });
    }, [filterData]);

    useEffect(() => {
        getGender();
    }, [getGender]);

    const getSummary = useCallback(() => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: '/sales/summary',
            params: {
                storeId: filterData?.store?.id
            }
        };

        requestBackend(config).then((response) => {
            setSummary(response.data);
        });
    }, [filterData]);

    useEffect(() => {
        getSummary();
    }, [getSummary]);

    return (
        <div className="sales-container base-card">
            <div className="sales-descriptions">
                <h1 className="sales-value-sum">{formatPrice(summary ? summary.sum : 0)}</h1>
                <h3 className="sales-title">Total de vendas</h3>
            </div>
            <div className="sales-dunet-container">
                <PieChartCard labels={salesByGender?.labels} series={salesByGender?.series} />
            </div>
        </div>
    );
}

export default Sales;
