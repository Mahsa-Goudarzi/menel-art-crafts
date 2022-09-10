import React from "react";
import { useParams } from "react-router-dom";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Embroidery Necklace 1",
    url: "https://images.squarespace-cdn.com/content/v1/5c254e1b620b85686f3da673/1546921472812-AE0E2ZDU971CTC68KGUT/il_fullxfull.637504842_eofk.jpeg?format=2500w",
    price: 15,
    alt: "embroidery necklace",
    description: "It's a necklace",
  },
  {
    id: "p2",
    title: "Embroidery Necklace 2",
    url: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/embroidery-jewelry-thursday-craftlove-interview-9.jpg",
    price: 16,
    alt: "embroidery necklace",
    description: "It's a necklace",
  },
  {
    id: "p3",
    title: "Embroidery Necklace 3",
    url: "https://swoodsonsays.com/wp-content/uploads/2018/03/embroidered-necklace-kit.jpg",
    price: 17,
    alt: "embroidery necklace",
    description: "It's a necklace",
  },
  {
    id: "p4",
    title: "Embroidery Necklace 4",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4GQZWQzoD4WEb_AAxy41Jk1kn-Jv044Jvg&usqp=CAU",
    price: 18,
    alt: "embroidery necklace",
    description: "It's a necklace",
  },
  {
    id: "p5",
    title: "Embroidery Necklace 5",
    url: "https://sc04.alicdn.com/kf/Hf45b5be9637046cdbc04c2cbb3454b50t.jpg",
    price: 19,
    alt: "embroidery necklace",
    description: "It's a necklace",
  },
];

export default function ProductDetail() {
  const params = useParams();
  const selectedProduct = DUMMY_PRODUCTS.find(
    (item) => item.id === params.productId
  );

  if (!selectedProduct) {
    return <p>Product is not found</p>;
  }

  return (
    <div className="container m-5">
      <h2>{selectedProduct.title}</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img
              src={selectedProduct.url}
              alt={selectedProduct.alt}
              className="img-fluid border shadow"
            />
          </div>
          <div className="col">
            <p>{selectedProduct.description}</p>
            <p>{selectedProduct.price} $</p>
          </div>
        </div>
      </div>
    </div>
  );
}
