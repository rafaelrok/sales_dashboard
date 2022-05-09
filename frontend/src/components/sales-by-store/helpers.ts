import { SalesByGender } from '../../types/types';

export const buildSalesByGenderChart = (gender: SalesByGender[]) => {
    const labels = gender.map((gender) => gender.gender);
    const series = gender.map((gender) => gender.sum);

    return {
        labels,
        series
    };
};
