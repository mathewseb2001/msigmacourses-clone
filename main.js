const apiURL = "https://api.msigma.in/btech/v2/branches/";

fetch(apiURL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch data from the API");
    }
  })
  .then((data) => {
    if (data.status === "success") {
      const branches = data.branches;
      branches.slice(0, 10).forEach((branch) => {
        var container = document.querySelector(`.container`);
        const branchId = branch.id;
        const branchName = branch.name;
        const branchShort = branch.short;
        var divItem = document.createElement("div");
        var bN = document.createElement("bN");
        var fees = document.createElement("fees");
        var p = document.createElement("button"); //create the paragraph tag
        bN.innerHTML = branchName;
        p.innerHTML = '<a href="#">Apply Now</a>';
        fees.innerHTML = "Fee starting at ₹799 per subject";
        divItem.className = "item";
        divItem.textContent = branchShort;
        divItem.appendChild(bN);
        divItem.appendChild(p);
        divItem.appendChild(fees);
        container.appendChild(divItem);
      });
    } else {
      console.error("API returned an error status.");
    }
  })
  .catch((error) => {
    console.error(error.message);
  });
