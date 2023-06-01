// Table A Variables
let healthCareCheckbox = document.getElementById("healthcareCheckbox");

// Table B Variables
let complianceMethodDropdown = document.getElementById("compliance_Method");
let b01_Name = document.getElementById("b01_Name");
let b02_Description = document.getElementById("b02_Description");
let b04_Value = document.getElementById("b04_Value");

// Table C Variables
const c01_Name = document.getElementById("c01_Name");
const c02_Description = document.getElementById("c02_Description");
let c03_Value = document.getElementById("c03_Value");
const c04_Value = document.getElementById("c04_Value");
const c05_Value = document.getElementById("c05_Value");
const c06_Value = document.getElementById("c06_Value");
let c07_Value = document.getElementById("c07_Value");
let c07_ControlsValue = document.getElementById("c07_ControlsValue");

// Table F Variables
const tableF = document.getElementById("tableF");
let tableFCurrentlyApplies = false;
const tableFDoesNotApplyAttribute = document.querySelector(
  ".tableFDoesNotApplyAttribute"
);
const tableFAttributes = document.querySelectorAll(".tableFAttributes");
const tableFOptionalRowAttributes =
  document.querySelectorAll(".tableFOptionalRow");
const tableF_StarOptions = document.querySelectorAll(".tableF_StarOptions");
const f01_Name = document.getElementById("f01_Name");
const f02_Description = document.getElementById("f02_Description");
const f03_Method = document.getElementById("f03_Method");
const f04_Value = document.getElementById("f04_Value");
const f05_Value = document.getElementById("f05_Value");
let f06_Value = document.getElementById("f06_Value");
let f07_Value = document.getElementById("f07_Value");
const F08a_MandatoryControl = document.getElementById("F08a");
const F08b_MandatoryControl = document.getElementById("F08b");
const F08c_MandatoryControl = document.getElementById("F08c");
let f12_Value = document.getElementById("f12_Value");
const f14_Value = document.getElementById("f14_Value");
const FExplanationName = document.getElementById("FExplanationName");

// Table G Variables
const tableG = document.getElementById("tableG");
let tableGCurrentlyApplies = false;
tableGDoesNotApply = document.querySelector(".tableGDoesNotApply");
const tableGApplies = document.querySelectorAll(".tableGApplies");
const tableG_StarOptions = document.querySelectorAll(".tableG_StarOptions");
const g01_Name = document.getElementById("g01_Name");
const g02_Description = document.getElementById("g02_Description");
const g03_Method = document.getElementById("g03_Method");
const g04a_MandatoryControl = document.getElementById("g04a");
const g04b_MandatoryControl = document.getElementById("g04b");
const g04c_MandatoryControl = document.getElementById("g04c");
const GExplanationName = document.getElementById("GExplanationName");

// Table H Variables
const tableH = document.getElementById("tableH");
let tableHCurrentlyApplies = false;
const tableHDoesNotApply = document.querySelector(".tableHDoesNotApply");
const tableHApplies = document.querySelectorAll(".tableHApplies");
const tableH_StarOptions = document.querySelectorAll(".tableH_StarOptions");
const h01_Name = document.getElementById("h01_Name");
const h02_Description = document.getElementById("h02_Description");
const h03a_MandatoryControl = document.getElementById("h03a");
const h03b_MandatoryControl = document.getElementById("h03b");
const h03c_MandatoryControl = document.getElementById("h03c");
const HExplanationName = document.getElementById("HExplanationName");

// Table I Variables
const yes_NRCILTS = document.getElementById("yes_NRCILTS");
const no_NRCILTS = document.getElementById("no_NRCILTS");

// Functions

// Table A Functions

// Hide Table F, H and G Control Dropdowns if Table A Health Care Checkbox is Checked
const healthCareCheckboxChecked = () => {
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
};

// Table C Functions

const c03_ValueCalculation = () => {
  let f06_Value_Input = f06_Value.innerText;
  c03_Value.innerText = f06_Value_Input;
};

const c05_ValueCalculation = () => {
  // Probably need to add a condition for table G being triggered,
  // maybe with a boolean value to ensure it is currently triggered
  //and not just triggered and untriggered
  if (g03_Method.value) {
    c05_Value.textContent = "Yes";
  } else {
    c05_Value.textContent = "No";
  }
};

// Auto-Complete C04 Value Based on F07 Value
const c04_ValueCalculation = () => {
  const f07_Value_Input = f07_Value.value;
  c04_Value.textContent = f07_Value_Input;
};

