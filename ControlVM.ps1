. c:\vmControl\Invoke-SqlCmd2.ps1

$vmName = ""
$vmServiceName = ""
$AzureSubscription = "" 
$vmAction = ""

$actions = Invoke-Sqlcmd2 -ServerInstance "tcp:d26x5vc6fq.database.windows.net,1433" -Username "andre@d26x5vc6fq" -Password "pass@word1" -Database "spinuptest" -Query "exec ControlVM" 

foreach ($action in $actions)
{
    $vmName = $action.vmName
    $vmServiceName = $action.vmServiceName
    $AzureSubscription = $action.AzureSubscription
    $vmAction = $action.vmAction

    Set-AzureSubscription -SubscriptionName $AzureSubscription

    switch ($vmAction)
    {
        "start" {Start-AzureVM -ServiceName $vmServiceName -Name $vmName}
        "stop"  {Stop-AzureVM -ServiceName $vmServiceName -Name $vmName -Force}
    }
}