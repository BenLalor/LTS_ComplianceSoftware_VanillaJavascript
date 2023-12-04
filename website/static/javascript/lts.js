// Project Variables
var project_name = document.getElementById("projectName");
var project_address = document.getElementById("projectAddress");
var date_prepared = document.getElementById("datePrepared");

// Table A Variables
var a01_project_location = document.getElementById("a01_project_location");
var climate_zone = document.getElementById("climateZone");
var healthCareCheckbox = document.getElementById("healthcareCheckbox");
var multifamilyCheckbox = document.getElementById("multifamilyCheckbox");

// Table B Variables
var b01_Name = document.getElementById("b01_Name");
var b02_Description = document.getElementById("b02_Description");
var b03_status = document.getElementById("b03_status_sign");
var b04_Value = document.getElementById("b04_Value");
var complianceMethodDropdown = document.getElementById("compliance_Method");


// Table C Variables
var c01_Name = document.getElementById("c01_Name");
var c02_Description = document.getElementById("c02_Description");
var c03_Value = document.getElementById("c03_Value");
c03_Value.value = "NA";
var c04_Value = document.getElementById("c04_Value");
c04_Value.value = "NA";
var c05_Value = document.getElementById("c05_Value");
c05_Value.value = "NA";
var c06_Value = document.getElementById("c06_Value");
c06_Value.value = "NA";
var c07_Value = document.getElementById("c07_Value");
var c07_ControlsValue = document.getElementById("c07_ControlsValue");

// Table F Variables
var tableF = document.getElementById("tableF");
var tableFCurrentlyApplies = false;
var tableFDoesNotApplyAttribute = document.querySelector(
  ".tableFDoesNotApplyAttribute"
);
var tableFAttributes = document.querySelectorAll(".tableFAttributes");
var tableFOptionalRowAttributes = document.querySelectorAll(".tableFOptionalRow");
var tableF_StarOptions = document.querySelectorAll(".tableF_StarOptions");
var reset_TableF = document.getElementById("reset_TableF");
var f01_Name = document.getElementById("f01_Name");
var f02_Description = document.getElementById("f02_Description");
var f03_Method = document.getElementById("f03_Method");
var f04_Value = document.getElementById("f04_Value");
var f05_Value = document.getElementById("f05_Value");
var f06_Value = document.getElementById("f06_Value");
var f07_Value = document.getElementById("f07_Value");
var F08a_MandatoryControl = document.getElementById("F08a");
var F08b_MandatoryControl = document.getElementById("F08b");
var F08c_MandatoryControl = document.getElementById("F08c");
var f10_Value = document.getElementById("f10_Value");
var f11_Value = document.getElementById("f11_Value");
var f12_Value = document.getElementById("f12_Value");
var f13_Value = document.getElementById("f13_Value");
var f14_Value = document.getElementById("f14_Value");
var FExplanationName = document.getElementById("FExplanationName");

// Table G Variables
var tableG = document.getElementById("tableG");
var tableGCurrentlyApplies = false;
var tableGDoesNotApply = document.querySelector(".tableGDoesNotApply");
var tableGApplies = document.querySelectorAll(".tableGApplies");
var tableG_StarOptions = document.querySelectorAll(".tableG_StarOptions");
var reset_tableG = document.getElementById("reset_tableG");
var g01_Name = document.getElementById("g01_Name");
var g02_Description = document.getElementById("g02_Description");
var g03_Method = document.getElementById("g03_Method");
var g04a_MandatoryControl = document.getElementById("g04a");
var g04b_MandatoryControl = document.getElementById("g04b");
var g04c_MandatoryControl = document.getElementById("g04c");
var GExplanationName = document.getElementById("GExplanationName");

// Table H Variables
var tableH = document.getElementById("tableH");
var tableHCurrentlyApplies = false;
var tableHDoesNotApply = document.querySelector(".tableHDoesNotApply");
var tableHApplies = document.querySelectorAll(".tableHApplies");
var tableH_StarOptions = document.querySelectorAll(".tableH_StarOptions");
var reset_tableH = document.getElementById("reset_tableH");
var h01_Name = document.getElementById("h01_Name");
var h02_Description = document.getElementById("h02_Description");
var h03a_MandatoryControl = document.getElementById("h03a");
var h03b_MandatoryControl = document.getElementById("h03b");
var h03c_MandatoryControl = document.getElementById("h03c");
var HExplanationName = document.getElementById("HExplanationName");

// Table I Variables
var yes_NRCILTS = document.getElementById("yes_NRCILTS");
var no_NRCILTS = document.getElementById("no_NRCILTS");

