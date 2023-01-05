import React from "react";
import { useEffect } from "react";

function Forgot() {
  const [user, setUser] = React.useState([]);
  const [forgot, setForgot] = React.useState("");
  const [forgotEmail, setForgotEmail] = React.useState("");
  const [updatdata, setUpdatedata] = React.useState([]);
  const [otp, setOtp] = React.useState(0);

  const UserData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:4500/list", requestOptions)
      .then((response) => response.json())
      .then((result) => setUser(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    UserData();
  }, []);

  const HendleForgotEmail = (e) => {
    setForgotEmail(e.target.value);
  };

  const [submit, setSubmit] = React.useState(false);
  const HandleOTP = () => {
    if (otp == forgot) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };
  console.log("yesss", submit);

  const HendleForgot = (e) => {
    setForgot(e.target.value);
  };

  const HendleforgetPassword = () => {
    setOtp(Math.random().toString().substr(5, 6));
    setUpdatedata(user.filter((item) => item.Email == forgotEmail));
  };

  let vali = false;
  if (forgotEmail !== "") {
    if (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(forgotEmail)) {
      vali = true;
    }
  } else {
    vali = true;
  }

  let checkEmail = false;
  if (updatdata.length > 0) {
    checkEmail = true;
  } else {
    checkEmail = false;
  }

  return (
    <div>
      <div
        className="container m-2"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <div>
            <h1>forgot Password</h1>
          </div>

          <div>
            {!checkEmail == true ? (
              <div>
                <input
                  type="email"
                  name="forgotEmail"
                  value={forgotEmail}
                  onChange={(e) => HendleForgotEmail(e)}
                />
                <button className="" onClick={HendleforgetPassword}>
                  Add EMail
                </button>
                <div>
                  <label style={{ color: "red" }}>
                    {!vali == true ? `Email is incorrect*` : ""}
                  </label>
                </div>
              </div>
            ) : (
              <div>
                {!submit == true ? (
                  <div>
                    <div className="my-2">
                      <input
                        type="number"
                        name="forgot"
                        value={forgot}
                        onChange={(e) => HendleForgot(e)}
                      />
                      <h3>{otp}</h3>
                      <button className="" onClick={HandleOTP}>
                        Submit
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                      {updatdata?.map((item)=>(
                          
                      <input
                        type="number"
                        name="FName"
                        value={item}
                        // onChange={(e) => HendleForgot(e)}
                      />
                      ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
