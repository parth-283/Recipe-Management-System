import React from "react";

function HeaderBottom() {
  return (
    <div>
      <div className="card text-center">
        <div style={{ backgroundColor: "#4ab1ff" }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card-body">
                  {/* <h5 className="card-title">Search Food Recipe</h5> */}
                  <div className="card-text">
                    <div className="input-group ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="btn btn-outline-success "
                        type="button"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col my-3 text-dark">
                
                <button className="btn btn-outline-secondary  mx-3" type="button">
                <b >🥣</b> Breakfast
                </button>
                <button className="btn btn-outline-secondary  mx-3" type="button">
                 <b>🍲</b> Lunch
                </button>
                <button className="btn btn-outline-secondary  mx-3" type="button">
                <b>🍽️</b> Dinner
                </button>
                <button className="btn btn-outline-secondary mx-3  " type="button">
                🍨Dessert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
