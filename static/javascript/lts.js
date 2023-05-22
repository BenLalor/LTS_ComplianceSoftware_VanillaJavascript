// Table A Variables
let healthCareCheckbox = document.getElementById("healthcareCheckbox");

// Table B Variables
let complianceMethodDropdown = document.getElementById("compliance_Method");
let b01_Name = document.getElementById("b01_Name");
let b02_Description = document.getElementById("b02_Description");

// Table F Variables
const tableF = document.getElementById("tableF");
const tableFCurrentlyApplies = false;
const tableFDoesNotApplyAttribute = document.querySelector(
  ".tableFDoesNotApplyAttribute"
);
const tableFAttributes = document.querySelectorAll(".tableFAttributes");
const tableFOptionalRowAttributes =
  document.querySelectorAll(".tableFOptionalRow");
const f01_Name = document.getElementById("f01_Name");
const f02_Description = document.getElementById("f02_Description");
const f03_Method = document.getElementById("f03_Method");
const f04_Value = document.getElementById("f04_Value");
const f05_Value = document.getElementById("f05_Value");
const f06_Value = document.getElementById("f06_Value");
const f07_Value = document.getElementById("f07_Value");
const F08a_MandatoryControl = document.getElementById("F08a");
const F08b_MandatoryControl = document.getElementById("F08b");
const F08c_MandatoryControl = document.getElementById("F08c");
const f12_Value = document.getElementById("f12_Value");
const f14_Value = document.getElementById("f14_Value");

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
    h03b_MandatoryControl.diabled = false;
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

  // Calculate F02 Value Based on B01 Value
  b01_Name.addEventListener("change", () => {
    F01ValueCalculation();
  });

  // Calcuate F02 Value Based on B02 Value
  b02_Description.addEventListener("change", () => {
    F02ValueCalcuation();
  });

  // Calculate F05 Value
  f03_Method.addEventListener("change", () => {
    f05ValueCalculation();
    f07_ValueCalculation();
  });

  // Calculate F06 Value
  f04_Value.addEventListener("change", () => {
    f06ValueCalculation();
  });

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

// Functions
const f05ValueCalculation = () => {
  let f03_Method_Value = f03_Method.value;
  if (f03_Method_Value === "internally") {
    f05_Value.textContent = 12;
  } else if (f03_Method_Value === "externally") {
    f05_Value.textContent = 2.3;
  }
};

const f06ValueCalculation = () => {
  f06_Value.textContent = f04_Value.value * f05_Value.textContent;
  console.log(f06_Value.textContent);
};

const F02ValueCalcuation = () => {
  const b02_Description_Input = b02_Description.value;
  f02_Description.textContent = b02_Description_Input;
};

const F01ValueCalculation = () => {
  const b01_Name_Input = b01_Name.value;
  f01_Name.textContent = b01_Name_Input;
};

const f07_ValueCalculation = () => {
  let f03_Method_Value = f03_Method.value;
  if (f03_Method_Value === "externally") {
    f07_Value.value = f12_Value.value * f14_Value.value;
    f07_Value.disabled = true;
    for (let element of tableFOptionalRowAttributes) {
      element.hidden = false;
    }
    tableF.style.gridTemplateRows = "repeat(14, 6vh)";
  } else {
    f07_Value.value = "";
    f07_Value.disabled = false;
    for (let element of tableFOptionalRowAttributes) {
      element.hidden = true;
    }
    tableF.style.gridTemplateRows = "repeat(11, 6vh)";
  }
};
