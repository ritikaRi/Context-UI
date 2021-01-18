sap.ui.controller("sap.iot.ua.modeler.ext.controller.ListReportExt", {
	ActivateDataModels: function (oEvent) {
		var settings = {
			"url": "IOTAS-CONTENT-MANAGER/metadata/v1/model.svc/DataModels('\Id\')",
			"method": "PATCH",
			"timeout": 0,
			"headers": {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			"data": JSON.stringify({
				"Status": "ACTIVE"
			})
		};

		$.ajax(settings).done(function (response) {
			alert("Processing Activation of Data Model");

		});
	},
	DeactivateDataModels: function (oEvent) {
		var settings = {
			"url": "IOTAS-CONTENT-MANAGER/metadata/v1/model.svc/DataModels(\Id\)",
			"method": "PATCH",
			"timeout": 0,
			"headers": {
				"Content-Type": "application/json"
			},
			"data": JSON.stringify({
				"Status": "Deactive"
			})
		};

		$.ajax(settings).done(function (response) {
			alert("Processing Deactivation of Data Model");
		});
	}
});