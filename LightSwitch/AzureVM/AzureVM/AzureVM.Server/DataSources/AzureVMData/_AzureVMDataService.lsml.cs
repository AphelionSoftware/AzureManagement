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
            entity.RequestedBy = this.Application.User.PersonId;// Environment.UserName;
        }

        partial void vmControls_Updating(vmControl entity)
        {
            entity.RequestedBy = this.Application.User.PersonId;// Environment.UserName;
        }
    }
}
