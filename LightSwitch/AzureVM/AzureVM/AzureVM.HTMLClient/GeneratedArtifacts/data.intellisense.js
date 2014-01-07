/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.vmControl, {
        /// <field>
        /// Called when a new vmControl is created.
        /// <br/>created(msls.application.vmControl entity)
        /// </field>
        created: [lightSwitchApplication.vmControl]
    });

}(msls.application));
