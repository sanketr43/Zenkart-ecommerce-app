import './homepage.styles.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {categories_array, collections_array, sliders_array} from "../../data/homepage";

function Homepage() {
    let navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [collections, setCollections] = useState([]);
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            setCategories(categories_array);
            setCollections(collections_array);
            setSliders(sliders_array);
        },0);
    },[]);

    return ( 
        <>
            <div className="bui-container">
                <div className="bui-home-category">
                    {
                        categories.map(category => {
                            return(
                                <div className="bui-card" onClick={() => navigate('category')} key={category.id}>
                                    <div className="bui-card-img">
                                        <img className="bui-card-img-top" src={category.image} alt="card-image"/>
                                        <div className="bui-card-img-overlay">
                                            <h5 className="bui-card-title">{category.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="bui-slider-container">
                    <div className="bui-slider">
                        {
                            sliders.map(slider => {
                                return(
                                    <img src={slider.image} alt=""/>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="bui-home-category-two">
                    {
                        collections.map(collection => {
                            return(
                                <div className="bui-card-row" onClick={() => navigate('category')} key={collection.id}>
                                    <div className="bui-card-badge bui-bg-info">New Arrival</div>
                                    <img className="bui-card-img-left" src={collection.image} alt="card-image"/>
                                    <div className="bui-card-body">
                                        <h5 className="bui-card-title">{collection.title}</h5>
                                        <p className="bui-card-text">
                                            {collection.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
     );
}

export default Homepage;