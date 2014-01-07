/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddVirtualMachine(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddVirtualMachine screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="vmControl" type="msls.application.vmControl">
        /// Gets or sets the vmControl for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddVirtualMachine.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddVirtualMachine", parameters);
    }

    function BrowsevmControls(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsevmControls screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="vmControls" type="msls.VisualCollection" elementType="msls.application.vmControl">
        /// Gets the vmControls for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsevmControls.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsevmControls", parameters);
    }

    function EditVirtualMachine(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EditVirtualMachine screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="vmControl" type="msls.application.vmControl">
        /// Gets or sets the vmControl for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EditVirtualMachine.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EditVirtualMachine", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddVirtualMachine: $defineScreen(AddVirtualMachine, [
            { name: "vmControl", kind: "local", type: lightSwitchApplication.vmControl }
        ], [
        ]),

        BrowsevmControls: $defineScreen(BrowsevmControls, [
            {
                name: "vmControls", kind: "collection", elementType: lightSwitchApplication.vmControl,
                createQuery: function () {
                    return this.dataWorkspace.AzureVMData.vmControls;
                }
            }
        ], [
        ]),

        EditVirtualMachine: $defineScreen(EditVirtualMachine, [
            { name: "vmControl", kind: "local", type: lightSwitchApplication.vmControl }
        ], [
        ]),

        showAddVirtualMachine: $defineShowScreen(function showAddVirtualMachine(vmControl, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddVirtualMachine screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddVirtualMachine", parameters, options);
        }),

        showBrowsevmControls: $defineShowScreen(function showBrowsevmControls(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsevmControls screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsevmControls", parameters, options);
        }),

        showEditVirtualMachine: $defineShowScreen(function showEditVirtualMachine(vmControl, options) {
            /// <summary>
            /// Asynchronously navigates forward to the EditVirtualMachine screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("EditVirtualMachine", parameters, options);
        })

    });

}(msls.application));
