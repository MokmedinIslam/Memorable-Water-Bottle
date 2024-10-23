import './bottle.css'

const Bottle = ({bottle}) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button>Purchase</button>
        </div>
    );
};

export default Bottle;