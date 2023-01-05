const UserDataAPI = (getdata) => {

    fetch("http://localhost:4500/list")
      .then((response) => {
        return response.json();
      })
      .then((getdata) => {
        return getdata;
      });
};

export default UserDataAPI