// Functions

// Table A Functions

// Hide Table F, H and G Control Dropdowns if Table A Health Care Checkbox is Checked
var healthCareCheckboxChecked = () => {
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
    F08aValueCalculation();
    F08bValueCalculation();
    F08cValueCalculation();
  }
};

// Table C Functions

const c03_ValueCalculation = () => {
  if (tableFCurrentlyApplies) {
    c03_Value.value = "";
    let f06_Value_Input = f06_Value.value;
    c03_Value.value = f06_Value_Input;
  }
  else{
    c03_Value.value = "NA";
  c07_ValueCalculation();
  }
};

// Auto-Complete C04 Value Based on F07 Value
const c04_ValueCalculation = () => {
  if(tableFCurrentlyApplies){
    const f07_Value_Input = f07_Value.value;
    c04_Value.value = f07_Value_Input;
  }
  else{
    c04_Value.value = "NA";
    c07_ValueCalculation();
  }
  
};

const c05_ValueCalculation = () => {
  // Probably need to add a condition for table G being triggered,
  // maybe with a boolean value to ensure it is currently triggered
  //and not just triggered and untriggered
  if (tableGCurrentlyApplies){
    if (g03_Method.value) {
      c05_Value.value = "Yes";
    } else {
      c05_Value.value = "No";
    }
  }
  else{
    c05_Value.value = "NA";
  }
  c07_ValueCalculation();
};

const c06_ValueCalculation = () => {
  if (tableHCurrentlyApplies) {
    c06_Value.value = "Yes";
  } else {
    c06_Value.value = "NA";
  } 
};

const c07_ValueCalculation = () => {
  if (
    !tableFCurrentlyApplies &&
    !tableGCurrentlyApplies &&
    !tableHCurrentlyApplies
  ) {
    c07_Value.value = "";
  } else if (tableFCurrentlyApplies && !tableFComplies()) {
    c07_Value.value = "Does Not Comply";
  } else if (tableGCurrentlyApplies && !tableGComplies()) {
    c07_Value.value = "Does Not Comply";
  } else {
    c07_Value.value = "Complies";
  }
};

const ControlsCompliance_Calculation = () => {
  const doesNotComply = "Does Not Comply";
  const complies = "Complies";
  const blank = "";
  const controlsStatus = {
    true: true,
    false: false,
    na: null,
  };

  let TableFControlsStatus = controlsStatus.na;
  let TableGControlsStatus = controlsStatus.na;
  let TableHControlsStatus = controlsStatus.na;

  if (tableFCurrentlyApplies) {
    if (
      !F08a_MandatoryControl.disabled &&
      (F08a_MandatoryControl.selectedIndex === 0 || F08a_MandatoryControl.selectedIndex === -1)
    ) {
      TableFControlsStatus = controlsStatus.false;
    } else if (
      !F08b_MandatoryControl.disabled &&
      (F08b_MandatoryControl.selectedIndex === 0 || F08b_MandatoryControl.selectedIndex === -1)
    ) {
      TableFControlsStatus = controlsStatus.false;
    } else if (
      !F08c_MandatoryControl.disabled &&
      (F08c_MandatoryControl.selectedIndex === 0 || F08c_MandatoryControl.selectedIndex === -1)
    ) {
      TableFControlsStatus = controlsStatus.false;
    } else {
      TableFControlsStatus = controlsStatus.true;
    }
  }
  if (tableGCurrentlyApplies) {
    if (
      !g04a_MandatoryControl.disabled &&
      g04a_MandatoryControl.selectedIndex === 0
    ) {
      TableGControlsStatus = controlsStatus.false;
    } else if (
      !g04b_MandatoryControl.disabled &&
      g04b_MandatoryControl.selectedIndex === 0
    ) {
      TableGControlsStatus = controlsStatus.false;
    } else if (
      !g04c_MandatoryControl.disabled &&
      g04c_MandatoryControl.selectedIndex === 0
    ) {
      TableGControlsStatus = controlsStatus.false;
    } else {
      TableGControlsStatus = controlsStatus.true;
    }
  }
  if (tableHCurrentlyApplies) {
    if (
      !h03a_MandatoryControl.disabled &&
      h03a_MandatoryControl.selectedIndex === 0
    ) {
      TableHControlsStatus = controlsStatus.false;
    } else if (
      !h03b_MandatoryControl.disabled &&
      h03b_MandatoryControl.selectedIndex === 0
    ) {
      TableHControlsStatus = controlsStatus.false;
    } else if (
      !h03c_MandatoryControl.disabled &&
      h03c_MandatoryControl.selectedIndex === 0
    ) {
      TableHControlsStatus = controlsStatus.false;
    } else {
      TableHControlsStatus = controlsStatus.true;
    }
  }
  if (
    // Change this to use new type of tracking
    TableFControlsStatus === controlsStatus.na &&
    TableGControlsStatus === controlsStatus.na &&
    TableHControlsStatus === controlsStatus.na
  ) {
    c07_ControlsValue.value = blank;
  } else if (
    TableFControlsStatus === controlsStatus.false ||
    TableGControlsStatus == controlsStatus.false ||
    TableHControlsStatus == controlsStatus.false
  ) {
    c07_ControlsValue.value = doesNotComply;
  } else {
    c07_ControlsValue.value = complies;
  }
};

