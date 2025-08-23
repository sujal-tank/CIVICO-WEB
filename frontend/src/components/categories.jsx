import "../styles/style.css";
import "../styles/categories.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const apiurl = import.meta.env.VITE_API_URL;

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${apiurl}/category/all-category`, {
        withCredentials: true,
      });
      if (response.data.success) {
        setCategories(response.data.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section id="cate" className="py-10 bg-gray-50" style={{marginTop:"190px"}}>
      <div className="container mx-auto px-4">
        <div className="title-section text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800"></h2>
        </div>
        
        {/* Grid for categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories &&
            categories.map((val, index) => (
              <Link
                to={`/category/showcategory/${val._id}`}
                key={index}
                className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
                style={{ textDecoration: "none" }}
              >
                <div className="flex justify-center">
                  <img
                    src={val.image}
                    alt={val.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-gray-800 font-medium">{val.name}</span>
                </div>
              </Link>
            ))}

          {/* All Categories Button */}
          <Link
            to="/category/view-all"
            className="bg-yellow-500 text-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ textDecoration: "none" }}
          >
            <div className="text-center">
              <span className="text-xl font-semibold">All Categories</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
