USE [spinuptest]
GO

/****** Object:  Table [dbo].[vmControl]    Script Date: 19-12-2013 14:15:39 ******/
SET ANSI_NULLS OFF
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[vmControl](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[vmName] [nvarchar](50) NOT NULL,
	[StartTime] [datetime] NULL,
	[RequestedBy] [nvarchar](50) NOT NULL,
	[vmServiceName] [nvarchar](50) NOT NULL,
	[AzureSubscription] [nvarchar](50) NOT NULL,
	[RequestedStoptime] [datetime] NULL,
 CONSTRAINT [vmControl_PK_ID] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO


