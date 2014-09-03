Add-PSSnapin microsoft.sharepoint.powershell
$masterpage = "meerkat_programme_care.master"
$baseURL = "http://carer03/"
$SpSite  = "http://carer03/program4"

$web = Get-SPWeb -Identity "$SpSite"
$web.CustomMasterUrl =  "/_catalogs/masterpage/$masterpage"  
$web.MasterUrl = "/_catalogs/masterpage/$masterpage" 
$web.Update() 
