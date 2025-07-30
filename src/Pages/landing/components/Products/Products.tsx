import "./Products.css";
// import pecuniaImg from "../../../assets/pecunia.png";
// import scholaImg from "../../../assets/schola.png";
// import rationImg from "../../../assets/ration.png";

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
        image: "https://media.discordapp.net/attachments/1359149188461494395/1399076844610912327/pecunia.png?ex=688a5259&is=688900d9&hm=30c9f9047ec989aabf8095fc45f2b46fb3df4a644c5d78241f722ed8e2a0bc33&=&format=webp&quality=lossless&width=1579&height=888",
        color: "#1E90FF", // Blue
        registerLink: "/signup?product=pecunia",
    },
    {
        name: "Schola",
        description: "An educational toolkit for structured learning and course management.",
        image: "https://media.discordapp.net/attachments/1367550083817537648/1399987630090883154/Design_sans_titre.png?ex=688aff95&is=6889ae15&hm=81d0c83c985ba0f6944dfdc4585a743c59d8a17eddf54f8f2b239b58489b4023&=&format=webp&quality=lossless&width=1579&height=888",
        color: "#c8253c", // Red
        registerLink: "/signup?product=schola",
    },
    {
        name: "Ratio",
        description: "Real-time telemetry and simulation-grade data parsing for advanced instrumentation.",
        image: "https://media.discordapp.net/attachments/1399989385058975796/1399990373257838612/Design_sans_titre.png?ex=688b0223&is=6889b0a3&hm=7020d488ebf30ed247585538216c09624de5def2f6f3a007ccbbc59db129dec3&=&format=webp&quality=lossless&width=1579&height=888",
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
