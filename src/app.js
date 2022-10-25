let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

function displayLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
    <a target='_blank' href='https://${myLeads[i]}'>
    ${myLeads[i]}
    </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

function addLead() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  displayLeads();
}

inputBtn.addEventListener("click", addLead);
