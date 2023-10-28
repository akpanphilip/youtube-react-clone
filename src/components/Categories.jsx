/* eslint-disable react/prop-types */
import { categories } from "../utils/constants"
const Categories = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <div className="categories">
            {categories.map((category) => (
                <button key={category.name} className="category" onClick={() => setSelectedCategory(category.name)}
                    style={{ background: category.name === selectedCategory && '#f1f1f1', color: category.name === selectedCategory && '#0f0f0f' }}>
                    {category.name}
                </button>
            ))}
        </div>
    )
}

export default Categories