import React from 'react'

function UserRecipe() {


  const [users, setUsers] = React.useState([]);

  const fetchData = () => {
    fetch("http://localhost:4500/recipe/list")
      .then((response) => {
        return response.json();
      })
      .then((getdata) => {
        setUsers(getdata);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);
console.log("users",users);




  return (
    <div>
      {users.map((users) => (
    <div className="card my-3 container "  style={{ maxWidth: "800px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={users.Image} className="img-fluid rounded mt-3" alt={users.Name} />
          {console.log(users.Image)}
          <h4>ingredient</h4>
          <ul className="scroll card-text" style={{textAlign:"start"}}>
           {/* { users.ingredients.map((ingredient) => (
              <li>
                <label>{ingredient}</label>
              </li>
            ))} */}
          </ul>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Name:{users.Name}</h5>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">source</th>
                  <th scope="col">mealType</th>
                  <th scope="col">dishType</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                </tr>
                <tr>
                  <td> </td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th scope="col">cautions</th>
                  <th scope="col">cuisineType</th>
                  <th scope="col">dietLabels</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                </tr>
                <tr>
                  <td> </td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th scope="col">totalTime</th>
                  <th scope="col">totalWeight</th>
                  <th scope="col">calories</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                </tr>
              </tbody>
            </table>

            {/* <div className="col-mb-8">
              <div style={{ width: "200px" }}>
                <h5>healthLabels</h5>
                <ol
                  className="showscroll card-text "
                  style={{ height: "277px",textAlign:"start" }}
                >
                  {healthLabels.map((healthLabel) => (
                    <li>
                      <label>{healthLabel}</label>
                    </li>
                  ))}
                </ol>
              </div>
            </div> */}

            <p className="card-text">
              <small className="text-muted"></small>
            </p>
            {/* <button onClick={handleClick} className="btn btn-outline-info">
              More Info
            </button> */}
          </div>
        </div>
      </div>
    </div>
    ))}
  </div>
  )
}

export default UserRecipe