import { useLoaderData } from "react-router-dom";
import { ProductDetail } from "../components/ProductDetail/ProductDetail";

type Params = Record<string, string | undefined>;

export const productDetailLoader = async ({ params }: { params: Params }) => {
  return { id: params.id };
};

export const ProductDetailPage = () => {
  const { id } = useLoaderData() as Params;

  return <ProductDetail id={id} />;
};