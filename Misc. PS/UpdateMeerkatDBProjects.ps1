

function UpdateProject( $sln, $proj, $DB ) {
$dte = New-Object -comobject "VisualStudio.DTE";
    Write-Host "Solution $sln"
    Write-Host "Project $proj"
    $dte.Solution.Open($sln) ;
    $dte.MainWindow | %{$_.gettype().InvokeMember("Visible","SetProperty",$null,$_,$true)};
    #| Out-Null Piping the output forces Powershell to wait to complete

    Write-Host "Waiting 15 seconds for project to open"
            Start-Sleep 15
    

    $tries = 0
    While ($tries -lt 10)  {
        Try {
            $dte.ExecuteCommand("Tools.SSDTNewSchemaComparison", "/ProviderType ConnectionBased /ConnectionString ""Data Source=.\sql2012;Initial Catalog=$DB;Integrated Security=True"" /ProviderType ProjectBased /ProjectName $proj") | ForEach-Object {Start-Process $_} | Wait-Process ;
            $tries = 100;
            Sleep-Start 30;
            
            $dte.ExecuteCommand("SQL.SSDTSchemaCompareCompare") | Out-Null;

        }
        Catch {
        Write-Host "Waiting 5 seconds for project to open"
            Start-Sleep 5
        }
        Finally {
        $tries++
        }
    }



    $tries = 0
    $compared = 0
    While ($tries -lt 10)  {
        Try {
    
        $dte.ExecuteCommand("SQL.SSDTSchemaCompareWriteUpdates");
        Write-Host "Done";
        $dte.Solution.Close();

        $tries = 100;
        break;
        }
        Catch {
        Write-Host "Waiting 5 seconds for comparison to complete"
            Start-Sleep 5
        }
        Finally {
        $tries++
        }
    }
}

#Start-Job { 
UpdateProject -sln "D:\Dropbox\GitHub\Meerkat\SQL Solution\Aphelion.Meerkat.DB\Aphelion.Meerkat.DB.sln" -proj "Aphelion.Meerkat.DB" -db "Meerkat"; 
#}

#Start-Job { 
UpdateProject -sln "D:\Dropbox\GitHub\Meerkat\SQL Solution\Aphelion.MeerkatErrors.DB\Aphelion.MeerkatErrors.DB.sln" -proj "Aphelion.MeerkatErrors.DB" -db "MeerkatErrors";
#}

#Start-Job { 
UpdateProject -sln "D:\Dropbox\GitHub\Meerkat\SQL Solution\Aphelion.MeerkatStaging.DB\Aphelion.MeerkatStaging.DB.sln" -proj "Aphelion.MeerkatStaging.DB" -db "MeerkatStaging"; 
#}


