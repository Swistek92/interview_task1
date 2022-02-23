import { users } from "./data-mock";

// TO DO:
// data source: file data-mock.js
// - display list of users in following pattern "1. lastName, firstName"
// - if firstName is not present, display only lastName so "1. lastName"
// - list should be filtered with input #filter-input
// - filter should check if lastName of user starts with query from input
// - filtering should NOT be case sensitive

export default function List() {
  users
    .then((resolve) => {
      let loading = false;
      if (loading) {
        return (resolve = []);
      }
      if (resolve) {
        loading = true;
      }
      console.log(resolve);
      let isLoading = false;
      if (isLoading) {
        return null;
      }
      isLoading = true;
      console.log(isLoading);
      const list = document.getElementById("names");
      console.log(Object.keys(list));
      const filterInput = document.getElementById("filter-input");

      filterInput.addEventListener("keyup", function () {
        setTimeout(function () {
          filerNames();
        }, 1000);
      });

      function filerNames() {
        const filterValue = document
          .getElementById("filter-input")
          .value.toUpperCase();

        let ul = document.getElementById("names");

        let li = ul.querySelectorAll("li");
        setTimeout(() => {}, 2000);
        for (let i = 0; i < li.length; i++) {
          let a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }

      resolve.map((i) => {
        if (i.firstName === null) {
          return (list.innerHTML += `<li> (id:${i.id})   <a class="lastName" "> ${i.lastName}</a></li> `);
        } else
          return (list.innerHTML += `
       <li>(id:${i.id})  ${i.firstName} <a class="lastName"> ${i.lastName} </a> </li>
       
     `);
      });
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      // console.log("done");
      // isLoading = false;
      // console.log(isLoading);
    });

  return (
    <>
      <input type="text" id="filter-input" placeholder="Filter..." />
      <ul id="names"></ul>
    </>
  );
}
