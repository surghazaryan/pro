"use client"
import React, {useState} from 'react';
import product from "./MOCK_DATA (2).json"

const Category = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const handleCategoryChange = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category))
        }else{
            setSelectedCategories([...selectedCategories, category])
        }
    }
    const filteredProducts = product.filter(item => {
        if (selectedCategories.length === 0) return true;
        return selectedCategories.includes(item.category); 
    });
    return (
       <div style={{ padding: '20px', display: 'flex', gap: '30px' }}>
            {/* Ֆիլտրեր */}
            <div>
                <label>
                    <input type="checkbox" onChange={() => handleCategoryChange("Kitchen")} /> Kitchen
                </label>
                <br />
                <label>
                    <input type="checkbox" onChange={() => handleCategoryChange("Food")} /> Food
                </label>
            </div>

            {/* Ապրանքների ցանկ */}
            <div>
                <h3>Products ({filteredProducts.length})</h3>
                {filteredProducts.map((item: any) => (
                    <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
                        <h4>{item.name}</h4>
                        <p>{item.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;