#$env:PSModulePath=$env:PSModulePath+";"+"C:\Program Files (x86)\Microsoft SDKs\Windows Azure\PowerShell"
Import-Module "C:\Program Files (x86)\Microsoft SDKs\Azure\PowerShell\ServiceManagement\Azure\Azure.psd1"
#Import-Module "Azure.psd1"
Import-AzurePublishSettingsFile "C:\GitHub\AzureManagement\Assets\Settings\Visual Studio Premium with MSDN-PAYG-secondary-8-23-2014-credentials.publishsettings"
$cert = Get-Item cert:\localmachine\my\6e07b2c3c034dd31097c18485e83d4dce94ffbf5 
Set-AzureSubscription -SubscriptionName 'Visual Studio Premium with MSDN' -SubscriptionId '3ba3e117-6959-47e0-a350-641b02b95ccb' -Certificate $cert
Select-AzureSubscription -SubscriptionName 'Visual Studio Premium with MSDN'
Start-AzureVM -ServiceName "CARER03" -Name "CARER03"
