import "./Products.css";
// import pecuniaImg from "../../../assets/pecunia.png";
// import scholaImg from "../../../assets/schola.png";
// import rationImg from "../../../assets/ration.png";
import pecuniaImg from "../../../../assets/projects/pecunia.png"
import ratioImg from "../../../../assets/projects/ratio.png"
import scholaImg from "../../../../assets/projects/schola.png"

type Product = {
    name: string;
    description: string;
    image?: string;
    color: string;
    registerLink: string;
};

const products: Product[] = [
    {
        name: "Pecunia",
        description: "A powerful personal finance platform with visual limit tracking and overflow detection.",
        image: pecuniaImg,
        color: "#1E90FF", // Blue
        registerLink: "/signup?product=pecunia",
    },
    {
        name: "Schola",
        description: "An educational toolkit for structured learning and course management.",
        image: scholaImg,
        color: "#c8253c", // Red
        registerLink: "/signup?product=schola",
    },
    {
        name: "Ratio",
        description: "Real-time telemetry and simulation-grade data parsing for advanced instrumentation.",
        image: ratioImg,
        color: "#4CAF50", // Green
        registerLink: "/signup?product=ration",
    },
];

const Products = () => {
    return (
        <div className="Products-Container">
            {products.map((product, index) => {
                const isReversed = index % 2 === 1;

                return (
                    <section
                        className={`Product-Section ${isReversed ? "reverse" : ""}`}
                        key={product.name}
                        style={{ borderColor: product.color }}
                    >
                        <div className="Product-Info" style={{ color: product.color }}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <a href={product.registerLink} className="Product-Button" style={{ backgroundColor: product.color }}>
                                Register
                            </a>
                        </div>

                        <div className="Product-Image">
                            <img src={product.image} alt={`${product.name} screenshot`} />
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default Products;
