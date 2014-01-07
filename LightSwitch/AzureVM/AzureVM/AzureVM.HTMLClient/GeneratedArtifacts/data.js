/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function vmControl(entitySet) {
        /// <summary>
        /// Represents the vmControl entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this vmControl.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this vmControl.
        /// </field>
        /// <field name="vmName" type="String">
        /// Gets or sets the vmName for this vmControl.
        /// </field>
        /// <field name="StartTime" type="Date">
        /// Gets or sets the startTime for this vmControl.
        /// </field>
        /// <field name="RequestedBy" type="String">
        /// Gets or sets the requestedBy for this vmControl.
        /// </field>
        /// <field name="vmServiceName" type="String">
        /// Gets or sets the vmServiceName for this vmControl.
        /// </field>
        /// <field name="AzureSubscription" type="String">
        /// Gets or sets the azureSubscription for this vmControl.
        /// </field>
        /// <field name="RequestedStoptime" type="Date">
        /// Gets or sets the requestedStoptime for this vmControl.
        /// </field>
        /// <field name="details" type="msls.application.vmControl.Details">
        /// Gets the details for this vmControl.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AzureVMData(dataWorkspace) {
        /// <summary>
        /// Represents the AzureVMData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="vmControls" type="msls.EntitySet">
        /// Gets the vmControls entity set.
        /// </field>
        /// <field name="details" type="msls.application.AzureVMData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="AzureVMData" type="msls.application.AzureVMData">
        /// Gets the AzureVMData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        vmControl: $defineEntity(vmControl, [
            { name: "ID", type: Number, isReadOnly: true },
            { name: "vmName", type: String },
            { name: "StartTime", type: Date },
            { name: "RequestedBy", type: String },
            { name: "vmServiceName", type: String },
            { name: "AzureSubscription", type: String },
            { name: "RequestedStoptime", type: Date }
        ]),

        AzureVMData: $defineDataService(AzureVMData, lightSwitchApplication.rootUri + "/AzureVMData.svc", [
            { name: "vmControls", elementType: vmControl }
        ], [
            {
                name: "vmControls_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.vmControls },
                        lightSwitchApplication.rootUri + "/AzureVMData.svc" + "/vmControls(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "AzureVMData", type: AzureVMData }
        ])

    });

}(msls.application));
