$(document).ready(function() {
	$('#get-info').bind('click', function(event) {//instalando los plugins de cordoca device

		console.log('click');

		$( '#list-info' ).empty();//llama en el html este id vacio

		$( '#list-info' ).append(//llama en el html este id que contiene los siguientes li con los plugins

			'<li>' + device.cordova + '</li>' +//este es el plugin device.cordova

			'<li>' + device.model + '</li>' +//plugin.model
			
			'<li>' + device.platform + '</li>' +//plugin.platform

			'<li>' + device.uuid + '</li>' +//plugin.uuid

			'<li>' + device.version + '</li>'//plugin.version
		);

		event.preventDefault();

	});
});