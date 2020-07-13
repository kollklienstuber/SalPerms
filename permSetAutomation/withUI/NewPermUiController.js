({
    //doGranteePerms is what drives the below four article perms
    //https://powerofus.force.com/s/article/fC-Security-GP-Community-User-Permissions
    //https://powerofus.force.com/s/article/fC-Community-User-Permissions-Amendments
    //https://powerofus.force.com/s/article/fC-Security-GP-Community-User-Permissions-Benchmarks
    //https://powerofus.force.com/s/article/fC-Security-GP-Community-User-Permissions-Grantee-Report
    //public static void createPermSetUserGrantee(Boolean BaseLineBool, Boolean AmendmentsBool, Boolean BenchmarksBool,
    //Boolean GranteeReports, Boolean ReviewerBaseLine, Boolean guestUserGranteePortal,Boolean guestUserReviewerPortal, 
    //String profileId, String permSetNameParametor){
    
    doGranteePerms : function(component, event, helper) {
        
        if (component.get("v.BaseLineBool") == true){
            var action = component.get("c.FCGranteeBasePerms");   
            action.setParams({
                "permSetNameParametor": component.find("granteeBasePermNameVal").get("v.value")
                
            });
            
        }
        
        
        
        if (component.get("v.AmendmentBool") == true){
            var action2 = component.get("c.FCAmendmentsPerms");
            action2.setParams({
                "permSetNameParametor": component.find("AmendmentPermNameVal").get("v.value")
            });
            
        }
        
        
        if (component.get("v.BenchmarksBool") == true){       
            var action3 = component.get("c.FCBenchMarkPerms");
            action3.setParams({
                "permSetNameParametor": component.find("BenchmarksBoolPermNameVal").get("v.value")
            });
            
        }
        
        if (component.get("v.ReportsBoolean") == true){            
            var action4 = component.get("c.FCGranteeReportPerms");
            action4.setParams({
                "permSetNameParametor": component.find("GranteeReportsBoolPermNameVal").get("v.value")
            });
            
        }
        
        if (component.get("v.ReviewerBaseLineBoolean") == true){            
            var action5 = component.get("c.FCReviewerPerms");
            action5.setParams({
                "permSetNameParametor": component.find("ReviewerPortalBoolPermNameVal").get("v.value")
            });
            
        }
        
        
        if(action != undefined){
            action.setCallback(this, function(response){
                var state = response.getState();
               	        if (state === "SUCCESS") {
    	        helper.showToast();
		    }
            else if (state === "ERROR") {
                helper.showErrorToast();
            }
            });
            $A.enqueueAction(action);
        }
        
        
        if(action2 != undefined){
            action2.setCallback(this, function(response){
                var state = response.getState();
               	        if (state === "SUCCESS") {
    	        helper.showToast();
		    }
            else if (state === "ERROR") {
                helper.showErrorToast();
            }
            });
            $A.enqueueAction(action2);
        }
        
        
        
        if(action3 != undefined){
        action3.setCallback(this, function(response){
            var state = response.getState();
            	        if (state === "SUCCESS") {
    	        helper.showToast();
		    }
            else if (state === "ERROR") {
                helper.showErrorToast();
            }
        });
        $A.enqueueAction(action3);
        }
        
           if(action4 != undefined){
        action4.setCallback(this, function(response){
            var state = response.getState();
            	        if (state === "SUCCESS") {
    	        helper.showToast();
		    }
            else if (state === "ERROR") {
                helper.showErrorToast();
            }
        });
        $A.enqueueAction(action4);
           }
        
        
        if(action5 != undefined){
        action5.setCallback(this, function(response){
            var state = response.getState();
           	        if (state === "SUCCESS") {
    	        helper.showToast();
		    }
            else if (state === "ERROR") {
                helper.showErrorToast();
            }
        });
        $A.enqueueAction(action5);
        }
        
        
    }
    
    
    
    
    
})