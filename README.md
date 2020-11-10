This tool is free to use, but is not an official Salesforce product. The tool has not been officially tested or documented. Salesforce support is not available for utilizing or errors that might occur while using this tool. 

Currently SAL requires a wide range of object and field level permissions to be granted. Without these permissions in place your users may experience errors.
These permissions can be found on the SAL documentation pages found under "Set Up Security" 
Manually assigning these permissions takes time and can cause errors if done incorrectly. An alternative to manual creation is to preform the steps below inside the "Resolution" section of this article. 
Utilizing this automated tool does require creating one Apex Class in your sandbox environment. All Apex code is provided.


Once the tool is ran you will find three new permissions sets found under "Setup" -> "Permission Sets" The permissions set names are as follows and align to the below corresponding setup articles:
1: Permission Set Name: SAL Adviser Permissions - Corresponding Permissions
2: 
3: 

This tool is free to use, but is not an official Salesforce product. The tool has not been officially tested or documented. Salesforce support is not available for utilizing or errors that might occur while using this tool. 

 
Resolution	
To run the tool which will create three SAL permission sets perform the below. 

1: Navigate to the code here
2: Copy all of the code exactly as
3: Inside a Salesforce Sandbox Organization select the gear icon and select "Developer Console" 
4: Inside the developer console select "file" -> "new" -> "Apex class" and name it "SalPerms" 
5: Delete all code currently in this class and paste in the code you copied from step 2 and save the file ("file" -> "save" )
6: Select "debug" -> "Open Execute Anonymous window" and paste the below code,
 
SalPerms newPerms = new SalPerms(); 
try
{ 
    newPerms.SalAdvisorOrAdviseePathwayPerms(); 
} 
catch (Exception e){ system.debug(e); }

finally
{ 
    newPerms.SalBasePermsAdvisor();
    newPerms.SalBasePermsAdvisee(); 
}


7: Highlight that code above in the anonymous window and click "Execute Highlighted" 
8: The permissions sets can now be found under "Setup" -> "Permission sets". All permission sets begin with "SAL" for example, "SAL...".

To utilize the permission sets in production push these permission sets from sandbox to production using a change set or any tool that allows permission set deployments from sandbox to production. 

This tool is free to use, but is not an official Salesforce product. The tool has not been officially tested or documented. Salesforce support is not available for utilizing or errors that might occur while using this tool. 
