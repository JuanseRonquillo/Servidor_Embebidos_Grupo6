//https://www.eclipse.org/paho/clients/js/

function LED_1() {
	//alert("led on");
	//document.getElementById("sensor").innerHTML="led on";
  message = new Paho.MQTT.Message("1");
      message.destinationName = "juan.ronquillo@unach.edu.ec/T2";
      client.send(message);
  document. getElementById('Sensor_1').innerHTML='1';
  document. getElementById('Sensor_2').innerHTML='0';
  console.log('Se preciono el boton LED_1:');
} 

function LED_2(){	
	//alert("led off");
	message = new Paho.MQTT.Message("0");
    	message.destinationName = "juan.ronquillo@unach.edu.ec/T2";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
   document. getElementById('Sensor_1').innerHTML='0';
   document. getElementById('Sensor_2').innerHTML='1';
  console.log('Se preciono el boton LED_2:');
}





// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "juan.ronquillo@unach.edu.ec",
    password: "GunsnRoses12",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("juan.ronquillo@unach.edu.ec/T1");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "juan.ronquillo@unach.edu.ec/T2";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("Sensor_1").innerHTML=message.payloadString;
  }
  
