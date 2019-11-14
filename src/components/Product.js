import React from 'react';

const Product = props => {
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={() => props.addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;


// import React from 'react';

// const Product =()=> {
// 	return (
// 		<div className="product">
// 			<img src={product.image} alt={`${product.title} book`} />

// 			<h1 className="title">{product.title}</h1>

// 			<p className="price">${product.price}</p>

// 			<button onClick={() => addItem(product)}>
// 				Add to cart
// 			</button>
// 		</div>
// 	);
// };

// export default Product;