const c07_ValueCalculation = () => {
  console.log("c07_ValueCalculation");
  if (
    !tableFCurrentlyApplies &&
    !tableGCurrentlyApplies &&
    !tableHCurrentlyApplies
  ) {
    console.log("Nothing Applies");
    c07_Value.textContent = "";
  } else if (tableFCurrentlyApplies && !tableFComplies()) {
    c07_Value.textContent = "Does Not Comply";
  } else if (tableGCurrentlyApplies && !tableGComplies()) {
    c07_Value.textContent = "Does Not Comply";
  } else {
    c07_Value.textContent = "Complies";
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
      F08a_MandatoryControl.selectedIndex === 0
    ) {
      TableFControlsStatus = controlsStatus.false;
      console.log("Fa Controls Do Not Comply");
    } else if (
      !F08b_MandatoryControl.disabled &&
      F08b_MandatoryControl.selectedIndex === 0
    ) {
      TableFControlsStatus = controlsStatus.false;
      console.log("Fb Controls Do Not Comply");
    } else if (
      !F08c_MandatoryControl.disabled &&
      F08c_MandatoryControl.selectedIndex === 0
    ) {
      TableFControlsStatus = controlsStatus.false;
      console.log("Fc Controls Do Not Comply");
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
      console.log("Ga Controls Do Not Comply");
    } else if (
      !g04b_MandatoryControl.disabled &&
      g04b_MandatoryControl.selectedIndex === 0
    ) {
      TableGControlsStatus = controlsStatus.false;
      console.log("Gb Controls Do Not Comply");
    } else if (
      !g04c_MandatoryControl.disabled &&
      g04c_MandatoryControl.selectedIndex === 0
    ) {
      TableGControlsStatus = controlsStatus.false;
      console.log("Gc Controls Do Not Comply");
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
      console.log("Ha Controls Do Not Comply");
    } else if (
      !h03b_MandatoryControl.disabled &&
      h03b_MandatoryControl.selectedIndex === 0
    ) {
      TableHControlsStatus = controlsStatus.false;
      console.log("Hb Controls Do Not Comply");
    } else if (
      !h03c_MandatoryControl.disabled &&
      h03c_MandatoryControl.selectedIndex === 0
    ) {
      TableHControlsStatus = controlsStatus.false;
      console.log("Hc Controls Do Not Comply");
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
    console.log("All Controls NA");
    c07_ControlsValue.textContent = blank;
  } else if (
    TableFControlsStatus === controlsStatus.false ||
    TableGControlsStatus == controlsStatus.false ||
    TableHControlsStatus == controlsStatus.false
  ) {
    console.log("All Controls DO NO Comply");
    c07_ControlsValue.textContent = doesNotComply;
  } else {
    console.log("All Controls Comply");
    c07_ControlsValue.textContent = complies;
  }
};

const tableFComplies = () => {
  if (
    c03_Value.textContent != "" &&
    c04_Value.textContent != "" &&
    c03_Value.textContent >= +c04_Value.textContent
  ) {
    return true;
  } else return false;
};

const tableGComplies = () => {
  if (c05_Value.textContent === "No") {
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
    f05_Value.textContent = 12;
  } else if (f03_Method_Value === "externally") {
    f05_Value.textContent = 2.3;
  }
};

// Calculate and Render Table F Total Allowance
const f06ValueCalculation = () => {
  f06_Value.innerText = f04_Value.value * f05_Value.textContent;
  f06_Value.value = 44;
};

// Render & Hide Table F Optional Watt Per Luminaire Row
const TableF_ExternalExpandRow = () => {
  let f03_Method_Value = f03_Method.value;
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
    f07_Value.value = "";
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

const C01ValueCalculation = () => {
  const b01_Name_Input = b01_Name.value;
  c01_Name.textContent = b01_Name_Input;
};

const C02ValueCalculation = () => {
  const b02_Description_Input = b02_Description.value;
  c02_Description.textContent = b02_Description_Input;
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
    c05_Value.textContent = "No";
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
  } else {
    tableGCurrentlyApplies = false;
    c05_Value.textContent = "";
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

    c06_Value.textContent = "Yes";
    ControlsCompliance_Calculation();
  } else {
    tableHCurrentlyApplies = false;
    for (const element of tableHApplies) {
      element.hidden = true;
    }
    tableHDoesNotApply.hidden = false;
    tableH.style.gridTemplateRows = "repeat(2, 6vh)";

    c06_Value.textContent = "";
    ControlsCompliance_Calculation();
  }
});

complianceMethodDropdown.addEventListener("change", () => {
  c07_ValueCalculation();
});

b01_Name.addEventListener("change", () => {
  C01ValueCalculation();
  F01ValueCalculation();
  G01ValueCalculation();
  H01ValueCalculation();
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

// Mutation Observers for C07 logic because event listener doesn't work to detect text changes
const config = { attributes: true, childList: true, subtree: true };

const c03_Observer = new MutationObserver(c07_ValueCalculation);
c03_Observer.observe(c03_Value, config);

const c04_Observer = new MutationObserver(c07_ValueCalculation);
c04_Observer.observe(c04_Value, config);

const c05_Observer = new MutationObserver(c07_ValueCalculation);
c05_Observer.observe(c05_Value, config);

const c06_Observer = new MutationObserver(c07_ValueCalculation);
c06_Observer.observe(c06_Value, config);

// Table F Event Listeners

f03_Method.addEventListener("change", () => {
  f05ValueCalculation();
  f06ValueCalculation();
  TableF_ExternalExpandRow();
  //c03_ValueCalculation();
});

f04_Value.addEventListener("change", () => {
  f06ValueCalculation();
  //c03_ValueCalculation();
});

// Mutation Observer for C06 logic because event listener doesn't work to detect text changes
const f06_Observer = new MutationObserver(c03_ValueCalculation);
f06_Observer.observe(f06_Value, config);

f07_Value.addEventListener("change", () => {
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
  f07_ValueCalculation();
});

f14_Value.addEventListener("change", () => {
  f07_ValueCalculation();
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

// Table I Event Listeners

yes_NRCILTS.addEventListener("change", () => {
  toggleYesCheckbox();
});

no_NRCILTS.addEventListener("change", () => {
  toggleNoCheckbox();
});