const tableFComplies = () => {
  if (
    c03_Value.value != "" &&
    c04_Value.value != "" &&
    c03_Value.value >= +c04_Value.value
  ) {
    return true;
  } else return false;
};

const tableGComplies = () => {
  if (c05_Value.value === "No") {
    return false;
  } else return true;
};

// Table F Functions

// Render Table F Name
const F01ValueCalculation = () => {
  const b01_Name_Input = b01_Name.value;
  f01_Name.textContent = b01_Name_Input;
};

// Render Table F Description
const F02ValueCalcuation = () => {
  const b02_Description_Input = b02_Description.value;
  f02_Description.textContent = b02_Description_Input;
};

// Calculate and Render Table F Allowance Density
const f05ValueCalculation = () => {
  let f03_Method_Value = f03_Method.value;
  if (f03_Method_Value === "internally") {
    f05_Value.value = 12;
  } else if (f03_Method_Value === "externally") {
    f05_Value.value = 2.3;
  }
};

// Calculate and Render Table F Total Allowance
const f06ValueCalculation = () => {
  f06_Value.value = f04_Value.value * f05_Value.value;
  c03_ValueCalculation();
  console.log("c04 Called it");
  c04_ValueCalculation();
};

// Render & Hide Table F Optional Watt Per Luminaire Row
const TableF_ExternalExpandRow = () => {
  f07_Value.value = "";
  let f03_Method_Value = f03_Method.value;
  c04_ValueCalculation();
  if (f03_Method_Value === "externally") {
    f07_Value.readOnly = true;
    for (let element of tableFOptionalRowAttributes) {
      element.hidden = false;
    }
    if (tableF.style.gridTemplateRows === "repeat(11, 6vh)") {
      tableF.style.gridTemplateRows = "repeat(14, 6vh)";
    } else if (tableF.style.gridTemplateRows === "repeat(9, 6vh)") {
      tableF.style.gridTemplateRows = "repeat(12, 6vh)";
    }
  } else {
    f07_Value.readOnly = false;
    for (let element of tableFOptionalRowAttributes) {
      element.hidden = true;
    }
    if (tableF.style.gridTemplateRows === "repeat(14, 6vh)") {
      tableF.style.gridTemplateRows = "repeat(11, 6vh)";
    } else if (tableF.style.gridTemplateRows === "repeat(12, 6vh)") {
      tableF.style.gridTemplateRows = "repeat(9, 6vh)";
    }
  }
};

const f07_ValueCalculation = () => {
  let product = f12_Value.value * f14_Value.value;
  f07_Value.value = product;
};

// Determine Valid Table F08a Cotrol Options
const F08aValueCalculation = () => {
  let disabledOption = new Option("dropdown", "", true, true);
  disabledOption.disabled = true;
  if (b04_Value.value === "Indoor") {
    F08a_MandatoryControl.disabled = false;
    F08a_MandatoryControl.options.length = 0;
    F08a_MandatoryControl.add(disabledOption);
    F08a_MandatoryControl.add(new Option("Auto Timer", "autoTimer"));
    F08a_MandatoryControl.add(new Option("Astrn Timer", "astrnTimer"));
    F08a_MandatoryControl.add(new Option("Other*", "Other"));
  } else if (b04_Value.value === "Outdoor") {
    F08a_MandatoryControl.disabled = false;
    F08a_MandatoryControl.options.length = 0;
    F08a_MandatoryControl.add(disabledOption);
    F08a_MandatoryControl.add(
      new Option("Auto Time-Switch + Photocontrol", "autoTimerAndPhotocontrol")
    );
    F08a_MandatoryControl.add(new Option("Astrn Timer", "astrnTimer"));
    F08a_MandatoryControl.add(new Option("Other*", "Other"));
    F08a_MandatoryControl.add(new Option("NA: Tunnels", "naTunnels"));
    F08a_MandatoryControl.add(new Option("NA: Outdoor 24x7x356", "na247"));
  } else if (b04_Value.value === "Center") {
    F08a_MandatoryControl.options.length = 0;
    F08a_MandatoryControl.disabled = true;
  }
};

