import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

import './styles.css';

type Props = {
    series?: number[];
    labels?: string[];
};

function PieChartCard({ series = [], labels = [] }: Props) {
    return (
        <div className="pie-chart-card-container">
            <ReactApexChart
                type="donut"
                width="400"
                height="500"
                series={series}
                options={buildPieChartConfig(labels)}
            />
        </div>
    );
}

export default PieChartCard;
