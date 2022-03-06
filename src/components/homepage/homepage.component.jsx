import './homepage.styles.css';

function Homepage() {
    return ( 
        <>
            <div className="bui-container">
                <div className="bui-home-category">
                    <div className="bui-card">
                        <div className="bui-card-img">
                            <img className="bui-card-img-top" src="https://cdn.pixabay.com/photo/2018/02/08/11/54/male-3139289__340.jpg" alt="card-image"/>
                            <div className="bui-card-img-overlay">
                                <h5 className="bui-card-title">Men</h5>
                            </div>
                        </div>
                    </div>
                    <div className="bui-card">
                        <div className="bui-card-img">
                            <img className="bui-card-img-top" src="https://cdn.pixabay.com/photo/2018/02/08/11/54/male-3139289__340.jpg" alt="card-image"/>
                            <div className="bui-card-img-overlay">
                                <h5 className="bui-card-title">Men</h5>
                            </div>
                        </div>
                    </div>
                    <div className="bui-card">
                        <div className="bui-card-img">
                            <img className="bui-card-img-top" src="https://cdn.pixabay.com/photo/2018/02/08/11/54/male-3139289__340.jpg" alt="card-image"/>
                            <div className="bui-card-img-overlay">
                                <h5 className="bui-card-title">Men</h5>
                            </div>
                        </div>
                    </div>
                    <div className="bui-card">
                        <div className="bui-card-img">
                            <img className="bui-card-img-top" src="https://cdn.pixabay.com/photo/2018/02/08/11/54/male-3139289__340.jpg" alt="card-image"/>
                            <div className="bui-card-img-overlay">
                                <h5 className="bui-card-title">Men</h5>
                            </div>
                        </div>
                    </div>
                    <div className="bui-card">
                        <div className="bui-card-img">
                            <img className="bui-card-img-top" src="https://cdn.pixabay.com/photo/2018/02/08/11/54/male-3139289__340.jpg" alt="card-image"/>
                            <div className="bui-card-img-overlay">
                                <h5 className="bui-card-title">Men</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bui-slider-container">
                    <div className="bui-slider">
                        <img src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt=""/>
                        <img src="https://images.unsplash.com/photo-1607083205626-956228d6185d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80" alt=""/>
                        <img src="https://images.unsplash.com/photo-1591030434469-3d78c7b17820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt=""/>
                    </div>
                </div>

                <div className="bui-home-category-two">
                    <div className="bui-card-row" onclick="redirectPage('productlisting.html');">
                        <div className="bui-card-badge bui-bg-info">New Arrival</div>
                        <img className="bui-card-img-left" src="https://cdn.pixabay.com/photo/2018/02/08/11/54/male-3139289__340.jpg" alt="card-image"/>
                        <div className="bui-card-body">
                            <h5 className="bui-card-title">Summer Collection</h5>
                            <p className="bui-card-text">
                                Check out our best winter collection to stay warm in style this season.
                            </p>
                        </div>
                    </div>
                    <div className="bui-card-row" onclick="redirectPage('productlisting.html');">
                        <div className="bui-card-badge bui-bg-info">New Arrival</div>
                        <img className="bui-card-img-left" src="https://cdn.pixabay.com/photo/2018/02/08/11/54/male-3139289__340.jpg" alt="card-image"/>
                        <div className="bui-card-body">
                            <h5 className="bui-card-title">Summer Collection</h5>
                            <p className="bui-card-text">
                                Check out our best winter collection to stay warm in style this season.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Homepage;