// Determine Valid Table F08b Control Options
const F08bValueCalculation = () => {
  let disabledOption = new Option("dropdown", "", true, true);
  disabledOption.disabled = true;
  if (b04_Value.value === "Indoor" || b04_Value.value === "Center") {
    F08b_MandatoryControl.options.length = 0;
    F08b_MandatoryControl.disabled = true;
  } else if (b04_Value.value === "Outdoor") {
    F08b_MandatoryControl.disabled = false;
    F08b_MandatoryControl.options.length = 0;
    F08b_MandatoryControl.add(disabledOption);
    F08b_MandatoryControl.add(
      new Option("Power Reduced 65%+", "powerReduced65")
    );
    F08b_MandatoryControl.add(new Option("NA: Tunnels", "naTunnels"));
    F08b_MandatoryControl.add(new Option("NA: Outdoor 24x7x356", "na247"));
  }
};

// Determine Valid Table F08c Control Options
const F08cValueCalculation = () => {
  let disabledOption = new Option("dropdown", "", true, true);
  disabledOption.disabled = true;
  if (b04_Value.value === "Indoor" || b04_Value.value === "Outdoor") {
    F08c_MandatoryControl.options.length = 0;
    F08c_MandatoryControl.disabled = true;
  } else if (b04_Value.value === "Center") {
    F08c_MandatoryControl.disabled = false;
    F08c_MandatoryControl.options.length = 0;
    F08c_MandatoryControl.add(disabledOption);
    F08c_MandatoryControl.add(
      new Option("Power Reduced 30%+", "powerReduced65")
    );
    F08c_MandatoryControl.add(
      new Option("Exempt By Health/LS Reg", "ExemptHeathLSReg")
    );
    F08c_MandatoryControl.add(new Option("NA: &lte15kW", "NA15kW"));
  }
};

// Render and Hide Table F Star Option Explanation Row
const tableF_StarOptions_Render = () => {
  if (F08a_MandatoryControl.value === "Other") {
    for (let element of tableF_StarOptions) {
      element.hidden = false;
    }
    const lightName = f01_Name.textContent;
    FExplanationName.textContent = lightName;
    if (tableF.style.gridTemplateRows === "repeat(12, 6vh)") {
      tableF.style.gridTemplateRows = "repeat(14, 6vh)";
    } else if (tableF.style.gridTemplateRows === "repeat(9, 6vh)") {
      tableF.style.gridTemplateRows = "repeat(11, 6vh)";
    }
  } else if (F08a_MandatoryControl.value !== "Other") {
    for (let element of tableF_StarOptions) {
      element.hidden = true;
    }
    if (tableF.style.gridTemplateRows === "repeat(14, 6vh)") {
      tableF.style.gridTemplateRows = "repeat(12, 6vh)";
    } else if (tableF.style.gridTemplateRows === "repeat(11, 6vh)") {
      tableF.style.gridTemplateRows = "repeat(9, 6vh)";
    }
  }
};

const resetTableF_Action = () => {
  const confirmDiaglog = window.confirm(
    "Are you sure? This will clear all data in Table F."
  );
  if (confirmDiaglog) {
    // Do something
    const clearTheseElements = [
      f03_Method,
      f04_Value,
      f05_Value,
      f06_Value,
      f07_Value,
      F08a_MandatoryControl,
      F08b_MandatoryControl,
      F08c_MandatoryControl,
      f10_Value,
      f11_Value,
      f12_Value,
      f13_Value,
      f14_Value,
    ];
    for (let element of clearTheseElements) {
      if (element.tagName === "SELECT" || element.tagName === "INPUT") {
        element.value = "";
      } else {
        element.textContent = "";
      }
    }
  }
};

const UpdateStarExplanationName = () => {
  const lightName = b01_Name.value;
  FExplanationName.textContent = lightName;
  GExplanationName.textContent = lightName;
  HExplanationName.textContent = lightName;
};

// Table G Functions

// Render Table G Name
const G01ValueCalculation = () => {
  const b01_Name_Input = b01_Name.value;
  g01_Name.textContent = b01_Name_Input;
};

// Render Table G Description
const G02ValueCalculation = () => {
  const b02_Description_Input = b02_Description.value;
  g02_Description.textContent = b02_Description_Input;
};

