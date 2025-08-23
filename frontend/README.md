{/* <div className="col-12 p-3 col-md-3">
            <h2>Categories</h2>
            <div className="catshow">
              <ul className="m-0 mt-5 p-0">
                {categories &&
                  categories.map((category, index) => {
                    return (
                      <Link
                        to={`/category/showcategory/${category._id}`}
                        key={index}
                      >
                        <li className="cate-box p-3 d-flex">
                          <img
                            src={`${category.image}?t=${new Date().getTime()}`}
                            alt="category"
                            className="cateimg"
                          />
                          <span className="green-text fs-16 ps-5">
                            {category.name}
                          </span>
                        </li>
                      </Link>
                    );
                  })}
              </ul>
            </div>
          </div> */}






















           <div className="row mt-4">
              {products &&
                products.map((val, i) => {
                  return (
                    <div className="col-6 mt-4 col-md-3 col-lg-3" key={++i}>
                      <Link to={`/subcategorypeoduct/${val._id}`}>
                        <div className="product-box">
                          <div className="product-img">
                            <img
                              src={`${val.image}?t=${new Date().getTime()}`}
                              alt=""
                            />
                          </div>
                          <div className="product-name mt-2 d-flex justify-content-center mb-2">
                            <h5 className="main-text">{val.name}</h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>