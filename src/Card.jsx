const Card = (props) => {
    return (
        <div className="card">
            <div className="cardTop">

                <p>{props.name}</p>
            </div>
            <p>title: {props.title}</p>
            <p>age: {props.age}</p>
        </div>
    );
}

export default Card;
