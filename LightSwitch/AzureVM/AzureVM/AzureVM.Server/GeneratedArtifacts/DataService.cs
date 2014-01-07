﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LightSwitchApplication
{
    #region Data Services
    
    /// <summary>
    /// Provides members to query and update data in the AzureVMData datasource.
    /// </summary>
    public sealed partial class AzureVMDataService
        : global::LightSwitchApplication.AzureVMData
    {
        #region Constructors
    
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public AzureVMDataService() : base()
        {
        }
    
        #endregion
    
        #region Private Properties
        
        /// <summary>
        /// Gets the Application object for this application.  The Application object provides access to active screens, methods to open screens and access to the current user.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        private global::LightSwitchApplication.Application Application
        {
            get
            {
                return global::LightSwitchApplication.Application.Current;
            }
        }
        
        /// <summary>
        /// Gets the containing data workspace.  The data workspace provides access to all data sources in the application.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        private global::LightSwitchApplication.DataWorkspace DataWorkspace
        {
            get
            {
                return (global::LightSwitchApplication.DataWorkspace)this.Details.DataWorkspace;
            }
        }
        
        #endregion
    
        #region Server Interceptions Points
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void vmControls_CanInsert(ref bool result);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void vmControls_CanUpdate(ref bool result);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void vmControls_CanDelete(ref bool result);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void vmControls_CanRead(ref bool result);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void vmControls_Inserting(global::LightSwitchApplication.vmControl entity);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void vmControls_Inserted(global::LightSwitchApplication.vmControl entity);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void vmControls_Updating(global::LightSwitchApplication.vmControl entity);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void vmControls_Updated(global::LightSwitchApplication.vmControl entity);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void vmControls_Deleting(global::LightSwitchApplication.vmControl entity);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void vmControls_Deleted(global::LightSwitchApplication.vmControl entity);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void vmControls_Validate(global::LightSwitchApplication.vmControl entity, global::Microsoft.LightSwitch.EntitySetValidationResultsBuilder results);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void vmControls_Filter(ref global::System.Linq.Expressions.Expression<global::System.Func<global::LightSwitchApplication.vmControl, bool>> filter);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void SaveChanges_CanExecute(ref bool result);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void SaveChanges_Executing();
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void SaveChanges_Executed();
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void SaveChanges_ExecuteFailed(global::System.Exception exception);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Query_Executing(global::Microsoft.LightSwitch.QueryExecutingDescriptor queryDescriptor);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Query_Executed(global::Microsoft.LightSwitch.QueryExecutedDescriptor queryDescriptor);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Query_ExecuteFailed(global::Microsoft.LightSwitch.QueryExecuteFailedDescriptor queryDescriptor);
    
        #endregion
    
        #region Details Class
    
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
        public static new class DetailsClass
        {
    
            static DetailsClass()
            {
            }
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Server.EntitySetEntry<global::LightSwitchApplication.AzureVMDataService, global::LightSwitchApplication.vmControl>
                __vmControlsEntry = new global::Microsoft.LightSwitch.Details.Framework.Server.EntitySetEntry<global::LightSwitchApplication.AzureVMDataService, global::LightSwitchApplication.vmControl>(
                    "vmControls",
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__vmControls_CanInsert,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__vmControls_CanUpdate,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__vmControls_CanDelete,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__vmControls_CanRead,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__vmControls_Inserting,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__vmControls_Inserted,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__vmControls_Updating,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__vmControls_Updated,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__vmControls_Deleting,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__vmControls_Deleted,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__vmControls_Validate,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__vmControls_Filter);
            private static bool __vmControls_CanInsert(global::LightSwitchApplication.AzureVMDataService d)
            {
                bool result = true;
                d.vmControls_CanInsert(ref result);
                return result;
            }
            private static bool __vmControls_CanUpdate(global::LightSwitchApplication.AzureVMDataService d)
            {
                bool result = true;
                d.vmControls_CanUpdate(ref result);
                return result;
            }
            private static bool __vmControls_CanDelete(global::LightSwitchApplication.AzureVMDataService d)
            {
                bool result = true;
                d.vmControls_CanDelete(ref result);
                return result;
            }
            private static bool __vmControls_CanRead(global::LightSwitchApplication.AzureVMDataService d)
            {
                bool result = true;
                d.vmControls_CanRead(ref result);
                return result;
            }
            private static void __vmControls_Inserting(global::LightSwitchApplication.AzureVMDataService d, global::LightSwitchApplication.vmControl e)
            {
                d.vmControls_Inserting(e);
            }
            private static void __vmControls_Inserted(global::LightSwitchApplication.AzureVMDataService d, global::LightSwitchApplication.vmControl e)
            {
                d.vmControls_Inserted(e);
            }
            private static void __vmControls_Updating(global::LightSwitchApplication.AzureVMDataService d, global::LightSwitchApplication.vmControl e)
            {
                d.vmControls_Updating(e);
            }
            private static void __vmControls_Updated(global::LightSwitchApplication.AzureVMDataService d, global::LightSwitchApplication.vmControl e)
            {
                d.vmControls_Updated(e);
            }
            private static void __vmControls_Deleting(global::LightSwitchApplication.AzureVMDataService d, global::LightSwitchApplication.vmControl e)
            {
                d.vmControls_Deleting(e);
            }
            private static void __vmControls_Deleted(global::LightSwitchApplication.AzureVMDataService d, global::LightSwitchApplication.vmControl e)
            {
                d.vmControls_Deleted(e);
            }
            private static void __vmControls_Validate(global::LightSwitchApplication.AzureVMDataService d, global::LightSwitchApplication.vmControl e, global::Microsoft.LightSwitch.EntitySetValidationResultsBuilder r)
            {
                d.vmControls_Validate(e, r);
            }
            private static global::System.Linq.Expressions.Expression<global::System.Func<global::LightSwitchApplication.vmControl, bool>> __vmControls_Filter(global::LightSwitchApplication.AzureVMDataService d)
            {
                global::System.Linq.Expressions.Expression<global::System.Func<global::LightSwitchApplication.vmControl, bool>> filter = null;
                d.vmControls_Filter(ref filter);
                return filter;
            }
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Server.OperationEntry<global::LightSwitchApplication.AzureVMDataService>
                __SaveChangesEntry = new global::Microsoft.LightSwitch.Details.Framework.Server.OperationEntry<global::LightSwitchApplication.AzureVMDataService>(
                    "SaveChanges",
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__SaveChanges_CanExecute,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__SaveChanges_Executing,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__SaveChanges_Executed,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__SaveChanges_Failed);
            private static bool __SaveChanges_CanExecute(global::LightSwitchApplication.AzureVMDataService d, bool r)
            {
                d.SaveChanges_CanExecute(ref r);
                return r;
            }
            private static void __SaveChanges_Executing(global::LightSwitchApplication.AzureVMDataService d, object[] args)
            {
                d.SaveChanges_Executing();
            }
            private static void __SaveChanges_Executed(global::LightSwitchApplication.AzureVMDataService d, object[] args)
            {
                d.SaveChanges_Executed();
            }
            private static void __SaveChanges_Failed(global::LightSwitchApplication.AzureVMDataService d, object[] args, global::System.Exception ex)
            {
                d.SaveChanges_ExecuteFailed(ex);
            }
    
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Server.QueryEntry<global::LightSwitchApplication.AzureVMDataService>
                ___QueryEntry = new global::Microsoft.LightSwitch.Details.Framework.Server.QueryEntry<global::LightSwitchApplication.AzureVMDataService>(
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__Query_Executing,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__Query_Executed,
                    global::LightSwitchApplication.AzureVMDataService.DetailsClass.__Query_Failed);
            private static void __Query_Executing(global::LightSwitchApplication.AzureVMDataService d, global::Microsoft.LightSwitch.QueryExecutingDescriptor queryDescriptor)
            {
                d.Query_Executing(queryDescriptor);
            }
            private static void __Query_Executed(global::LightSwitchApplication.AzureVMDataService d, global::Microsoft.LightSwitch.QueryExecutedDescriptor queryDescriptor)
            {
                d.Query_Executed(queryDescriptor);
            }
            private static void __Query_Failed(global::LightSwitchApplication.AzureVMDataService d, global::Microsoft.LightSwitch.QueryExecuteFailedDescriptor queryDescriptor)
            {
                d.Query_ExecuteFailed(queryDescriptor);
            }
        }
    
        #endregion
    }
    
    #endregion
}
