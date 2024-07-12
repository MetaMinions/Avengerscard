
function Services({ title, description, image }){

    return(
        <>
        <div className="card">
            <div className="card-overlay"></div>
            <div className="card-content">
                <div className="image-circle">
                    <img src={image} alt="Logo" className="card-image" />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="card-actions">
                <button className="see-more-btn">See More</button>
                <div className="arrow-circle">
                    <svg
                        className="arrow-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
        </>
    )

}

export default Services