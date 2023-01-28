import React from "react";

export const LogOut = () => {
  function changeRoutes(e) {
    e.preventDefault();

    // axios
    //   .get("http://192.168.26.235:5000/user/logout")
    //   .then((res) => {
    //     console.log(res, "response");
    //   })
    //   .catch((err) => {
    //     console.log(err, "err");
    //   });
    (async () => {
      const rawResponse = await fetch(
        "http://192.168.26.235:5000/user/logout",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(rawResponse);
    })();
  }
  return (
    <div>
      <h1>User</h1>
      <button onClick={changeRoutes}>LOG OUT</button>
    </div>
  );
};
