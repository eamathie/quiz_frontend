import { apiRequest } from "./apiClient";

export interface Category {
    id: number,
    name: string,
}

interface CategoryList {
    trivia_categories: Category[],
}

export const fetchCategories = async (): Promise<CategoryList> => {
    return await apiRequest<CategoryList>('/api_category.php', 'GET');
}