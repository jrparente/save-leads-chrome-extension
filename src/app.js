let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

function chromeTabs() {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      display(myLeads);
    }
  );
}

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  display(myLeads);
}

function display(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
    <input type="checkbox" id="item${i}" class="checkbox" />
    <label for="item${i}">
    <a target='_blank' href='${leads[i]}'>
    ${leads[i]}
    </a>
    </label>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

function addLead() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  display(myLeads);
}

function deleteAll() {
  localStorage.clear();
  myLeads = [];
  display(myLeads);
}

inputBtn.addEventListener("click", addLead);
deleteBtn.addEventListener("dblclick", deleteAll);
tabBtn.addEventListener("click", chromeTabs);
