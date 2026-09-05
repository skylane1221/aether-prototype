import { IndustryData } from '../../types';
import { realEstateIndustry } from './realEstate';
import { restaurantIndustry } from './restaurant';
import { gymIndustry } from './gym';
import { salonIndustry } from './salon';
import { cafeIndustry } from './cafe';
import { retailIndustry } from './retail';
import { hotelIndustry } from './hotel';
import { healthcareIndustry } from './healthcare';
import { automotiveIndustry } from './automotive';
import { educationIndustry } from './education';

export * from './realEstate';
export * from './restaurant';
export * from './gym';
export * from './salon';
export * from './cafe';
export * from './retail';
export * from './hotel';
export * from './healthcare';
export * from './automotive';
export * from './education';

export const INDUSTRIES: IndustryData[] = [
  realEstateIndustry,
  restaurantIndustry,
  gymIndustry,
  salonIndustry,
  cafeIndustry,
  retailIndustry,
  hotelIndustry,
  healthcareIndustry,
  automotiveIndustry,
  educationIndustry,
];
