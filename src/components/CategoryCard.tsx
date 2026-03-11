
import { type Category } from '../services/api/fetchCategories'

export function CategoryCard({ id, name }: Category) {
    return(
        <>
            <h3 key={id}>{name}</h3>
        </>
    )
}