// Determine Valid Table G04a Control Options
const G04aValueCalculation = () => {
  let disabledOption = new Option("dropdown", "", true, true);
  disabledOption.disabled = true;
  if (b04_Value.value === "Indoor") {
    g04a_MandatoryControl.disabled = false;
    g04a_MandatoryControl.options.length = 0;
    g04a_MandatoryControl.add(disabledOption);
    g04a_MandatoryControl.add(new Option("Auto Timer", "autoTimer"));
    g04a_MandatoryControl.add(new Option("Astrn Timer", "astrnTimer"));
    g04a_MandatoryControl.add(new Option("Other*", "Other"));
  } else if (b04_Value.value === "Outdoor") {
    g04a_MandatoryControl.disabled = false;
    g04a_MandatoryControl.options.length = 0;
    g04a_MandatoryControl.add(disabledOption);
    g04a_MandatoryControl.add(
      new Option("Auto Time-Switch + Photocontrol", "autoTimerAndPhotocontrol")
    );
    g04a_MandatoryControl.add(new Option("Astrn Timer", "astrnTimer"));
    g04a_MandatoryControl.add(new Option("Other*", "Other"));
    g04a_MandatoryControl.add(new Option("NA: Tunnels", "naTunnels"));
    g04a_MandatoryControl.add(new Option("NA: Outdoor 24x7x356", "na247"));
  } else if (b04_Value.value === "Center") {
    g04a_MandatoryControl.options.length = 0;
    g04a_MandatoryControl.disabled = true;
  }
  healthCareCheckboxChecked();
};

// Determine Valid Table G04b Control Options
const G04bValueCalculation = () => {
  let disabledOption = new Option("dropdown", "", true, true);
  disabledOption.disabled = true;
  if (b04_Value.value === "Indoor" || b04_Value.value === "Center") {
    g04b_MandatoryControl.options.length = 0;
    g04b_MandatoryControl.disabled = true;
  } else if (b04_Value.value === "Outdoor") {
    g04b_MandatoryControl.disabled = false;
    g04b_MandatoryControl.options.length = 0;
    g04b_MandatoryControl.add(disabledOption);
    g04b_MandatoryControl.add(
      new Option("Power Reduced 65%+", "powerReduced65")
    );
    g04b_MandatoryControl.add(new Option("NA: Tunnels", "naTunnels"));
    g04b_MandatoryControl.add(new Option("NA: Outdoor 24x7x356", "na247"));
  }
  healthCareCheckboxChecked();
};

// Determine Valid Table G04c Control Options
const G04cValueCalculation = () => {
  let disabledOption = new Option("dropdown", "", true, true);
  disabledOption.disabled = true;
  if (b04_Value.value === "Indoor" || b04_Value.value === "Outdoor") {
    g04c_MandatoryControl.options.length = 0;
    g04c_MandatoryControl.disabled = true;
  } else if (b04_Value.value === "Center") {
    g04c_MandatoryControl.disabled = false;
    g04c_MandatoryControl.options.length = 0;
    g04c_MandatoryControl.add(disabledOption);
    g04c_MandatoryControl.add(
      new Option("Power Reduced 30%+", "powerReduced65")
    );
    g04c_MandatoryControl.add(
      new Option("Exempt By Health/LS Reg", "ExemptHeathLSReg")
    );
    g04c_MandatoryControl.add(new Option("NA: &lte15kW", "NA15kW"));
  }
  healthCareCheckboxChecked();
};

// Render and Hide Table G Star Option Explanation Row
const tableG_StarOptions_Render = () => {
  if (g04a_MandatoryControl.value === "Other") {
    for (let element of tableG_StarOptions) {
      element.hidden = false;
    }
    const lightName = g01_Name.textContent;
    GExplanationName.textContent = lightName;
    if (tableG.style.gridTemplateRows === "repeat(9, 6vh)") {
      tableG.style.gridTemplateRows = "repeat(11, 6vh)";
    }
  } else if (g04a_MandatoryControl.value !== "Other") {
    for (let element of tableG_StarOptions) {
      element.hidden = true;
    }
    if (tableG.style.gridTemplateRows === "repeat(11, 6vh)") {
      tableG.style.gridTemplateRows = "repeat(9, 6vh)";
    }
  }
};

const resetTableG_Action = () => {
  const confirmDiaglog = window.confirm(
    "Are you sure? This will clear all data in Table F."
  );
  if (confirmDiaglog) {
    g03_Method.value = "";
    g04a_MandatoryControl.value = "";
    g04b_MandatoryControl.value = "";
    g04c_MandatoryControl.value = "";
  }
};

