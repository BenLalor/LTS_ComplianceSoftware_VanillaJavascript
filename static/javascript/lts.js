// Table A Variables
let healthCareCheckbox = document.getElementById("healthcareCheckbox");

// Table B Variables
let complianceMethodDropdown = document.getElementById("compliance_Method");
let b01_Name = document.getElementById("b01_Name");
let b02_Description = document.getElementById("b02_Description");
let b04_Value = document.getElementById("b04_Value");

// Table F Variables
const tableF = document.getElementById("tableF");
const tableFCurrentlyApplies = false;
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
const f06_Value = document.getElementById("f06_Value");
const f07_Value = document.getElementById("f07_Value");
const F08a_MandatoryControl = document.getElementById("F08a");
const F08b_MandatoryControl = document.getElementById("F08b");
const F08c_MandatoryControl = document.getElementById("F08c");
const f12_Value = document.getElementById("f12_Value");
const f14_Value = document.getElementById("f14_Value");
const FExplanationName = document.getElementById("FExplanationName");

// Table G Variables
const tableG = document.getElementById("tableG");
tableGDoesNotApply = document.querySelector(".tableGDoesNotApply");
const tableGApplies = document.querySelectorAll(".tableGApplies");
const tableG_StarOptions = document.querySelectorAll(".tableG_StarOptions");
const g01_Name = document.getElementById("g01_Name");
const g02_Description = document.getElementById("g02_Description");
const g04a_MandatoryControl = document.getElementById("g04a");
const g04b_MandatoryControl = document.getElementById("g04b");
const g04c_MandatoryControl = document.getElementById("g04c");
const GExplanationName = document.getElementById("GExplanationName");

// Table H Variables
const tableH = document.getElementById("tableH");
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

//Event Listeners
// Healthcare Checkbox Status
healthCareCheckbox.addEventListener("change", () => {
  healthCareCheckboxChecked();
});

// Render Tables F, G, and H Based on B.05 Compliance Method
complianceMethodDropdown.addEventListener("change", () => {
  // Trigger Table F
  let complianceMethodSelected = complianceMethodDropdown.value;
  if (complianceMethodSelected === "maxAllowedLP") {
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

    for (const element of tableG_StarOptions) {
      element.hidden = true;
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

    for (const element of tableH_StarOptions) {
      element.hidden = true;
    }

    tableH.style.gridTemplateRows = "repeat(9, 6vh)";
    tableHDoesNotApply.hidden = true;
  } else {
    for (const element of tableHApplies) {
      element.hidden = true;
    }
    tableHDoesNotApply.hidden = false;
    tableH.style.gridTemplateRows = "repeat(2, 6vh)";
  }
});

// Calculate F01 Value Based on B01 Value
b01_Name.addEventListener("change", () => {
  F01ValueCalculation();
  G01ValueCalculation();
  H01ValueCalculation();
});

// Calcuate F02 Value Based on B02 Value
b02_Description.addEventListener("change", () => {
  F02ValueCalcuation();
  G02ValueCalculation();
  H02ValueCalculation();
});

// Calculate F04 Options Based on B04 Value
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

// Trigger Explanation Element for * Options
F08a_MandatoryControl.addEventListener("change", () => {
  tableF_StarOptions_Render();
});

// Table G Event Listeners

// Trigger Table G Explanation Row
g04a_MandatoryControl.addEventListener("change", () => {
  tableG_StarOptions_Render();
});

// Table H Event Listeners
h03a_MandatoryControl.addEventListener("change", () => {
  tableH_StarOptions_Render();
});

// Table I Event Listeners
yes_NRCILTS.addEventListener("change", () => {
  toggleYesCheckbox();
});

no_NRCILTS.addEventListener("change", () => {
  toggleNoCheckbox();
});

// Table F Functions
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

// Render & Hide F10-F14 Row
const f07_ValueCalculation = () => {
  let f03_Method_Value = f03_Method.value;
  if (f03_Method_Value === "externally") {
    f07_Value.value = f12_Value.value * f14_Value.value;
    f07_Value.disabled = true;
    for (let element of tableFOptionalRowAttributes) {
      element.hidden = false;
    }
    if (tableF.style.gridTemplateRows === "repeat(11, 6vh)") {
      tableF.style.gridTemplateRows = "repeat(14, 6vh)";
    } else if (tableF.style.gridTemplateRows === "repeat(9, 6vh)") {
      tableF.style.gridTemplateRows = "repeat(12, 6vh)";
    }
  } else {
    f07_Value.value = "";
    f07_Value.disabled = false;
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

// Table G Functions
const G01ValueCalculation = () => {
  const b01_Name_Input = b01_Name.value;
  g01_Name.textContent = b01_Name_Input;
};

const G02ValueCalculation = () => {
  const b02_Description_Input = b02_Description.value;
  g02_Description.textContent = b02_Description_Input;
};

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

const tableG_StarOptions_Render = () => {
  if (g04a_MandatoryControl.value === "Other") {
    console.log("1");
    for (let element of tableG_StarOptions) {
      element.hidden = false;
    }
    const lightName = g01_Name.textContent;
    GExplanationName.textContent = lightName;
    if (tableG.style.gridTemplateRows === "repeat(9, 6vh)") {
      tableG.style.gridTemplateRows = "repeat(11, 6vh)";
    }
  } else if (g04a_MandatoryControl.value !== "Other") {
    console.log("2");
    for (let element of tableG_StarOptions) {
      element.hidden = true;
    }
    if (tableG.style.gridTemplateRows === "repeat(11, 6vh)") {
      tableG.style.gridTemplateRows = "repeat(9, 6vh)";
    }
  }
};

// Table H Functions

//
const H01ValueCalculation = () => {
  const b01_Name_Input = b01_Name.value;
  h01_Name.textContent = b01_Name_Input;
};

const H02ValueCalculation = () => {
  const b02_Description_Input = b02_Description.value;
  h02_Description.textContent = b02_Description_Input;
};

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

const toggleYesCheckbox = () => {
  if (yes_NRCILTS.checked) {
    no_NRCILTS.checked = false;
  } else if (yes_NRCILTS.checked === false) {
    no_NRCILTS.checked = true;
  }
};

const toggleNoCheckbox = () => {
  if (no_NRCILTS.checked) {
    yes_NRCILTS.checked = false;
  } else if (no_NRCILTS.checked === false) {
    yes_NRCILTS.checked = true;
  }
};
