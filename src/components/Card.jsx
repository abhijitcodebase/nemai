const Card = ({ prod }) => {
  return (
    <div className="card">
      <div>Image: {prod.imageURL}</div>
      <p>Name: {prod.name}</p>
      <p>Description : {prod.description}</p>
      <p>Price: {prod.price} </p>
    </div>
  );
};

export default Card;
