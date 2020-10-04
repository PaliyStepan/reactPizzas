import React from "react";

const Categories = React.memo(function Categories({activeCategory,items, onClickCategory}) {

    return(
        <div className="categories">
            <ul>
                <li
                    onClick={()=>onClickCategory(null)}
                    className={activeCategory === null ? 'active' : ''}
                >
                    Все
                </li>
                {items &&
                items.map((item, index)=>(
                    <li
                        className={activeCategory === index ? 'active' : ''}
                        key={`${item}_${index}`}
                        onClick={()=>onClickCategory(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
});

export default Categories;
