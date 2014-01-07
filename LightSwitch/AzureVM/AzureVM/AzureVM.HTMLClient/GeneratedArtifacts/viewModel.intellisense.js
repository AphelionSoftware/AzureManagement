/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddVirtualMachine.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddVirtualMachine
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddVirtualMachine,
            data: lightSwitchApplication.AddVirtualMachine,
            value: lightSwitchApplication.AddVirtualMachine
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddVirtualMachine,
            data: lightSwitchApplication.AddVirtualMachine,
            value: lightSwitchApplication.vmControl
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: lightSwitchApplication.vmControl
        },
        vmName: {
            _$class: msls.ContentItem,
            _$name: "vmName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: String
        },
        StartTime: {
            _$class: msls.ContentItem,
            _$name: "StartTime",
            _$parentName: "left",
            screen: lightSwitchApplication.AddVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: Date
        },
        RequestedBy: {
            _$class: msls.ContentItem,
            _$name: "RequestedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.AddVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: lightSwitchApplication.vmControl
        },
        vmServiceName: {
            _$class: msls.ContentItem,
            _$name: "vmServiceName",
            _$parentName: "right",
            screen: lightSwitchApplication.AddVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: String
        },
        AzureSubscription: {
            _$class: msls.ContentItem,
            _$name: "AzureSubscription",
            _$parentName: "right",
            screen: lightSwitchApplication.AddVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: String
        },
        RequestedStoptime: {
            _$class: msls.ContentItem,
            _$name: "RequestedStoptime",
            _$parentName: "right",
            screen: lightSwitchApplication.AddVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddVirtualMachine
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddVirtualMachine, {
        /// <field>
        /// Called when a new AddVirtualMachine screen is created.
        /// <br/>created(msls.application.AddVirtualMachine screen)
        /// </field>
        created: [lightSwitchApplication.AddVirtualMachine],
        /// <field>
        /// Called before changes on an active AddVirtualMachine screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddVirtualMachine screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddVirtualMachine],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddVirtualMachine().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddVirtualMachine().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddVirtualMachine().findContentItem("left"); }],
        /// <field>
        /// Called after the vmName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        vmName_postRender: [$element, function () { return new lightSwitchApplication.AddVirtualMachine().findContentItem("vmName"); }],
        /// <field>
        /// Called after the StartTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartTime_postRender: [$element, function () { return new lightSwitchApplication.AddVirtualMachine().findContentItem("StartTime"); }],
        /// <field>
        /// Called after the RequestedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequestedBy_postRender: [$element, function () { return new lightSwitchApplication.AddVirtualMachine().findContentItem("RequestedBy"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddVirtualMachine().findContentItem("right"); }],
        /// <field>
        /// Called after the vmServiceName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        vmServiceName_postRender: [$element, function () { return new lightSwitchApplication.AddVirtualMachine().findContentItem("vmServiceName"); }],
        /// <field>
        /// Called after the AzureSubscription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AzureSubscription_postRender: [$element, function () { return new lightSwitchApplication.AddVirtualMachine().findContentItem("AzureSubscription"); }],
        /// <field>
        /// Called after the RequestedStoptime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequestedStoptime_postRender: [$element, function () { return new lightSwitchApplication.AddVirtualMachine().findContentItem("RequestedStoptime"); }]
    });

    lightSwitchApplication.BrowsevmControls.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsevmControls
        },
        vmControlList: {
            _$class: msls.ContentItem,
            _$name: "vmControlList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsevmControls,
            data: lightSwitchApplication.BrowsevmControls,
            value: lightSwitchApplication.BrowsevmControls
        },
        vmControl: {
            _$class: msls.ContentItem,
            _$name: "vmControl",
            _$parentName: "vmControlList",
            screen: lightSwitchApplication.BrowsevmControls,
            data: lightSwitchApplication.BrowsevmControls,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsevmControls,
                _$entry: {
                    elementType: lightSwitchApplication.vmControl
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "vmControl",
            screen: lightSwitchApplication.BrowsevmControls,
            data: lightSwitchApplication.vmControl,
            value: lightSwitchApplication.vmControl
        },
        vmName: {
            _$class: msls.ContentItem,
            _$name: "vmName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsevmControls,
            data: lightSwitchApplication.vmControl,
            value: String
        },
        StartTime: {
            _$class: msls.ContentItem,
            _$name: "StartTime",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsevmControls,
            data: lightSwitchApplication.vmControl,
            value: Date
        },
        RequestedBy: {
            _$class: msls.ContentItem,
            _$name: "RequestedBy",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsevmControls,
            data: lightSwitchApplication.vmControl,
            value: String
        },
        vmServiceName: {
            _$class: msls.ContentItem,
            _$name: "vmServiceName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsevmControls,
            data: lightSwitchApplication.vmControl,
            value: String
        },
        AzureSubscription: {
            _$class: msls.ContentItem,
            _$name: "AzureSubscription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsevmControls,
            data: lightSwitchApplication.vmControl,
            value: String
        },
        RequestedStoptime: {
            _$class: msls.ContentItem,
            _$name: "RequestedStoptime",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsevmControls,
            data: lightSwitchApplication.vmControl,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsevmControls
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsevmControls, {
        /// <field>
        /// Called when a new BrowsevmControls screen is created.
        /// <br/>created(msls.application.BrowsevmControls screen)
        /// </field>
        created: [lightSwitchApplication.BrowsevmControls],
        /// <field>
        /// Called before changes on an active BrowsevmControls screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsevmControls screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsevmControls],
        /// <field>
        /// Called after the vmControlList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        vmControlList_postRender: [$element, function () { return new lightSwitchApplication.BrowsevmControls().findContentItem("vmControlList"); }],
        /// <field>
        /// Called after the vmControl content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        vmControl_postRender: [$element, function () { return new lightSwitchApplication.BrowsevmControls().findContentItem("vmControl"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowsevmControls().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the vmName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        vmName_postRender: [$element, function () { return new lightSwitchApplication.BrowsevmControls().findContentItem("vmName"); }],
        /// <field>
        /// Called after the StartTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartTime_postRender: [$element, function () { return new lightSwitchApplication.BrowsevmControls().findContentItem("StartTime"); }],
        /// <field>
        /// Called after the RequestedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequestedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowsevmControls().findContentItem("RequestedBy"); }],
        /// <field>
        /// Called after the vmServiceName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        vmServiceName_postRender: [$element, function () { return new lightSwitchApplication.BrowsevmControls().findContentItem("vmServiceName"); }],
        /// <field>
        /// Called after the AzureSubscription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AzureSubscription_postRender: [$element, function () { return new lightSwitchApplication.BrowsevmControls().findContentItem("AzureSubscription"); }],
        /// <field>
        /// Called after the RequestedStoptime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequestedStoptime_postRender: [$element, function () { return new lightSwitchApplication.BrowsevmControls().findContentItem("RequestedStoptime"); }]
    });

    lightSwitchApplication.EditVirtualMachine.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EditVirtualMachine
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EditVirtualMachine,
            data: lightSwitchApplication.EditVirtualMachine,
            value: lightSwitchApplication.EditVirtualMachine
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.EditVirtualMachine,
            data: lightSwitchApplication.EditVirtualMachine,
            value: lightSwitchApplication.vmControl
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.EditVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: lightSwitchApplication.vmControl
        },
        vmName: {
            _$class: msls.ContentItem,
            _$name: "vmName",
            _$parentName: "left",
            screen: lightSwitchApplication.EditVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: String
        },
        StartTime: {
            _$class: msls.ContentItem,
            _$name: "StartTime",
            _$parentName: "left",
            screen: lightSwitchApplication.EditVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: Date
        },
        RequestedBy: {
            _$class: msls.ContentItem,
            _$name: "RequestedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.EditVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.EditVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: lightSwitchApplication.vmControl
        },
        vmServiceName: {
            _$class: msls.ContentItem,
            _$name: "vmServiceName",
            _$parentName: "right",
            screen: lightSwitchApplication.EditVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: String
        },
        AzureSubscription: {
            _$class: msls.ContentItem,
            _$name: "AzureSubscription",
            _$parentName: "right",
            screen: lightSwitchApplication.EditVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: String
        },
        RequestedStoptime: {
            _$class: msls.ContentItem,
            _$name: "RequestedStoptime",
            _$parentName: "right",
            screen: lightSwitchApplication.EditVirtualMachine,
            data: lightSwitchApplication.vmControl,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EditVirtualMachine
        }
    };

    msls._addEntryPoints(lightSwitchApplication.EditVirtualMachine, {
        /// <field>
        /// Called when a new EditVirtualMachine screen is created.
        /// <br/>created(msls.application.EditVirtualMachine screen)
        /// </field>
        created: [lightSwitchApplication.EditVirtualMachine],
        /// <field>
        /// Called before changes on an active EditVirtualMachine screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EditVirtualMachine screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EditVirtualMachine],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.EditVirtualMachine().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.EditVirtualMachine().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.EditVirtualMachine().findContentItem("left"); }],
        /// <field>
        /// Called after the vmName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        vmName_postRender: [$element, function () { return new lightSwitchApplication.EditVirtualMachine().findContentItem("vmName"); }],
        /// <field>
        /// Called after the StartTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartTime_postRender: [$element, function () { return new lightSwitchApplication.EditVirtualMachine().findContentItem("StartTime"); }],
        /// <field>
        /// Called after the RequestedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequestedBy_postRender: [$element, function () { return new lightSwitchApplication.EditVirtualMachine().findContentItem("RequestedBy"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.EditVirtualMachine().findContentItem("right"); }],
        /// <field>
        /// Called after the vmServiceName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        vmServiceName_postRender: [$element, function () { return new lightSwitchApplication.EditVirtualMachine().findContentItem("vmServiceName"); }],
        /// <field>
        /// Called after the AzureSubscription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AzureSubscription_postRender: [$element, function () { return new lightSwitchApplication.EditVirtualMachine().findContentItem("AzureSubscription"); }],
        /// <field>
        /// Called after the RequestedStoptime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequestedStoptime_postRender: [$element, function () { return new lightSwitchApplication.EditVirtualMachine().findContentItem("RequestedStoptime"); }]
    });

}(msls.application));