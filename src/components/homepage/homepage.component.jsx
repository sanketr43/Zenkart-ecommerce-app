import './homepage.styles.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {collections_array, sliders_array} from "../../data/homepage";
import { BASE_URL } from '../../context/global-context';

function Homepage() {
    let navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [collections, setCollections] = useState([]);
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        const getCategories = ( async () => {
            await axios.get(BASE_URL + "category/get").then((response) => {
                setCategories(response.data);
                setCollections(collections_array);
                setSliders(sliders_array);
            }).catch((error) => {   
                console.log(error);
            });
        });
        getCategories();
    },[]);

    return ( 
        <>
            <div className="bui-container">
                <div className="bui-home-category">
                    {
                        categories.map(category => {
                            return(
                                <div className="bui-card" onClick={() => navigate(`products?id=${category._id}`)} key={category._id}>
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
                                    <img src={slider.image} key={slider.id} onClick={() => navigate(`products?id=${slider.category_id}`)} alt=""/>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="bui-home-category-two">
                    {
                        collections.map(collection => {
                            return(
                                <div className="bui-card-row" onClick={() => navigate(`products?id=${collection.category_id}`)} key={collection.id}>
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