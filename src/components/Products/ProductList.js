import React from "react";
import ProductItem from "./ProductItem";

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

export default function ProductList() {
  return (
    <div className="container">
      <div className="row">
        {DUMMY_PRODUCTS.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-lg-3">
              <ProductItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
