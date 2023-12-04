window.onload = function() {
    // Use this to manually trigger the event listeners in lts.js
    var event = new Event('change');
    // Restore LTS project data

    // High Level Data Fields
    project_name.value = projectData.project_name
    project_address.value = projectData.project_address
    date_prepared.value = projectData.date

    // Table A Data Fields
    a01_project_location.value = projectData.a01_project_location;
    climate_zone.value = projectData.a02_climate_zone;
    healthCareCheckbox.checked = projectData.a03a_healthcare
    healthCareCheckbox.dispatchEvent(event);
    multifamilyCheckbox.value = projectData.a03b_multifamily_GTE4stories

    // Table B Data Fields
    b01_Name.value = projectData.b01_name
    b01_Name.dispatchEvent(event);
    b02_Description.value = projectData.b02_description
    b02_Description.dispatchEvent(event);
    b03_status.value = projectData.b03_status
    b04_Value.value = projectData.b04_type
    b04_Value.dispatchEvent(event);
    complianceMethodDropdown.value = projectData.b05_method
    complianceMethodDropdown.dispatchEvent(event);

    // Table C Data Fields
    c01_Name.value = projectData.c01_name
    c02_Description.value = projectData.c02_description
    c03_Value.value = projectData.c03_allowed
    c03_Value.setAttribute('dummy-attribute', 'dummy-value');
    c03_Value.removeAttribute('dummy-attribute');
    c04_Value.value = projectData.c04_designed
    c04_Value.setAttribute('dummy-attribute', 'dummy-value');
    c04_Value.removeAttribute('dummy-attribute');
    c05_Value.value = projectData.compliant_light_sources
    c05_Value.setAttribute('dummy-attribute', 'dummy-value');
    c05_Value.removeAttribute('dummy-attribute');
    c06_Value.value = projectData.c06_EVL
    c06_Value.setAttribute('dummy-attribute', 'dummy-value');
    c06_Value.removeAttribute('dummy-attribute');
    c07_Value.value = projectData.c07_compliance_results
    c07_ControlsValue.value = projectData.c07_controls_compliance
    
    // Table F Data Fields
    f01_Name.value = projectData.f01_name
    f02_Description.value = projectData.f02_description
    f03_Method.value = projectData.f03_method
    f03_Method.dispatchEvent(event);
    f04_Value.value = projectData.f04_area
    f04_Value.dispatchEvent(event);
    f05_Value.value = projectData.f05_allowed_density
    f06_Value.value = projectData.f06_allowance
    f06_Value.setAttribute('dummy-attribute', 'dummy-value');
    f06_Value.removeAttribute('dummy-attribute');
    f07_Value.value = projectData.f07_designed
    f07_Value.dispatchEvent(event);
    F08a_MandatoryControl.value = projectData.f08a_shut_off
    F08a_MandatoryControl.dispatchEvent(event);
    F08b_MandatoryControl.value = projectData.f08b_dimming
    F08b_MandatoryControl.dispatchEvent(event);
    F08c_MandatoryControl.value = projectData.f08c_demand_response
    F08c_MandatoryControl.dispatchEvent(event);
    f10_Value.value = projectData.f10_name 
    f11_Value.value = projectData.f11_description
    f12_Value.value = projectData.f12_watts_per_luminaire
    f12_Value.dispatchEvent(event);
    f13_Value.value = projectData.f13_determined
    f13_Value.dispatchEvent(event);
    f14_Value.value = projectData.f14_number_of_luminaires
    f14_Value.dispatchEvent(event);

    // Table G Data Fields
    g01_Name.value = projectData.g01_name
    g02_Description.value = projectData.g02_description
    g03_Method.value = projectData.g03_compliant_light_sources
    g03_Method.dispatchEvent(event);
    g04a_MandatoryControl.value = projectData.g04a_shut_off
    g04a_MandatoryControl.dispatchEvent(event);
    g04b_MandatoryControl.value = projectData.g04b_dimming
    g04b_MandatoryControl.dispatchEvent(event);
    g04c_MandatoryControl.value = projectData.g04c_demand_response
    g04c_MandatoryControl.dispatchEvent(event);

    // Table H Data Fields
    h01_Name.value = projectData.h01_name
    h02_Description.value = projectData.h02_description   
    h03a_MandatoryControl.value = projectData.h03a_shut_off
    h03a_MandatoryControl.dispatchEvent(event);
    h03b_MandatoryControl.value = projectData.h03b_dimming
    h03b_MandatoryControl.dispatchEvent(event);
    h03c_MandatoryControl.value = projectData.h03c_demand_response
    h03c_MandatoryControl.dispatchEvent(event);
}



