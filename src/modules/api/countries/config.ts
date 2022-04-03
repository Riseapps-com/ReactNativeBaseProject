import type { Region } from './types';

export const ALL = 'all';
export const REGION = (region: Region): string => `region/${region}`;
export const ALPHA = (code: string): string => `alpha/${code}`;
