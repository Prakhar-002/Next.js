import { products } from "../page";

const Product = async ({ params }: { params: { product: string } }) => {
  const { product } = await params;

  const findProduct = products.find((f) => f.id === +product);
  //   console.log("--------- findProduct", findProduct);

  return (
    <div className="m-[4rem]">
      <h1 className="text-3xl mb-[1rem]">{findProduct?.name}</h1>

      <img
        src={findProduct?.image}
        alt={findProduct?.name}
        className="w-[40rem]"
      />

      <p className="text-2xl mt-[1rem]">Price: ${findProduct?.price}</p>
    </div>
  );
};

export default Product;
