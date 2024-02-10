// VARIABLES
const predictiveSales = $("#predictiveSales");
const tableHead = $("#table-head");
const iconList = [`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
  </svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
<path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11z"/>
</svg>`];
let closed = true;
const randomNames  = ['Nick', 'Amanda', 'Emily', 'Mark', 'Brooke', 'Kevin', 'Lucas'];
// database variable
let database = [];

// Random Phone Number
const getRandomPhoneNumber = () => {
    let phoneString = '('
    for(let i = 0; i< 11; i++){
        if(i === 3){
            phoneString += ') ';
        }else if(i === 7){
            phoneString += " - ";
        }else{
            phoneString += Math.floor(Math.random()* 10)
        }
    }
    return phoneString;
}
// Random Date
const getRandomDate = () => {
    return `01/${Math.floor(Math.random()*31)}/2024`
}
// Random Name
const getRandomName = () => {
    return randomNames[Math.floor(Math.random()* randomNames.length)]
}
// Random Status
const getRandomStatus = () => {
    let status = ['Active', 'Inactive'];
    return status[Math.floor(Math.random() * 2)];
}
// Random Icon
const getRandomIcon = () => {
    
    return iconList[Math.floor(Math.random() *3)];
}
// Specific Icon
const getSpecificIcon = (source) => {
    let svgSyntax;
    if(source === "Phone"){
        svgSyntax = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
      </svg>`
    }else if(source === "Organic"){
        svgSyntax =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg>`
    }else{
        svgSyntax = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
        <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11z"/>
        </svg>`
    }
    return svgSyntax;
}
// Get current data in mm/dd/yy
const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return mm + '/' + dd + '/' + yyyy;
}

// INIT Random Data, build DOM tree, update database variable
for (let i =0 ; i<10; i++){
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
    }
    const htmlSyntax = `<tr id = ${i}>
    <th scope="row">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
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
  </tr>`
    database.push(tempObject)
    tableHead.append(
        `${htmlSyntax}`
    )
}

// Rebuild Data Tree (don't affect database)
const rebuildDataTree = (dataSet) => {
    tableHead.empty();
    for(let i = 0; i<dataSet.length; i++){
        tableHead.append(`<tr id = ${dataSet[i].id}>
        <th scope="row">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
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
      </tr>`)
    }
}

//Filter Data and Rebuild DOM Tree (don't affect database)
const filterData = (filterString) => {
    console.log(database)
    let filteredArray;
    switch(filterString) {
        case "phone":
            filteredArray = database.filter((data) => {
                return data.icon.includes("telephone")
            })
            console.log(filteredArray);
            break;
        case "quote":
            filteredArray = database.filter((data) => {
                return data.icon.includes("bi-quote")
            })
            break;
        case "wrench":
            filteredArray = database.filter((data) => {
                return data.icon.includes("bi-wrench")
            })
            break;
        case "active": 
            filteredArray = database.filter((data) => {
                return data.status == "Active"
            })
            break;
        case "inactive": 
            filteredArray = database.filter((data) => {
                return data.status == "Inactive"
            })
            break;
        case "reset": 
            filteredArray = database
            break;
    }
    rebuildDataTree(filteredArray);
}

// Add New Contact
const addContact = (formData) => {
    database.push({
        name: formData.get('name'),
        number: formData.get('phoneNumber'),
        icon: getSpecificIcon(formData.get('leadSource')),
        date: getCurrentDate(),
        status: formData.get('status')
    })
  rebuildDataTree(database);
  $('#total-count').text(`Total Count: ${database.length}`)
}

// Delete Existing Contact from DOM tree and database variable
const deleteContacts = () => {
    const lengthOfCustomers = tableHead.children().length
    for (let i = 0; i<lengthOfCustomers; i++){
        const singleContactChecked = tableHead.children().eq(i).children().eq(0).children().eq(0).children().eq(0).is(":checked");
        if(singleContactChecked){
            database = database.filter((data) => {
                return data.id != tableHead.children().eq(i).attr('id')
            })
            tableHead.children().eq(i).remove();
            $('#total-count').text(`Total Count: ${database.length}`)
            i--;
        }
    }
}

// EVENT LISTENERS
// collapse side bar
$("#collapse-button").click(function () {
    if(closed){
        $("#main-div").addClass("main-div-partial").removeClass("main-div-full")
    }else{
        $("#main-div").removeClass("main-div-partial").addClass("main-div-full")
    }
    closed = !closed;
} )
// delete contacts button
$("#delete-contacts").click(() => deleteContacts());

// add contacts button
$('#add-contact-submit').submit(function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    addContact(formData)
});

// filter button handlers
$("#filter-phone").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    filterData("phone")
})
$("#filter-wrench").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    filterData("wrench")
})
$("#filter-quote").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    filterData("quote")
})
$("#filter-active").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    filterData("active")
})
$("#filter-inactive").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    filterData("inactive")
})
$("#filter-reset").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    filterData("reset")
})