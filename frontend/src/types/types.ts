export type Stores = {
    id: number;
    name: string;
};

export type Summary = {
    sum: number;
    min?: number;
    max?: number;
    avg?: number;
    count?: number;
};

export type FilterData = {
    store?: Stores;
};

type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByGender = {
    gender: Gender;
    sum: number;
};

export type PieChartConfig = {
    labels: string[];
    series: number[];
};
