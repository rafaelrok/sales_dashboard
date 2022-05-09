import { ApexOptions } from 'apexcharts';

export const buildPieChartConfig = (labels: string[] = []) => {
    return {
        labels,
        noData: {
            text: 'Sem resultados',
            align: 'center',
            verticalAlign: 'middle',
            offsetX: 0,
            offsetY: 0,
            style: {
                color: '#FFF',
                fontSize: '18px',
                fontFamily: 'Roboto, sans-serif'
            }
        },
        colors: ['#FF7A00', '#7234F5', '#FF0000', '#ff6b72'],
        legend: {
            show: true,
            floating: false,
            position: 'bottom',
            offsetY: 0,
            labels: {
                colors: ['#8D8D8D']
            },
            fontFamily: 'Roboto, sans-serif',
            fontSize: '18px'
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: undefined,
            textAnchor: 'middle',
            distributed: false,
            offsetX: 0,
            offsetY: 0,
            style: {
                fontSize: '10px',
                fontFamily: 'Ubuntu, sans-serif',
                fontWeight: 'bold'
            }
        },
        plotOptions: {
            pie: {
                size: 400,
                donut: {
                    size: '65%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 10,
                            formatter: function () {
                                return '';
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            fontSize: '24px',
                            color: '#8D8D8D',
                            fontFamily: 'Roboto, sans-serif',
                            formatter: function () {
                                return '';
                            }
                        }
                    }
                }
            }
        },
        chart: {
            height: '400px'
        }
    } as ApexOptions;
};
