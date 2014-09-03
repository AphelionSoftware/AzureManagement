#$password = "Denali@2011"
#$SpSite = "http://carer03.cloudapp.net/"

#$pwd = $password | ConvertTo-SecureString -AsPlainText -Force
#$crd = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList "DEV03\spinstall",$pwd
#Enter-PSSession -ComputerName carer03.cloudapp.net -Authentication CredSSP -Credential $crd


#setup
#Enable-PSRemoting –force 
#Set-Item wsman:\localhost\client\auth\CredSSP -value true -force 
#Enable-WSManCredSSP -force -role server -force
#set-item wsman:localhost\client\trustedhosts -value * -force
##set-item wsman:localhost\client\trustedhosts -value 1.1.2.242 
#set-item wsman:\localhost\listener\listener*\port -value 81 -force
#restart-Service winrm 
#winrm get winrm/config 
#winrm enumerate winrm/config/listener 

#cd WSMan:\localhost\Client
#set-item .\allowunencrypted $true
#on server
#set-item -force WSMan:\localhost\Service\AllowUnencrypted $true
#set-item -force WSMan:\localhost\Service\Auth\CredSSP $true
Enter-PSSession -ComputerName carer03.cloudapp.net -Authentication CredSSP -Credential (Get-Credential) -UseSSL

Add-PSSnapin microsoft.sharepoint.powershell 

$libURL = "http://carer03.cloudapp.net/Reports/ValueReports"
$datasourcename = "rsdsPOA"
$datasourceurl = "http://carer03.cloudapp.net/Reports/DataSources/MeerKat.rsds"
$SpSite = "http://carer03.cloudapp.net/"

#invoke-expression -Command "$ScriptPath\01_Meerkat.PSConfig.v001.ps1 -DatabaseServer $DatabaseServer -FarmAccount $FarmAccount"
#invoke-expression -Command "$ScriptPath\02_Meerkat.Service Application Setup.v001.ps1 -DatabaseServer $DatabaseServer -FarmAccount $FarmAccount"
#invoke-expression -Command "$ScriptPath\03_Meerkat_ImportRootSite.ps1 -name $name -sitecoll $sitecoll -filePath $filePath -template $template -user $user"
#invoke-expression -Command "$ScriptPath\04_Meerkat_ImportReportSite.ps1  -name $name -sitecoll $sitecoll -filePath $filePath -template $template -user $user"
#invoke-expression -Command "$ScriptPath\06_FixLSiteReferences.ps1 -baseURL $baseURL -SpSite $SpSite"
#invoke-expression -Command "$ScriptPath\07_SwitchMasterPage.ps1 -SpSite $SpSite -masterpage $masterpage"
#d:
#cd Dropbox\Github\Meerkat\installation\sp
invoke-expression -Command ".\05_Meerkat_FixReportDataConnections.ps1 -webURL $SpSite  "
exit

