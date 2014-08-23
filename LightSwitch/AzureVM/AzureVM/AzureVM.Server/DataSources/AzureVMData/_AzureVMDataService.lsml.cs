using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
namespace LightSwitchApplication
{
    public partial class AzureVMDataService
    {
        //private string strUser = "";
        //public string UserName
        //{
        //    get
        //    {
        //        if (strUser == "")
        //        {
        //            switch (Application.User.Name)
        //            {
        //                case "TestUser":
        //                    strUser = Environment.UserName;
        //                    break;
        //                case "":
        //                    strUser = Environment.UserName;
        //                    break;
        //                default:
        //                    strUser = Application.User.Name.Split('|')[2];
        //                    break;
        //            }

        //            if (strUser == "")
        //            {
        //                strUser = Application.User.PersonId;
        //            }

        //        }
        //        return strUser;
        //    }
        //}


        partial void vmControls_Inserting(vmControl entity)
        {
            try
            {
                if (this.Application.User.PersonId == null)
                {
                    entity.RequestedBy = this.Application.User.PersonId;

                }
                else if (Environment.UserName == null)
                {
                    entity.RequestedBy = Environment.UserName;

                }
                else
                {
                    entity.RequestedBy = "External User";
                }

            }
            catch (System.Exception ex ) {
                entity.RequestedBy = "External User error: " + ex.InnerException;
             
            }

        }

        partial void vmControls_Updating(vmControl entity)
        {
            try
            {
                if (this.Application.User.PersonId == null)
                {
                    entity.RequestedBy = this.Application.User.PersonId;

                }
                else if (Environment.UserName == null)
                {
                    entity.RequestedBy = Environment.UserName;

                }
                else
                {
                    entity.RequestedBy = "External User";
                }

            }
            catch (System.Exception ex)
            {
                entity.RequestedBy = "External User error: " + ex.InnerException;

            }
        }
    }
}
