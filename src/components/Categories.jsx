import React, {useState} from "react";

function Categories({items, onClick}) {

    const [activeItem, setActiveItem] = useState();
    const onSelectItem = (index) => {
        setActiveItem(index)
    };
    return(
        <div className="categories">
            <ul>
                <li
                    onClick={()=>onSelectItem(null)}
                    className={activeItem === null ? 'active' : ''}
                >Все</li>
                {items &&
                    items.map((item, index)=>(
                        <li
                            className={activeItem === index ? 'active' : ''}
                            key={`${item}_${index}`}
                            onClick={()=>onSelectItem(index)}
                        >
                            {item}
                        </li>
                    ))}
            </ul>
        </div>
    )
}







// class Categories extends React.Component{
//     state = {
//         activeItem : null
//     };
//
//     onSelectItem = index =>{
//         this.setState({
//             activeItem: index
//         })
//     };
//
//     render() {
//         const {items} = this.props;
//         return(
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {items.map((item, index)=>(
//                         <li
//                             className={this.state.activeItem === index ? 'active': ''}
//                             key={`${item}_${index}`}
//                             onClick={()=>this.onSelectItem(index)}
//                         >
//                             {item}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
// }


export default Categories;
