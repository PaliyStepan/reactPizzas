import React, {useEffect} from "react";
import {Categories, SortPopup, PizzaBlock, LoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from '../redux/action/filters';
import {fetchPizzas} from "../redux/action/pizzas";
import {addPizzaToCart} from "../redux/action/cart";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'rating', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'},
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) =>  pizzas.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzas}) =>  pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) =>  filters);


    useEffect(()=>{
        dispatch(fetchPizzas(sortBy, category ))
    },[sortBy, category, ]);


    const onSelectCategory = React.useCallback(index =>{
        dispatch(setCategory(index))
    }, []);


    const onSelectSortType = React.useCallback(type =>{
        dispatch(setSortBy(type))
    }, []);

    const handleAddPizza = obj =>{
        dispatch(addPizzaToCart(obj))
    };


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                    activeCategory={category}
                />
                <SortPopup
                    activeSortType={sortBy.type}
                    items = {sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                    ? items.map(item=> (
                            <PizzaBlock
                                onClickAddPizza={handleAddPizza}
                                key={item.id}
                                addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                                {...item}
                            />
                        ))
                    : Array(10)
                        .fill(0)
                        .map((_, index) => <LoadingBlock key={index}/>)
                }
            </div>
        </div>
    )
}

export default Home;
