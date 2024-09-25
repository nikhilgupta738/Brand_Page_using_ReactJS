const HeroSection = () => {
    return (
        <main className="site container">
            <div className="content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also available on</p>
                    <div className="brand-icons">
                        <img src="/images/shops.png" alt="shops" />
                    </div>
                </div>
            </div>
            <div className="image-shoe">
                <img src="/images/shoe_image.png" alt="shoe" />
            </div>
        </main>
    );
};

export default HeroSection;
