// VARIABLES
const predictiveSales = $("#predictiveSales");
const tableHead = $("#table-head");
const iconList = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
  </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
<path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11z"/>
</svg>`,
];
const addOnDropDown = `<div class="d-flex">
<div class="dropdown me-1">
  <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg></button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
  </svg> Send Survey</a></li>
    <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg> Send Review Request</a></li>
    <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
  </svg> Send Message</a></li>
    <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
  </svg> Create Appointment</a></li>
    <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
  </svg> Create Follow Up</a></li>
    <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-fill" viewBox="0 0 16 16">
    <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354"/>
  </svg> Add Note</a></li>
  </ul>
</div>
</div>`;
let closed = true;
const randomNames = [
  "Nick",
  "Amanda",
  "Emily",
  "Mark",
  "Brooke",
  "Kevin",
  "Lucas",
];
// database variable
let database = [];

// Random Phone Number
const getRandomPhoneNumber = () => {
  let phoneString = "(";
  for (let i = 0; i < 11; i++) {
    if (i === 3) {
      phoneString += ") ";
    } else if (i === 7) {
      phoneString += " - ";
    } else {
      phoneString += Math.floor(Math.random() * 10);
    }
  }
  return phoneString;
};

// Random Date
const getRandomDate = () => {
  return `01/${Math.floor(Math.random() * 31)}/2024`;
};

// Random Name
const getRandomName = () => {
  return randomNames[Math.floor(Math.random() * randomNames.length)];
};

// Random Status
const getRandomStatus = () => {
  let status = ["Active", "Inactive"];
  return status[Math.floor(Math.random() * 2)];
};

// Random Icon
const getRandomIcon = () => {
  return iconList[Math.floor(Math.random() * 3)];
};

// Specific Icon
const getSpecificIcon = (source) => {
  let svgSyntax;
  if (source === "Phone") {
    svgSyntax = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
      </svg>`;
  } else if (source === "Organic") {
    svgSyntax = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg>`;
  } else {
    svgSyntax = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
        <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11z"/>
        </svg>`;
  }
  return svgSyntax;
};

// Get current data in mm/dd/yy
const getCurrentDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return mm + "/" + dd + "/" + yyyy;
};

// Rebuild Data Tree (don't affect database)
const rebuildDataTree = (dataSet) => {
  tableHead.empty();
  for (let i = 0; i < dataSet.length; i++) {
    tableHead.append(`<tr id = ${dataSet[i].id}>
        <th scope="row">
            <div class="form-check">
                <input class="form-check-input contact-checks" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                </label>
              </div>
        </th>
        <td>${dataSet[i].icon}</td>
        <td>${dataSet[i].date}</td>
        <td>${dataSet[i].name}</td>
        <td>${dataSet[i].number}</td>
        <td>Inquiry</td>
        <td>${dataSet[i].status}</td>
        <td>${addOnDropDown}</td>
      </tr>`);
  }
  $("#value-button").text(`${dataSet.length}/${database.length}`);
};

//Filter Data and Rebuild DOM Tree (don't affect database)
const filterData = (filterString) => {
  let filteredArray;
  switch (filterString) {
    case "phone":
      filteredArray = database.filter((data) => {
        return data.icon.includes("telephone");
      });
      console.log(filteredArray);
      break;
    case "quote":
      filteredArray = database.filter((data) => {
        return data.icon.includes("bi-quote");
      });
      break;
    case "wrench":
      filteredArray = database.filter((data) => {
        return data.icon.includes("bi-wrench");
      });
      break;
    case "active":
      filteredArray = database.filter((data) => {
        return data.status == "Active";
      });
      break;
    case "inactive":
      filteredArray = database.filter((data) => {
        return data.status == "Inactive";
      });
      break;
    case "reset":
      filteredArray = database;
      break;
  }
  rebuildDataTree(filteredArray);
  
};

// Add New Contact
const addContact = (formData) => {
  database.push({
    name: formData.get("name"),
    number: formData.get("phoneNumber"),
    icon: getSpecificIcon(formData.get("leadSource")),
    date: getCurrentDate(),
    status: formData.get("status"),
  });
  rebuildDataTree(database);
  $("#total-count").text(`Total Count: ${database.length}`);
  $("#value-button").text(`${database.length}/${database.length}`);
};

// Delete Existing Contact from DOM tree and database variable
const deleteContacts = () => {
  const lengthOfCustomers = tableHead.children().length;
  for (let i = 0; i < lengthOfCustomers; i++) {
    const singleContactChecked = tableHead
      .children()
      .eq(i)
      .children()
      .eq(0)
      .children()
      .eq(0)
      .children()
      .eq(0)
      .is(":checked");
    if (singleContactChecked) {
      database = database.filter((data) => {
        return data.id != tableHead.children().eq(i).attr("id");
      });
      tableHead.children().eq(i).remove();
      $("#total-count").text(`Total Count: ${database.length}`);
      $("#value-button").text(`${database.length}/${database.length}`);
      i--;
    }
  }
};

// EVENT LISTENERS
// collapse side bar
$("#collapse-button").click(function () {
  if (closed) {
    $("#main-div").addClass("main-div-partial").removeClass("main-div-full");
  } else {
    $("#main-div").removeClass("main-div-partial").addClass("main-div-full");
  }
  closed = !closed;
});
// delete contacts button
$("#delete-contacts").click(() => deleteContacts());

// add contacts button
$("#add-contact-submit").submit(function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  addContact(formData);
});

// filter button handlers
$("#filter-phone").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $("#filter-button").dropdown("toggle");
  filterData("phone");
});
$("#filter-wrench").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $("#filter-button").dropdown("toggle");
  filterData("wrench");
});
$("#filter-quote").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $("#filter-button").dropdown("toggle");
  filterData("quote");
});
$("#filter-active").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $("#filter-button").dropdown("toggle");
  filterData("active");
});
$("#filter-inactive").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $("#filter-button").dropdown("toggle");
  filterData("inactive");
});
$("#filter-reset").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $("#filter-button").dropdown("toggle");
  filterData("reset");
});

// ON INIT
// INIT Random Data, build DOM tree, update database variable
for (let i = 0; i < 10; i++) {
  const randomDate = getRandomDate();
  const randomIcon = getRandomIcon();
  const randomName = getRandomName();
  const randomPhoneNumber = getRandomPhoneNumber();
  const randomStatus = getRandomStatus();
  const tempObject = {
    id: i,
    icon: randomIcon,
    date: randomDate,
    name: randomName,
    number: randomPhoneNumber,
    status: randomStatus,
  };
  const htmlSyntax = `<tr id = ${i}>
    <th scope="row">
        <div class="form-check">
            <input class="form-check-input contact-checks" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
            </label>
          </div>
    </th>
    <td>${randomIcon}</td>
    <td>${randomDate}</td>
    <td>${randomName}</td>
    <td>${randomPhoneNumber}</td>
    <td>Inquiry</td>
    <td>${randomStatus}</td>
    <td>${addOnDropDown}</td>
  </tr>`;
  database.push(tempObject);
  tableHead.append(`${htmlSyntax}`);
}