// Table H Functions

// Render Table H Name
const H01ValueCalculation = () => {
  const b01_Name_Input = b01_Name.value;
  h01_Name.textContent = b01_Name_Input;
};

// Render Table H Description
const H02ValueCalculation = () => {
  const b02_Description_Input = b02_Description.value;
  h02_Description.textContent = b02_Description_Input;
};

// Determine Valid Table H03a Control Options
const H03aValueCalculation = () => {
  let disabledOption = new Option("dropdown", "", true, true);
  disabledOption.disabled = true;
  if (b04_Value.value === "Indoor") {
    h03a_MandatoryControl.disabled = false;
    h03a_MandatoryControl.options.length = 0;
    h03a_MandatoryControl.add(disabledOption);
    h03a_MandatoryControl.add(new Option("Auto Timer", "autoTimer"));
    h03a_MandatoryControl.add(new Option("Astrn Timer", "astrnTimer"));
    h03a_MandatoryControl.add(new Option("Other*", "Other"));
  } else if (b04_Value.value === "Outdoor") {
    h03a_MandatoryControl.disabled = false;
    h03a_MandatoryControl.options.length = 0;
    h03a_MandatoryControl.add(disabledOption);
    h03a_MandatoryControl.add(
      new Option("Auto Time-Switch + Photocontrol", "autoTimerAndPhotocontrol")
    );
    h03a_MandatoryControl.add(new Option("Astrn Timer", "astrnTimer"));
    h03a_MandatoryControl.add(new Option("Other*", "Other"));
    h03a_MandatoryControl.add(new Option("NA: Tunnels", "naTunnels"));
    h03a_MandatoryControl.add(new Option("NA: Outdoor 24x7x356", "na247"));
  } else if (b04_Value.value === "Center") {
    h03a_MandatoryControl.options.length = 0;
    h03a_MandatoryControl.disabled = true;
  }
  healthCareCheckboxChecked();
};

// Determine Valid Table H03b Control Options
const H03bValueCalculation = () => {
  let disabledOption = new Option("dropdown", "", true, true);
  disabledOption.disabled = true;
  if (b04_Value.value === "Indoor" || b04_Value.value === "Center") {
    h03b_MandatoryControl.options.length = 0;
    h03b_MandatoryControl.disabled = true;
  } else if (b04_Value.value === "Outdoor") {
    h03b_MandatoryControl.disabled = false;
    h03b_MandatoryControl.options.length = 0;
    h03b_MandatoryControl.add(disabledOption);
    h03b_MandatoryControl.add(
      new Option("Power Reduced 65%+", "powerReduced65")
    );
    h03b_MandatoryControl.add(new Option("NA: Tunnels", "naTunnels"));
    h03b_MandatoryControl.add(new Option("NA: Outdoor 24x7x356", "na247"));
  }
  healthCareCheckboxChecked();
};

// Determine Valid Table H03c Control Options
const H03cValueCalculation = () => {
  let disabledOption = new Option("dropdown", "", true, true);
  disabledOption.disabled = true;
  if (b04_Value.value === "Indoor" || b04_Value.value === "Outdoor") {
    h03c_MandatoryControl.options.length = 0;
    h03c_MandatoryControl.disabled = true;
  } else if (b04_Value.value === "Center") {
    h03c_MandatoryControl.disabled = false;
    h03c_MandatoryControl.options.length = 0;
    h03c_MandatoryControl.add(disabledOption);
    h03c_MandatoryControl.add(
      new Option("Power Reduced 30%+", "powerReduced65")
    );
    h03c_MandatoryControl.add(
      new Option("Exempt By Health/LS Reg", "ExemptHeathLSReg")
    );
    h03c_MandatoryControl.add(new Option("NA: &lte15kW", "NA15kW"));
  }
  healthCareCheckboxChecked();
};

// Render and Hide Table H Star Option Explanation Row
const tableH_StarOptions_Render = () => {
  if (h03a_MandatoryControl.value === "Other") {
    for (let element of tableH_StarOptions) {
      element.hidden = false;
    }
    const lightName = h01_Name.textContent;
    HExplanationName.textContent = lightName;
    if (tableH.style.gridTemplateRows === "repeat(9, 6vh)") {
      tableH.style.gridTemplateRows = "repeat(11, 6vh)";
    }
  } else if (h03a_MandatoryControl.value !== "Other") {
    for (let element of tableH_StarOptions) {
      element.hidden = true;
    }
    if (tableH.style.gridTemplateRows === "repeat(11, 6vh)") {
      tableH.style.gridTemplateRows = "repeat(9, 6vh)";
    }
  }
};

