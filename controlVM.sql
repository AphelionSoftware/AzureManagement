USE [spinuptest]
GO

/****** Object:  StoredProcedure [dbo].[controlVM]    Script Date: 19-12-2013 14:14:07 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[controlVM]
AS
	CREATE TABLE #vmActions(vmName sysname, vmServiceName sysname, AzureSubscription sysname, vmAction VARCHAR(5))

	INSERT INTO #vmActions(vmName, vmServiceName, AzureSubscription, vmAction)
	SELECT vmName, vmServiceName, AzureSubscription, 'START'
	FROM dbo.vmControl
	WHERE StartTime IS NULL
	AND RequestedStoptime >= GETDATE()

	INSERT INTO #vmActions(vmName, vmServiceName, AzureSubscription, vmAction)
	SELECT vmName, vmServiceName, AzureSubscription, 'STOP'
	FROM dbo.vmControl
	WHERE StartTime IS NOT NULL
	AND RequestedStoptime <= GETDATE()

	
	UPDATE dbo.vmControl
	SET StartTime = GETDATE()
	WHERE StartTime IS NULL
	AND RequestedStoptime >= GETDATE()

	UPDATE dbo.vmControl
	SET RequestedStoptime = NULL,
		StartTime = NULL
	WHERE StartTime IS NOT NULL
	AND RequestedStoptime <= GETDATE() 
	

	SELECT * FROM #vmActions
	  
		
  
	    
GO


