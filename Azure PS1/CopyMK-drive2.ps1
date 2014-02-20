
Select-AzureSubscription "Visual Studio Premium with MSDN" 
 
### Source VHD (West US) - authenticated container ###
$srcUri = "http://devsps01.blob.core.windows.net/base-os2012-ad/devsps01-Drive01.vhd" 
 
### Source Storage Account (West US) ###
$srcStorageAccount = "devsps01"
$srcStorageKey = "t7WE/kfqL199HJVdbrZ82dySU6O9yq6hhAeNvYCM+nc45T3CwJyyo+HQByFxXxPaIEkriYEBc62IJQxGMzQLQg=="
 
### Target Storage Account (West US) ###
$destStorageAccount = "meerkatmsdnspf"
$destStorageKey = "W38cSAUwxN4Q7ujuAF30gYxsotDIR1N7uVab8GEZzC031RzxdS0xQHcEIUTRYG+ai+5NV5mFwcuME91sjlvmbg=="
 
### Create the source storage account context ### 
$srcContext = New-AzureStorageContext  –StorageAccountName $srcStorageAccount `
                                        -StorageAccountKey $srcStorageKey  
 
### Create the destination storage account context ### 
$destContext = New-AzureStorageContext  –StorageAccountName $destStorageAccount `
                                        -StorageAccountKey $destStorageKey  
 
### Destination Container Name ### 
$containerName = "vhds"
 
### Create the container on the destination ### 
get-AzureStorageContainer -Name $containerName -Context $destContext 
 
### Start the asynchronous copy - specify the source authentication with -SrcContext ### 
$blob1 = Start-AzureStorageBlobCopy -srcUri $srcUri `
                                    -SrcContext $srcContext `
                                    -DestContainer $containerName `
                                    -DestBlob "Drive2.vhd" `
                                    -DestContext $destContext