// Toggle Table H Yes Checkbox
const toggleYesCheckbox = () => {
  if (yes_NRCILTS.checked) {
    no_NRCILTS.checked = false;
  } else if (yes_NRCILTS.checked === false) {
    no_NRCILTS.checked = true;
  }
};

// Toggle Table H No Checkbox
const toggleNoCheckbox = () => {
  if (no_NRCILTS.checked) {
    yes_NRCILTS.checked = false;
  } else if (no_NRCILTS.checked === false) {
    yes_NRCILTS.checked = true;
  }
};

const resetTableH_Action = () => {
  const confirmDiaglog = window.confirm(
    "Are you sure? This will clear all data in Table F."
  );
  if (confirmDiaglog) {
    h03a_MandatoryControl.value = "";
    h03b_MandatoryControl.value = "";
    h03c_MandatoryControl.value = "";
  }
};

const C01ValueCalculation = () => {
  const b01_Name_Input = b01_Name.value;
  c01_Name.value = b01_Name_Input;
};

const C02ValueCalculation = () => {
  const b02_Description_Input = b02_Description.value;
  c02_Description.value = b02_Description_Input;
};

//Event Listeners

// Table A Event Listeners

healthCareCheckbox.addEventListener("change", () => {
  healthCareCheckboxChecked();
});

// Table B Event Listeners

complianceMethodDropdown.addEventListener("change", () => {
  // Trigger Table F
  let complianceMethodSelected = complianceMethodDropdown.value;
  if (complianceMethodSelected === "maxAllowedLP") {
    tableFCurrentlyApplies = true;
    for (const element of tableFAttributes) {
      element.style.display = "grid";
      element.hidden = false;
    }
    for (const element of tableFOptionalRowAttributes) {
      element.hidden = true;
    }

    for (const element of tableF_StarOptions) {
      element.hidden = true;
    }
    tableFDoesNotApplyAttribute.hidden = true;
    tableF.style.gridTemplateRows = "repeat(9, 6vh)";
    ControlsCompliance_Calculation();
  } else {
    tableFCurrentlyApplies = false;
    for (const element of tableFAttributes) {
      element.hidden = true;
    }
    tableFDoesNotApplyAttribute.hidden = false;
    tableF.style.gridTemplateRows = "repeat(2, 6vh)";
    ControlsCompliance_Calculation();
  }
  // Trigger Table G
  if (complianceMethodSelected === "alternateLightSources") {
    tableGCurrentlyApplies = true;
    c05_Value.value = "No";
    for (const element of tableGApplies) {
      element.style.display = "grid";
      element.hidden = false;
    }

    for (const element of tableG_StarOptions) {
      element.hidden = true;
    }

    tableGDoesNotApply.hidden = true;
    tableG.style.gridTemplateRows = "repeat(9, 6vh)";
    ControlsCompliance_Calculation();
    c05_ValueCalculation();
  } else {
    tableGCurrentlyApplies = false;
    c05_Value.value = "";
    for (const element of tableGApplies) {
      element.hidden = true;
    }
    tableGDoesNotApply.hidden = false;
    tableG.style.gridTemplateRows = "repeat(2, 6vh)";
    ControlsCompliance_Calculation();
  }

  // Trigger Table H
  if (complianceMethodSelected === "energyVerifiedLabel") {
    tableHCurrentlyApplies = true;
    for (const element of tableHApplies) {
      element.style.display = "grid";
      element.hidden = false;
    }

    for (const element of tableH_StarOptions) {
      element.hidden = true;
    }

    tableH.style.gridTemplateRows = "repeat(9, 6vh)";
    tableHDoesNotApply.hidden = true;

    c06_Value.value = "Yes";
    ControlsCompliance_Calculation();
  } else {
    tableHCurrentlyApplies = false;
    for (const element of tableHApplies) {
      element.hidden = true;
    }
    tableHDoesNotApply.hidden = false;
    tableH.style.gridTemplateRows = "repeat(2, 6vh)";

    c06_Value.value = "NA";
    ControlsCompliance_Calculation();
  }
  healthCareCheckboxChecked();
  c03_ValueCalculation();
  c04_ValueCalculation();
  c05_ValueCalculation();
  c06_ValueCalculation();
  c07_ValueCalculation();
});

