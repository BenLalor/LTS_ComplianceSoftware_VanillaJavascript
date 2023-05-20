// Table A Variables
let healthCareCheckbox = document.getElementById("healthcareCheckbox");

// Table B Variables
let complianceMethodDropdown = document.getElementById("compliance_Method");

// Table F Variables
const tableF = document.getElementById("tableF");
const tableFCurrentlyApplies = false;
const tableFDoesNotApplyAttribute = document.querySelector(
  ".tableFDoesNotApplyAttribute"
);
const tableFAttributes = document.querySelectorAll(".tableFAttributes");
const F08a_MandatoryControl = document.getElementById("F08a");
const F08b_MandatoryControl = document.getElementById("F08b");
const F08c_MandatoryControl = document.getElementById("F08c");

// Table G Variables
const tableG = document.getElementById("tableG");
tableGDoesNotApply = document.querySelector(".tableGDoesNotApply");
const tableGApplies = document.querySelectorAll(".tableGApplies");
const g04a_MandatoryControl = document.getElementById("g04a");
const g04b_MandatoryControl = document.getElementById("g04b");
const g04c_MandatoryControl = document.getElementById("g04c");

// Table H Variables
const tableH = document.getElementById("tableH");
const tableHDoesNotApply = document.querySelector(".tableHDoesNotApply");
const tableHApplies = document.querySelectorAll(".tableHApplies");
const h03a_MandatoryControl = document.getElementById("h03a");
const h03b_MandatoryControl = document.getElementById("h03b");
const h03c_MandatoryControl = document.getElementById("h03c");

//Functions
// Healthcare Checkbox Status
healthCareCheckbox.addEventListener("change", () => {
  if (healthCareCheckbox.checked) {
    F08a_MandatoryControl.disabled = true;
    F08b_MandatoryControl.disabled = true;
    F08c_MandatoryControl.disabled = true;
    g04a_MandatoryControl.disabled = true;
    g04b_MandatoryControl.disabled = true;
    g04c_MandatoryControl.disabled = true;
    h03a_MandatoryControl.disabled = true;
    h03b_MandatoryControl.disabled = true;
    h03c_MandatoryControl.disabled = true;
  } else {
    F08a_MandatoryControl.disabled = false;
    F08b_MandatoryControl.disabled = false;
    F08c_MandatoryControl.disabled = false;
    g04a_MandatoryControl.disabled = false;
    g04b_MandatoryControl.disabled = false;
    g04c_MandatoryControl.disabled = false;
    h03a_MandatoryControl.disabled = false;
    h03b_MandatoryControl.disabled = false;
    h03c_MandatoryControl.disabled = false;
  }
});

// Change Table based on B05 Compliance Method Dropdown
complianceMethodDropdown.addEventListener("change", function () {
  // Trigger Table F
  let complianceMethodSelected = complianceMethodDropdown.value;
  if (complianceMethodSelected === "maxAllowedLP") {
    for (const element of tableFAttributes) {
      element.style.display = "grid";
      element.hidden = false;
    }
    tableFDoesNotApplyAttribute.hidden = true;
    tableF.style.gridTemplateRows = "repeat(14, 6vh)";
  } else {
    for (const element of tableFAttributes) {
      element.hidden = true;
    }
    tableFDoesNotApplyAttribute.hidden = false;
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
