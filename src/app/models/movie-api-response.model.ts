import { MovieResult } from './movie-result.model';

export interface MovieApiResponse {
    page?: number;
    results?: MovieResult[];
    total_results?: number;
    total_pages?: number;
}