b01_Name.addEventListener("change", () => {
  C01ValueCalculation();
  F01ValueCalculation();
  G01ValueCalculation();
  H01ValueCalculation();
  UpdateStarExplanationName();
});

b02_Description.addEventListener("change", () => {
  C02ValueCalculation();
  F02ValueCalcuation();
  G02ValueCalculation();
  H02ValueCalculation();
});

b04_Value.addEventListener("change", () => {
  F08aValueCalculation();
  F08bValueCalculation();
  F08cValueCalculation();
  G04aValueCalculation();
  G04bValueCalculation();
  G04cValueCalculation();
  H03aValueCalculation();
  H03bValueCalculation();
  H03cValueCalculation();
  ControlsCompliance_Calculation();
});

// Table C Event Listeners
// FIX ME - Did we try using the input event listener for this? If this does work, we will need to change logic in ltsImporter 
// currently it is hacking a mutaion observer to trigger the calculation
// Mutation Observers for C07 logic because event listener doesn't work to detect text changes
const config = { attributes: true, childList: true, subtree: true };

c03_Value.addEventListener("change", c07_ValueCalculation);
c04_Value.addEventListener("change", c07_ValueCalculation);
c05_Value.addEventListener("change", c07_ValueCalculation);
c06_Value.addEventListener("change", c07_ValueCalculation);

// Table F Event Listeners

f03_Method.addEventListener("change", () => {
  f05ValueCalculation();
  f06ValueCalculation();
  if (f03_Method.value === "externally") {
    TableF_ExternalExpandRow();
  }
  
  //c03_ValueCalculation();
});

f04_Value.addEventListener("change", () => {
  f06ValueCalculation();
  //c03_ValueCalculation();
});


//f06_Value.addEventListener('input', c03_ValueCalculation);

f06_Value.addEventListener("change", () => {
  c03_ValueCalculation();
  console.log("f06 Called it");
});

f07_Value.addEventListener("input", () => {
  c04_ValueCalculation();
  // FIX ME - will need to call c04_ValueCalculation() when F12 or F14 change
});

F08a_MandatoryControl.addEventListener("change", () => {
  tableF_StarOptions_Render();
  ControlsCompliance_Calculation();
});

F08b_MandatoryControl.addEventListener("change", () => {
  ControlsCompliance_Calculation();
});

F08c_MandatoryControl.addEventListener("change", () => {
  ControlsCompliance_Calculation();
});

f12_Value.addEventListener("change", () => {
  if (f03_Method.value === "externally") {
    f07_ValueCalculation();
  }
  c04_ValueCalculation();
});

f14_Value.addEventListener("change", () => {
  if (f03_Method.value === "externally") {
    f07_ValueCalculation();
  }
  c04_ValueCalculation();
});

reset_TableF.addEventListener("click", () => {
  resetTableF_Action();
  ControlsCompliance_Calculation();
  c04_ValueCalculation();
});

// Table G Event Listeners

g03_Method.addEventListener("change", () => {
  c05_ValueCalculation();
});

g04a_MandatoryControl.addEventListener("change", () => {
  tableG_StarOptions_Render();
  ControlsCompliance_Calculation();
});

g04b_MandatoryControl.addEventListener("change", () => {
  ControlsCompliance_Calculation();
});

g04c_MandatoryControl.addEventListener("change", () => {
  ControlsCompliance_Calculation();
});

reset_tableG.addEventListener("click", () => {
  resetTableG_Action();
  ControlsCompliance_Calculation();
  c05_ValueCalculation();
});

// Table H Event Listeners

h03a_MandatoryControl.addEventListener("change", () => {
  tableH_StarOptions_Render();
  ControlsCompliance_Calculation();
});

h03b_MandatoryControl.addEventListener("change", () => {
  ControlsCompliance_Calculation();
});

h03c_MandatoryControl.addEventListener("change", () => {
  ControlsCompliance_Calculation();
});

reset_tableH.addEventListener("click", () => {
  resetTableH_Action();
  ControlsCompliance_Calculation();
});

// Table I Event Listeners

yes_NRCILTS.addEventListener("change", () => {
  toggleYesCheckbox();
});

no_NRCILTS.addEventListener("change", () => {
  toggleNoCheckbox();
});

// Submit Button
function validateForm() {
  if (!project_name.value || !project_address.value || !date_prepared.value) {
    alert("Please fill out all required fields.");
    // Prevent form submission
    return false;
  }
  else{
    // Allow form submission
    return true;
  }
}

// REMOVE ME -
const b01_Name_Input = b01_Name.value;
c01_Name.value = b01_Name_Input;

//project_name.value = projectData.project_name


