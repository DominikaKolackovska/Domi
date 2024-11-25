import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { Select } from "../Select";
import { ThemeContext } from "../ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { useRenderCounter } from "../../hooks/useRenderCounter";
import { Button } from "../Button";

type FormData = {
  title: string;
  description: string;
  price: string;
  category: string;
};

const defaultValues: FormData = {
  title: "",
  description: "",
  price: "",
  category: "men's clothing",
};

export const AddProductForm = () => {
  const [formData, setFormData] = useState<FormData>(defaultValues);
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  useRenderCounter("Product Form");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);

    if (!localStorage.getItem("products")) {
      localStorage.setItem("products", JSON.stringify([]));
    }

    const products = JSON.parse(localStorage.getItem("products")!);
    products.push({
      ...formData,
      id: uuidv4(),
      image: "https://prd.place/400",
    });

    const productsJSON = JSON.stringify(products);
    localStorage.setItem("products", productsJSON);
    setFormData(defaultValues);
    setFormSubmitting(false);
    navigate("/product-list");
  };

  return (
    <div className={theme === "light" ? "bg-white" : "bg-gray-900"}>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2
                className={`text-base font-semibold leading-7 text-gray-900 ${
                  theme === "dark" && "text-white"
                }`}
              >
                Add Product
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <Input
                    name="title"
                    value={formData.title}
                    handleChange={handleChange}
                    label="Product Title"
                    placeholder="New Jeans"
                  />
                </div>

                <div className="sm:col-span-4">
                  <TextArea
                    name="description"
                    value={formData.description}
                    handleChange={handleChange}
                    label="Product Description"
                    additionalText="Write a few sentences about the product."
                  />
                </div>

                <div className="sm:col-span-4">
                  <Input
                    name="price"
                    value={formData.price}
                    handleChange={handleChange}
                    label="Price"
                    placeholder="1.00"
                  />
                </div>

                <div className="sm:col-span-4">
                  <Select
                    name="category"
                    label="Category"
                    options={[
                      { value: "men's clothing", label: "Men's clothing" },
                      { value: "jewelery", label: "Jewelery" },
                      { value: "electronics", label: "Electronics" },
                      { value: "women's clothing", label: "Women's clothing" },
                    ]}
                    value={formData.category}
                    handleChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link
              type="button"
              className="block text-sm font-semibold leading-6 text-gray-900 disabled:opacity-75 disabled:cursor-not-allowed"
              to="/product-list"
            >
              Cancel
            </Link>
            <Button type="submit" disabled={formSubmitting}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};