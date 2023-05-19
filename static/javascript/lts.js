// Table B variables
let complianceMethodDropdown = document.getElementById("compliance_Method");

// Table F variables
const tableF = document.getElementById("tableF");
const tableFDoesNotApply = document.querySelector(".tableFDoesNotApply");
const tableFApplies = document.querySelectorAll(".tableFApplies");

// Table G variables
const tableG = document.getElementById("tableG");
tableGDoesNotApply = document.querySelector(".tableGDoesNotApply");
const tableGApplies = document.querySelectorAll(".tableGApplies");

// Table H variables
const tableH = document.getElementById("tableH");
const tableHDoesNotApply = document.querySelector(".tableHDoesNotApply");
const tableHApplies = document.querySelectorAll(".tableHApplies");

//Functions

// Change Table based on B05 Compliance Method Dropdown
complianceMethodDropdown.addEventListener("change", function () {
  let complianceMethodSelected = complianceMethodDropdown.value;

  // Trigger Table F
  if (complianceMethodSelected === "maxAllowedLP") {
    for (const element of tableFApplies) {
      element.style.display = "grid";
      element.hidden = false;
    }
    tableFDoesNotApply.hidden = true;
    tableF.style.gridTemplateRows = "repeat(14, 6vh)";
  } else {
    for (const element of tableFApplies) {
      element.hidden = true;
    }
    tableFDoesNotApply.hidden = false;
    tableF.style.gridTemplateRows = "repeat(2, 6vh)";
  }

  // Trigger Table G
  if (complianceMethodSelected === "alternateLightSources") {
    for (const element of tableGApplies) {
      element.style.display = "grid";
      element.hidden = false;
    }
    tableGDoesNotApply.hidden = true;
    tableG.style.gridTemplateRows = "repeat(9, 6vh)";
  } else {
    for (const element of tableGApplies) {
      element.hidden = true;
    }
    tableGDoesNotApply.hidden = false;
    tableG.style.gridTemplateRows = "repeat(2, 6vh)";
  }

  // Trigger Table H
  if (complianceMethodSelected === "energyVerifiedLabel") {
    for (const element of tableHApplies) {
      element.style.display = "grid";
      element.hidden = false;
    }
    tableH.style.gridTemplateRows = "repeat(11, 6vh)";
    tableHDoesNotApply.hidden = true;
  } else {
    for (const element of tableHApplies) {
      element.hidden = true;
    }
    tableHDoesNotApply.hidden = false;
    tableH.style.gridTemplateRows = "repeat(2, 6vh)";
  }
});
