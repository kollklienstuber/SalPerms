Currently foundationConnect requires a wide range of object and field level permissions to be granted. Without these permissions in place, your users may experience errors.
These permissions can be found on the foundationConnect documentation pages found under "Set Up Security" 
Manually assigning these permissions takes time and can cause errors if done incorrectly. An alternative to manual creation is to preform the steps below inside the "Resolution" section of this article. 
Utilizing this automated tool does require creating the following:

1: One Apex Class

2: One Apex Test Class

Once the tool is ran you will find five newly created permissions sets found under "Setup" -> "Permission Sets" The permissions set names are as follows and align to the below corresponding setup articles:

1: Permission Set Name: FC Grantee Base Permissions - Corresponding Permissions

2: Permission Set Name: FC Amendments Permissions - Corresponding Permissions
3: Permission Set Name: FC Benchmark Base Permissions - Corresponding Permissions
4: Permission Set Name: FC Grantee Report Base Permissions - Corresponding Permissions
5: Permission Set Name: FC Reviewer Perms Base Permissions - Corresponding Permissions
​​​​​​​
This tool is free to use, but is not an official salesforce.com product. The tool has not been officially tested or documented. Salesforce.com support is not available for utilizing or errors that might occur while using this tool. 
Resolution
To run the tool which will create five foundationConnect permission sets preform the below. 

1: Navigate to the code here (https://github.com/kollklienstuber/FoundationConnect-Perm-Set-automation/blob/master/permSetAutomation/WithoutUI/FCPermsNoUI.apxc)
2: Copy all of the code exactly as
3: Inside a Salesforce Sandbox Organization select the gear icon and select "Developer Console" 
4: Inside the developer console select "file" -> "new" -> "Apex class" and name it "FCPermsNoUI" 
5: Delete all code currently in this class and paste in the code you copied from step 2 and save the file ("file" -> "save" )
6: Select "debug" -> "Open Execute Anonymous window" and paste the below code,
 
FCPermsNoUI cp = new FCPermsNoUI();
try {
cp.FCReviewerPerms();
}
catch (Exception e){
system.debug(e);
}
finally{
cp.FCGranteeReportPerms();     
cp.FCBenchMarkPerms();
cp.FCAmendmentsPerms();
cp.FCGranteeBasePerms();
}


7: Highlight that code above in the anonymous window and click "Execute Highlighted" 
8: The permissions sets can now be found under "Setup" -> "Permission sets". To utilize the permission sets in production push these permissions sets from sandbox to production using a change set or any tool that allows permission set deployments from sandbox to production. 

This tool is free to use, but is not an official salesforce.com product. The tool has not been officially tested or documented. Salesforce.com support is not available for utilizing or errors that might occur while using this tool.
