      const registerAPI = async (regdata) => {
          let requestOptions = {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(regdata),
          };
          let resultdata = await fetch(
            `http://localhost:4500/add?UID=${regdata.UID}&FName=${regdata.firstName}&LName=${regdata.lastName}&Gender=${regdata.gender}&State=${regdata.state}&City=${regdata.city}&Email=${regdata.email}&Mobile=${regdata.mobile}&Password=${regdata.password}&Status=false&likes=false`,
            requestOptions
          );
          let result = await resultdata.json();
          console.log("API result", result)

      }

      export default registerAPI