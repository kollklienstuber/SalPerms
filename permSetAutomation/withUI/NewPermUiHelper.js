({
	showToast : function(component, event, helper) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": "Success",
        "message": "Permission Set(s) Created. Navigate to \"Setup\" -> \"Permission Sets\" to assign it out",
        "type" : "success"
    });
    toastEvent.fire();
	},
    
    showErrorToast : function(component, event, helper) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": "Something Went Wrong",
        "message": "Check that the permission set name entered is unique and not already created",
        "type" : "error"
    });
    toastEvent.fire();
	}
})