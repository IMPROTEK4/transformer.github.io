
var connection_status= false;
var subTopic='' ;


function button_connect(){
    clientID = document.getElementById("box_user_name").value;
    host = 'blithesome-chiropractor.cloudmqtt.com';
    port = 443;

    // Create a client instance
    // client = new Paho.MQTT.Client('e8f424ec.emqx.cloud', 8083, "test");
    client = new Paho.MQTT.Client(host, Number(port), clientID);

    // set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // connect the client
  client.connect({
    onSuccess: onConnect,
    // onFailure: onFailure,
    useSSL: true,

    userName: 'rwufzabs',
    password: 'kVZNw5Tuj6e5',
    mqttVersion:4
    
  });
}


// called when the client connects
function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    connection_status = true ;
    alert("Connect to server is success.")

    const textBox = document.getElementById('box_user_name');
    const connectButton = document.getElementById('button_connect');
    connectButton.disabled = true;

    // Allowed Box Topic
    const allowedTFID = document.getElementById('box_tran_ID');
          allowedTFID.disabled = false;
    // allowedTFID.style.backgroundColor = "yellow";

    // Locked Button 
    const Llockedbtnread = document.getElementById('button_read_data');
          Llockedbtnread.disabled = true;



  setTimeout(() => {
    // console.log('Connection successful!');

    // Clear the text box after connection
    //  textBox.value = '';
     textBox.disabled = true;
    //  textBox.style.backgroundColor ='greenyellow';

    // Disable the button once connected
    connectButton.disabled = true;
    connectButton.textContent = 'CONNECTED';
    connectButton.style.backgroundColor = 'royalblue';
  }, 10);
}


function call_data(){
    document.getElementById('box_tran_ID').disabled = true;
    if(document.getElementById('box_tran_ID').value != ''){
      subTopic = document.getElementById('box_tran_ID').value ;
      qos = 0;
      client.subscribe(subTopic);
      console.log("Client Subscribbing")
    }

    // DISPLAY ID OF TRANSFORMER
    displayID = document.getElementById('box_tran_ID').value;
      // displayID.style.backgroundColor ='greenyellow';
    if(displayID=="TF1"){
      document.getElementById('display_tran_ID').value='ID00001';
    }

    else if(displayID=="TF2"){
      document.getElementById('display_tran_ID').value='ID00002';
    }

    else if(displayID=="TF3"){
      document.getElementById('display_tran_ID').value='ID00003';
    }

    else if(displayID=="TF4"){
      document.getElementById('display_tran_ID').value='ID00004';
    }

  // ---Exchang Button Read Data
  const readlocked = document.getElementById('button_read_data');
    readlocked.disabled = true;
    readlocked.textContent = 'READING';
    readlocked.style.backgroundColor = 'lime' ;

  const stoplocked = document.getElementById('button_stopread_data');
    stoplocked.disabled = false;
    stoplocked.textContent = 'STOP';
    stoplocked.style.backgroundColor = 'rgb(218, 207, 207)' ;

  // Locked location
  const inputLocation = document.getElementById('openGoogleMap');
  inputLocation.disabled = true;

}

// ---Button StopRead Data
function stop_data() {
  // ---Exchang Button StopRead Data
  const stoplocked = document.getElementById('button_stopread_data');
    stoplocked.disabled = true;
    stoplocked.textContent = 'STOPED';
    stoplocked.style.backgroundColor = 'red' ;

  const readlocked = document.getElementById('button_read_data');
    readlocked.disabled = true;
    readlocked.textContent = 'READ';
    readlocked.style.backgroundColor = 'rgb(218, 207, 207)' ;

  // Locked location
  const inputLocation = document.getElementById('openGoogleMap');
  inputLocation.disabled = true;
    
    console.log("Client Unsubscript");
    // ---Subscribe from the topic
    subTopic = document.getElementById('box_tran_ID').value ;
    qos = 0;

    // ---Unsubscribe from the topic
    client.unsubscribe(subTopic);
    document.getElementById('box_tran_ID').disabled = false;

    // ---Clear the topic and data display
    document.getElementById('box_tran_ID').value = '';

    // ---Clear the current topic
    subTopic = null;

  // ---Clear dataDisplay in Table

    // ---Clear Map Data 
    document.getElementById('openGoogleMap').value = '' ;

    // ---Clear Data ID Transformer
    document.getElementById('display_tran_ID').value = '' ;

    // ---Clear Data Value Display for FEEDER 1:
    document.getElementById('feeder11_phaseA').innerHTML = '';
    document.getElementById('feeder11_phaseB').innerHTML = '';
    document.getElementById('feeder11_phaseC').innerHTML = '';
    document.getElementById('feeder11_Total').innerHTML ='';

    document.getElementById('feeder12_phaseA').innerHTML = '';
    document.getElementById('feeder12_phaseB').innerHTML = '';
    document.getElementById('feeder12_phaseC').innerHTML = '';
    document.getElementById('feeder12_Total').innerHTML ='';

    document.getElementById('feeder13_phaseA').innerHTML = '';
    document.getElementById('feeder13_phaseB').innerHTML = '';
    document.getElementById('feeder13_phaseC').innerHTML = '';
    document.getElementById('feeder13_Total').innerHTML ='';
    
    document.getElementById('feeder14_phaseA').innerHTML = '';
    document.getElementById('feeder14_phaseB').innerHTML = '';
    document.getElementById('feeder14_phaseC').innerHTML = '';
    document.getElementById('feeder14_Total').innerHTML ='';
    
    document.getElementById('feeder15_phaseA').innerHTML = '';
    document.getElementById('feeder15_phaseB').innerHTML = '';
    document.getElementById('feeder15_phaseC').innerHTML = '';
    document.getElementById('feeder15_Total').innerHTML ='';
    
    document.getElementById('feeder16_phaseA').innerHTML = '';
    document.getElementById('feeder16_phaseB').innerHTML = '';
    document.getElementById('feeder16_phaseC').innerHTML = '';
    document.getElementById('feeder16_Total').innerHTML ='';
    
    document.getElementById('feeder17_phaseA').innerHTML = '';
    document.getElementById('feeder17_phaseB').innerHTML = '';
    document.getElementById('feeder17_phaseC').innerHTML = '';
    document.getElementById('feeder17_Total').innerHTML ='';
    
    document.getElementById('feeder18_phaseA').innerHTML = '';
    document.getElementById('feeder18_phaseB').innerHTML = '';
    document.getElementById('feeder18_phaseC').innerHTML = '';
    document.getElementById('feeder18_Total').innerHTML ='';
    
    document.getElementById('feeder19_phaseA').innerHTML = '';
    document.getElementById('feeder19_phaseB').innerHTML = '';
    document.getElementById('feeder19_phaseC').innerHTML = '';
    document.getElementById('feeder19_Total').innerHTML ='';


    // ---Clear Data Value Display for FEEDER 2:
    document.getElementById('feeder21_phaseA').innerHTML = '';
    document.getElementById('feeder21_phaseB').innerHTML = '';
    document.getElementById('feeder21_phaseC').innerHTML = '';
    document.getElementById('feeder21_Total').innerHTML ='';
    
    document.getElementById('feeder22_phaseA').innerHTML = '';
    document.getElementById('feeder22_phaseB').innerHTML = '';
    document.getElementById('feeder22_phaseC').innerHTML = '';
    document.getElementById('feeder22_Total').innerHTML ='';
    
    document.getElementById('feeder23_phaseA').innerHTML = '';
    document.getElementById('feeder23_phaseB').innerHTML = '';
    document.getElementById('feeder23_phaseC').innerHTML = '';
    document.getElementById('feeder23_Total').innerHTML ='';
    
    document.getElementById('feeder24_phaseA').innerHTML = '';
    document.getElementById('feeder24_phaseB').innerHTML = '';
    document.getElementById('feeder24_phaseC').innerHTML = '';
    document.getElementById('feeder24_Total').innerHTML ='';
    
    document.getElementById('feeder25_phaseA').innerHTML = '';
    document.getElementById('feeder25_phaseB').innerHTML = '';
    document.getElementById('feeder25_phaseC').innerHTML = '';
    document.getElementById('feeder25_Total').innerHTML ='';
    
    document.getElementById('feeder26_phaseA').innerHTML = '';
    document.getElementById('feeder26_phaseB').innerHTML = '';
    document.getElementById('feeder26_phaseC').innerHTML = '';
    document.getElementById('feeder26_Total').innerHTML ='';
    
    document.getElementById('feeder27_phaseA').innerHTML = '';
    document.getElementById('feeder27_phaseB').innerHTML = '';
    document.getElementById('feeder27_phaseC').innerHTML = '';
    document.getElementById('feeder27_Total').innerHTML ='';
    
    document.getElementById('feeder28_phaseA').innerHTML = '';
    document.getElementById('feeder28_phaseB').innerHTML = '';
    document.getElementById('feeder28_phaseC').innerHTML = '';
    document.getElementById('feeder28_Total').innerHTML ='';
    
    document.getElementById('feeder29_phaseA').innerHTML = '';
    document.getElementById('feeder29_phaseB').innerHTML = '';
    document.getElementById('feeder29_phaseC').innerHTML = '';
    document.getElementById('feeder29_Total').innerHTML ='';


    // ---Clear Data Value Display for FEEDER 3:
    document.getElementById('feeder31_phaseA').innerHTML = '';
    document.getElementById('feeder31_phaseB').innerHTML = '';
    document.getElementById('feeder31_phaseC').innerHTML = '';
    document.getElementById('feeder31_Total').innerHTML ='';
    
    document.getElementById('feeder32_phaseA').innerHTML = '';
    document.getElementById('feeder32_phaseB').innerHTML = '';
    document.getElementById('feeder32_phaseC').innerHTML = '';
    document.getElementById('feeder32_Total').innerHTML ='';
    
    document.getElementById('feeder33_phaseA').innerHTML = '';
    document.getElementById('feeder33_phaseB').innerHTML = '';
    document.getElementById('feeder33_phaseC').innerHTML = '';
    document.getElementById('feeder33_Total').innerHTML ='';
    
    document.getElementById('feeder34_phaseA').innerHTML = '';
    document.getElementById('feeder34_phaseB').innerHTML = '';
    document.getElementById('feeder34_phaseC').innerHTML = '';
    document.getElementById('feeder34_Total').innerHTML ='';
    
    document.getElementById('feeder35_phaseA').innerHTML = '';
    document.getElementById('feeder35_phaseB').innerHTML = '';
    document.getElementById('feeder35_phaseC').innerHTML = '';
    document.getElementById('feeder35_Total').innerHTML ='';
    
    document.getElementById('feeder36_phaseA').innerHTML = '';
    document.getElementById('feeder36_phaseB').innerHTML = '';
    document.getElementById('feeder36_phaseC').innerHTML = '';
    document.getElementById('feeder36_Total').innerHTML ='';
    
    document.getElementById('feeder37_phaseA').innerHTML = '';
    document.getElementById('feeder37_phaseB').innerHTML = '';
    document.getElementById('feeder37_phaseC').innerHTML = '';
    document.getElementById('feeder37_Total').innerHTML ='';
    
    document.getElementById('feeder38_phaseA').innerHTML = '';
    document.getElementById('feeder38_phaseB').innerHTML = '';
    document.getElementById('feeder38_phaseC').innerHTML = '';
    document.getElementById('feeder38_Total').innerHTML ='';
    
    document.getElementById('feeder39_phaseA').innerHTML = '';
    document.getElementById('feeder39_phaseB').innerHTML = '';
    document.getElementById('feeder39_phaseC').innerHTML = '';
    document.getElementById('feeder39_Total').innerHTML ='';


    // ---Clear Data Value Display for FEEDER 4:
    document.getElementById('feeder41_phaseA').innerHTML = '';
    document.getElementById('feeder41_phaseB').innerHTML = '';
    document.getElementById('feeder41_phaseC').innerHTML = '';
    document.getElementById('feeder41_Total').innerHTML ='';
    
    document.getElementById('feeder42_phaseA').innerHTML = '';
    document.getElementById('feeder42_phaseB').innerHTML = '';
    document.getElementById('feeder42_phaseC').innerHTML = '';
    document.getElementById('feeder42_Total').innerHTML ='';
    
    document.getElementById('feeder43_phaseA').innerHTML = '';
    document.getElementById('feeder43_phaseB').innerHTML = '';
    document.getElementById('feeder43_phaseC').innerHTML = '';
    document.getElementById('feeder43_Total').innerHTML ='';
    
    document.getElementById('feeder44_phaseA').innerHTML = '';
    document.getElementById('feeder44_phaseB').innerHTML = '';
    document.getElementById('feeder44_phaseC').innerHTML = '';
    document.getElementById('feeder44_Total').innerHTML ='';
    
    document.getElementById('feeder45_phaseA').innerHTML = '';
    document.getElementById('feeder45_phaseB').innerHTML = '';
    document.getElementById('feeder45_phaseC').innerHTML = '';
    document.getElementById('feeder45_Total').innerHTML ='';
    
    document.getElementById('feeder46_phaseA').innerHTML = '';
    document.getElementById('feeder46_phaseB').innerHTML = '';
    document.getElementById('feeder46_phaseC').innerHTML = '';
    document.getElementById('feeder46_Total').innerHTML ='';
    
    document.getElementById('feeder47_phaseA').innerHTML = '';
    document.getElementById('feeder47_phaseB').innerHTML = '';
    document.getElementById('feeder47_phaseC').innerHTML = '';
    document.getElementById('feeder47_Total').innerHTML ='';
    
    document.getElementById('feeder48_phaseA').innerHTML = '';
    document.getElementById('feeder48_phaseB').innerHTML = '';
    document.getElementById('feeder48_phaseC').innerHTML = '';
    document.getElementById('feeder48_Total').innerHTML ='';
    
    document.getElementById('feeder49_phaseA').innerHTML = '';
    document.getElementById('feeder49_phaseB').innerHTML = '';
    document.getElementById('feeder49_phaseC').innerHTML = '';
    document.getElementById('feeder49_Total').innerHTML ='';
  


    // -------------CLEAR DATA TOTAL CONSOMSION PHASE A--------------------
    // ---Clear Data Total Active Power Phase A
    document.getElementById('total1_phaseA').innerHTML = '';

    // ---Clear Data Total Reactive Power Phase A
    document.getElementById('total2_phaseA').innerHTML = '';

    // ---Clear Data Total Apparent Phase A
    document.getElementById('total3_phaseA').innerHTML = '';

    // ---Clear Data Total Voltage Phase A
    document.getElementById('total4_phaseA').innerHTML = '';

    // ---Clear Data Total Current Phase A
    document.getElementById('total5_phaseA').innerHTML = '';

    // ---Clear Data Total Power Factor Phase A
    document.getElementById('total6_phaseA').innerHTML = '';

    // ---Clear Data Total Zero Sequence Current Phase A
    document.getElementById('total7_phaseA').innerHTML = '';

    // ---Clear Data Total Current Unbalance Phase A
    document.getElementById('total8_phaseA').innerHTML = '';

    // ---Clear Data Total Energy Phase A
    document.getElementById('total9_phaseA').innerHTML = '';


    
    // -------------TOTAL CONSOMSION PHASE B--------------------
    // ---Clear Data Total Active Power Phase B
    document.getElementById('total1_phaseB').innerHTML = '';

    // ---Clear Data Total Reactive Power Phase B
    document.getElementById('total2_phaseB').innerHTML = '';

    // ---Clear Data Total Apparent Phase B
    document.getElementById('total3_phaseB').innerHTML = '';

    // ---Clear Data Total Voltage Phase B
    document.getElementById('total4_phaseB').innerHTML = '';

    // ---Clear Data Total Current Phase B
    document.getElementById('total5_phaseB').innerHTML = '';

    // ---Clear Data Total Power Factor Phase B
    document.getElementById('total6_phaseB').innerHTML = '';

    // ---Clear Data Total Zero Sequence Current Phase B
    document.getElementById('total7_phaseB').innerHTML = '';

    // ---Clear Data Total Current Unbalance Phase B
    document.getElementById('total8_phaseB').innerHTML = '';

    // ---Clear Data Total Energy Phase B
    document.getElementById('total9_phaseB').innerHTML = '';


    // -------------TOTAL CONSOMSION PHASE C--------------------
    // ---Clear Data Total Active Power Phase C
    document.getElementById('total1_phaseC').innerHTML = '';

    // ---Clear Data Total Reactive Power Phase C
    document.getElementById('total2_phaseC').innerHTML = '';

    // ---Clear Data Total Apparent Phase C
    document.getElementById('total3_phaseC').innerHTML = '';

    // ---Clear Data Total Voltage Phase C
    document.getElementById('total4_phaseC').innerHTML = '';

    // ---Clear Data Total Current Phase C
    document.getElementById('total5_phaseC').innerHTML = '';

    // ---Clear Data Total Power Factor Phase C
    document.getElementById('total6_phaseC').innerHTML = '';

    // ---Clear Data Total Zero Sequence Current Phase C
    document.getElementById('total7_phaseC').innerHTML = '';

    // ---Clear Data Total Current Unbalance Phase C
    document.getElementById('total8_phaseC').innerHTML = '';

    // ---Clear Data Total Energy Phase C
    document.getElementById('total9_phaseC').innerHTML = '';


    // -------------TOTAL CONSOMSION TOTAL CONSUMSION--------------------
    // ---Clear Data Total Active Power TOTAL CONSUMSION
    document.getElementById('total1_Total').innerHTML = '';

    // ---Clear Data Total Reactive Power TOTAL CONSUMSION
    document.getElementById('total2_Total').innerHTML = '';

    // ---Clear Data Total Apparent TOTAL CONSUMSION
    document.getElementById('total3_Total').innerHTML = '';

    // ---Clear Data Total Voltage TOTAL CONSUMSION
    document.getElementById('total4_Total').innerHTML = '';

    // ---Clear Data Total Current TOTAL CONSUMSION
    document.getElementById('total5_Total').innerHTML = '';

    // ---Clear Data Total Power Factor TOTAL CONSUMSION
    document.getElementById('total6_Total').innerHTML = '';

    // ---Clear Data Total Zero Sequence Current TOTAL CONSUMSION
    document.getElementById('total7_Total').innerHTML = '';

    // ---Clear Data Total Current Unbalance TOTAL CONSUMSION
    document.getElementById('total8_Total').innerHTML = '';

    // ---Clear Data Total Energy TOTAL CONSUMSION
    document.getElementById('total9_Total').innerHTML = '';
}
  
// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
    alert("MQTT Connection Lost");
    alert("Please input Username again.")

    const textBox = document.getElementById('box_user_name');
    // Clear the text box after connection
      textBox.value = '';
      textBox.disabled = false;
      textBox.style.backgroundColor ='yellow';

    const connectButton = document.getElementById('button_connect');
      connectButton.disabled = false;

    // Disable the button once disconnect
      connectButton.disabled = false;
      connectButton.textContent = 'DISCONNECT';
      connectButton.style.backgroundColor = 'red';

    // Disable the button read data
    const readlocked = document.getElementById('button_read_data');
      readlocked.disabled = false;
      readlocked.textContent = 'READ';
      readlocked.style.backgroundColor = 'aliceblue' ;

    // Disable the button stop read data
    const stoplocked = document.getElementById('button_stopread_data');
      stoplocked.disabled = false;
      stoplocked.textContent = 'STOP';
      stoplocked.style.backgroundColor = 'aliceblue' ;

  }
}


// ---called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);

    const values = message.payloadString.split(',');

     // Iterate through each value and cut only two digits behind the period
    const formattedValues = values.map(value => {
      // Parse the value to a float and use toFixed to cut to two digits behind the period
      return parseFloat(value).toFixed(2);
    });
  

    // Allowed location
    const inputLocation = document.getElementById('openGoogleMap');
    inputLocation.disabled = false;

    // Display value for FEEDER 1:
  if (document.getElementById('box_tran_ID').disabled = true&values[1]=='F1'){

    // Location of Transformer
    document.getElementById('openGoogleMap').value = values[0] || '';
    document.getElementById('feeder11_phaseA').textContent = ( parseFloat(formattedValues[2])).toFixed(2) || '';
    document.getElementById('feeder11_phaseB').textContent = ( parseFloat(formattedValues[3])).toFixed(2) || '';
    document.getElementById('feeder11_phaseC').textContent = ( parseFloat(formattedValues[4])).toFixed(2) || '';

    // Convert strings to numbers and add them and Fixed 2 string (Example: 12.123 => 12.12)
    // (parseFloat(formattedValues[2]) + parseFloat(formattedValues[3]) + parseFloat(formattedValues[4])).toFixed(2);
    document.getElementById('feeder11_Total').textContent = ( parseFloat(formattedValues[2]) 
    + parseFloat(formattedValues[3]) + parseFloat(formattedValues[4])).toFixed(2);
    
    document.getElementById('feeder12_phaseA').textContent = ( parseFloat(formattedValues[5])).toFixed(2) || '';
    document.getElementById('feeder12_phaseB').textContent = ( parseFloat(formattedValues[6])).toFixed(2) || '';
    document.getElementById('feeder12_phaseC').textContent = ( parseFloat(formattedValues[7])).toFixed(2) || '';
    document.getElementById('feeder12_Total').textContent = ( parseFloat(formattedValues[5]) 
    + parseFloat(formattedValues[6]) + parseFloat(formattedValues[7])).toFixed(2);
    
    document.getElementById('feeder13_phaseA').textContent = ( parseFloat(formattedValues[8])).toFixed(2) || '';
    document.getElementById('feeder13_phaseB').textContent = ( parseFloat(formattedValues[9])).toFixed(2) || '';
    document.getElementById('feeder13_phaseC').textContent = ( parseFloat(formattedValues[10])).toFixed(2) || '';
    document.getElementById('feeder13_Total').textContent = ( parseFloat(formattedValues[8]) 
    + parseFloat(formattedValues[9]) + parseFloat(formattedValues[10])).toFixed(2);
    
    document.getElementById('feeder14_phaseA').textContent = ( parseFloat(formattedValues[11])).toFixed(2) || '';
    document.getElementById('feeder14_phaseB').textContent = ( parseFloat(formattedValues[12])).toFixed(2) || '';
    document.getElementById('feeder14_phaseC').textContent = ( parseFloat(formattedValues[13])).toFixed(2) || '';
    
    document.getElementById('feeder15_phaseA').textContent = ( parseFloat(formattedValues[14])).toFixed(2) || '';
    document.getElementById('feeder15_phaseB').textContent = ( parseFloat(formattedValues[15])).toFixed(2) || '';
    document.getElementById('feeder15_phaseC').textContent = ( parseFloat(formattedValues[16])).toFixed(2) || '';
    document.getElementById('feeder15_Total').textContent = ( parseFloat(formattedValues[14]) 
    + parseFloat(formattedValues[15]) + parseFloat(formattedValues[16])).toFixed(2);
    
    document.getElementById('feeder16_phaseA').textContent = ( parseFloat(formattedValues[17])).toFixed(2) || '';
    document.getElementById('feeder16_phaseB').textContent = ( parseFloat(formattedValues[18])).toFixed(2) || '';
    document.getElementById('feeder16_phaseC').textContent = ( parseFloat(formattedValues[19])).toFixed(2) || '';
    
    document.getElementById('feeder17_phaseA').textContent = ( parseFloat(formattedValues[20])).toFixed(2) || '';
    document.getElementById('feeder17_phaseB').textContent = ( parseFloat(formattedValues[21])).toFixed(2) || '';
    document.getElementById('feeder17_phaseC').textContent = ( parseFloat(formattedValues[22])).toFixed(2) || '';
    document.getElementById('feeder17_Total').textContent = ( parseFloat(formattedValues[20]) 
    + parseFloat(formattedValues[21]) + parseFloat(formattedValues[22])).toFixed(2);
    
    // feeder18_phaseA.value = ;
    document.getElementById('feeder18_phaseA').textContent = (parseFloat(formattedValues[23])*(0.1)).toFixed(2) || '' ;
    document.getElementById('feeder18_phaseB').textContent = ( parseFloat(formattedValues[24])*(0.1)).toFixed(2) || '';
    document.getElementById('feeder18_phaseC').textContent = ( parseFloat(formattedValues[25])*(0.1)).toFixed(2) || '';
    document.getElementById('feeder18_Total').textContent = ( (parseFloat(formattedValues[23]) 
    + parseFloat(formattedValues[24]) + parseFloat(formattedValues[25]))*(0.1)).toFixed(2);
    
    document.getElementById('feeder19_phaseA').textContent = ( parseFloat(formattedValues[26])).toFixed(2) || '';
    document.getElementById('feeder19_phaseB').textContent = ( parseFloat(formattedValues[27])).toFixed(2) || '';
    document.getElementById('feeder19_phaseC').textContent = ( parseFloat(formattedValues[28])).toFixed(2) || '';
    document.getElementById('feeder19_Total').textContent = ( parseFloat(formattedValues[26]) 
    + parseFloat(formattedValues[27]) + parseFloat(formattedValues[28])).toFixed(2);
  }

  // Display value for FEEDER 2:
  if (values[29]=='F2'){
    document.getElementById('feeder21_phaseA').textContent = ( parseFloat(formattedValues[30])).toFixed(2) || '';
    document.getElementById('feeder21_phaseB').textContent = ( parseFloat(formattedValues[31])).toFixed(2) || '';
    document.getElementById('feeder21_phaseC').textContent = ( parseFloat(formattedValues[32])).toFixed(2) || '';
    document.getElementById('feeder21_Total').textContent = ( parseFloat(formattedValues[30]) 
    + parseFloat(formattedValues[31]) + parseFloat(formattedValues[32])).toFixed(2);
    
    document.getElementById('feeder22_phaseA').textContent = ( parseFloat(formattedValues[33])).toFixed(2) || '';
    document.getElementById('feeder22_phaseB').textContent = ( parseFloat(formattedValues[34])).toFixed(2) || '';
    document.getElementById('feeder22_phaseC').textContent = ( parseFloat(formattedValues[35])).toFixed(2) || '';
    document.getElementById('feeder22_Total').textContent = ( parseFloat(formattedValues[33]) 
    + parseFloat(formattedValues[34]) + parseFloat(formattedValues[35])).toFixed(2);
    
    document.getElementById('feeder23_phaseA').textContent = ( parseFloat(formattedValues[36])).toFixed(2) || '';
    document.getElementById('feeder23_phaseB').textContent = ( parseFloat(formattedValues[37])).toFixed(2) || '';
    document.getElementById('feeder23_phaseC').textContent = ( parseFloat(formattedValues[38])).toFixed(2) || '';
    document.getElementById('feeder23_Total').textContent = ( parseFloat(formattedValues[36]) 
    + parseFloat(formattedValues[37]) + parseFloat(formattedValues[38])).toFixed(2);
    
    document.getElementById('feeder24_phaseA').textContent = ( parseFloat(formattedValues[39])).toFixed(2) || '';
    document.getElementById('feeder24_phaseB').textContent = ( parseFloat(formattedValues[40])).toFixed(2) || '';
    document.getElementById('feeder24_phaseC').textContent = ( parseFloat(formattedValues[41])).toFixed(2) || '';
    
    document.getElementById('feeder25_phaseA').textContent = ( parseFloat(formattedValues[42])).toFixed(2) || '';
    document.getElementById('feeder25_phaseB').textContent = ( parseFloat(formattedValues[43])).toFixed(2) || '';
    document.getElementById('feeder25_phaseC').textContent = ( parseFloat(formattedValues[44])).toFixed(2) || '';
    document.getElementById('feeder25_Total').textContent = ( parseFloat(formattedValues[42]) 
    + parseFloat(formattedValues[43]) + parseFloat(formattedValues[44])).toFixed(2);
    
    document.getElementById('feeder26_phaseA').textContent = ( parseFloat(formattedValues[45])).toFixed(2) || '';
    document.getElementById('feeder26_phaseB').textContent = ( parseFloat(formattedValues[46])).toFixed(2) || '';
    document.getElementById('feeder26_phaseC').textContent = ( parseFloat(formattedValues[47])).toFixed(2) || '';
    
    document.getElementById('feeder27_phaseA').textContent = ( parseFloat(formattedValues[48])).toFixed(2) || '';
    document.getElementById('feeder27_phaseB').textContent = ( parseFloat(formattedValues[49])).toFixed(2) || '';
    document.getElementById('feeder27_phaseC').textContent = ( parseFloat(formattedValues[50])).toFixed(2) || '';
    document.getElementById('feeder27_Total').textContent = ( parseFloat(formattedValues[48]) 
    + parseFloat(formattedValues[49]) + parseFloat(formattedValues[50])).toFixed(2);
    
    document.getElementById('feeder28_phaseA').textContent = ( parseFloat(formattedValues[51])*(0.1)).toFixed(2) || '';
    document.getElementById('feeder28_phaseB').textContent = ( parseFloat(formattedValues[52])*(0.1)).toFixed(2) || '';
    document.getElementById('feeder28_phaseC').textContent = ( parseFloat(formattedValues[53])*(0.1)).toFixed(2) || '';
    document.getElementById('feeder28_Total').textContent = ( (parseFloat(formattedValues[51]) 
    + parseFloat(formattedValues[52]) + parseFloat(formattedValues[53]))*(0.1)).toFixed(2);
    
    document.getElementById('feeder29_phaseA').textContent = ( parseFloat(formattedValues[54])).toFixed(2) || '';
    document.getElementById('feeder29_phaseB').textContent = ( parseFloat(formattedValues[55])).toFixed(2) || '';
    document.getElementById('feeder29_phaseC').textContent = ( parseFloat(formattedValues[56])).toFixed(2) || '';
    document.getElementById('feeder29_Total').textContent = ( parseFloat(formattedValues[54]) 
    + parseFloat(formattedValues[55]) + parseFloat(formattedValues[56])).toFixed(2);
  }

  // Display value for FEEDER 3:
  if (values[57]=='F3'){
    document.getElementById('feeder31_phaseA').textContent = ( parseFloat(formattedValues[58])).toFixed(2) || '';
    document.getElementById('feeder31_phaseB').textContent = ( parseFloat(formattedValues[59])).toFixed(2) || '';
    document.getElementById('feeder31_phaseC').textContent = ( parseFloat(formattedValues[60])).toFixed(2) || '';
    document.getElementById('feeder31_Total').textContent = ( parseFloat(formattedValues[58]) 
    + parseFloat(formattedValues[59]) + parseFloat(formattedValues[60])).toFixed(2);
    
    document.getElementById('feeder32_phaseA').textContent = ( parseFloat(formattedValues[61])).toFixed(2) || '';
    document.getElementById('feeder32_phaseB').textContent = ( parseFloat(formattedValues[62])).toFixed(2) || '';
    document.getElementById('feeder32_phaseC').textContent = ( parseFloat(formattedValues[63])).toFixed(2) || '';
    document.getElementById('feeder32_Total').textContent = ( parseFloat(formattedValues[61]) 
    + parseFloat(formattedValues[62]) + parseFloat(formattedValues[63])).toFixed(2);
    
    document.getElementById('feeder33_phaseA').textContent = ( parseFloat(formattedValues[64])).toFixed(2) || '';
    document.getElementById('feeder33_phaseB').textContent = ( parseFloat(formattedValues[65])).toFixed(2) || '';
    document.getElementById('feeder33_phaseC').textContent = ( parseFloat(formattedValues[66])).toFixed(2) || '';
    document.getElementById('feeder33_Total').textContent = ( parseFloat(formattedValues[64]) 
    + parseFloat(formattedValues[65]) + parseFloat(formattedValues[66])).toFixed(2);
    
    document.getElementById('feeder34_phaseA').textContent = ( parseFloat(formattedValues[67])).toFixed(2) || '';
    document.getElementById('feeder34_phaseB').textContent = ( parseFloat(formattedValues[68])).toFixed(2) || '';
    document.getElementById('feeder34_phaseC').textContent = ( parseFloat(formattedValues[69])).toFixed(2) || '';
    
    document.getElementById('feeder35_phaseA').textContent = ( parseFloat(formattedValues[70])).toFixed(2) || '';
    document.getElementById('feeder35_phaseB').textContent = ( parseFloat(formattedValues[71])).toFixed(2) || '';
    document.getElementById('feeder35_phaseC').textContent = ( parseFloat(formattedValues[72])).toFixed(2) || '';
    document.getElementById('feeder35_Total').textContent = ( parseFloat(formattedValues[70]) 
    + parseFloat(formattedValues[71]) + parseFloat(formattedValues[72])).toFixed(2);
    
    document.getElementById('feeder36_phaseA').textContent = ( parseFloat(formattedValues[73])).toFixed(2) || '';
    document.getElementById('feeder36_phaseB').textContent = ( parseFloat(formattedValues[74])).toFixed(2) || '';
    document.getElementById('feeder36_phaseC').textContent = ( parseFloat(formattedValues[75])).toFixed(2) || '';
    
    document.getElementById('feeder37_phaseA').textContent = ( parseFloat(formattedValues[76])).toFixed(2) || '';
    document.getElementById('feeder37_phaseB').textContent = ( parseFloat(formattedValues[77])).toFixed(2) || '';
    document.getElementById('feeder37_phaseC').textContent = ( parseFloat(formattedValues[78])).toFixed(2) || '';
    document.getElementById('feeder37_Total').textContent = ( parseFloat(formattedValues[76]) 
    + parseFloat(formattedValues[77]) + parseFloat(formattedValues[78])).toFixed(2);
    
    document.getElementById('feeder38_phaseA').textContent = ( parseFloat(formattedValues[79])*(0.1)).toFixed(2) || '';
    document.getElementById('feeder38_phaseB').textContent = ( parseFloat(formattedValues[80])*(0.1)).toFixed(2) || '';
    document.getElementById('feeder38_phaseC').textContent = ( parseFloat(formattedValues[81])*(0.1)).toFixed(2) || '';
    document.getElementById('feeder38_Total').textContent = ( (parseFloat(formattedValues[79]) 
    + parseFloat(formattedValues[80]) + parseFloat(formattedValues[81]))*(0.1)).toFixed(2);
    
    document.getElementById('feeder39_phaseA').textContent = ( parseFloat(formattedValues[82])).toFixed(2) || '';
    document.getElementById('feeder39_phaseB').textContent = ( parseFloat(formattedValues[83])).toFixed(2) || '';
    document.getElementById('feeder39_phaseC').textContent = ( parseFloat(formattedValues[84])).toFixed(2) || '';
    document.getElementById('feeder39_Total').textContent = ( parseFloat(formattedValues[82]) 
    + parseFloat(formattedValues[83]) + parseFloat(formattedValues[84])).toFixed(2);
  }

  // Display value for FEEDER 4:
  if (values[85]=='F4'){
    document.getElementById('feeder41_phaseA').textContent = ( parseFloat(formattedValues[86])).toFixed(2) || '';
    document.getElementById('feeder41_phaseB').textContent = ( parseFloat(formattedValues[87])).toFixed(2) || '';
    document.getElementById('feeder41_phaseC').textContent = ( parseFloat(formattedValues[88])).toFixed(2) || '';
    document.getElementById('feeder41_Total').textContent = ( parseFloat(formattedValues[86]) 
    + parseFloat(formattedValues[87]) + parseFloat(formattedValues[88])).toFixed(2);
    
    document.getElementById('feeder42_phaseA').textContent = ( parseFloat(formattedValues[89])).toFixed(2) || '';
    document.getElementById('feeder42_phaseB').textContent = ( parseFloat(formattedValues[90])).toFixed(2) || '';
    document.getElementById('feeder42_phaseC').textContent = ( parseFloat(formattedValues[91])).toFixed(2) || '';
    document.getElementById('feeder42_Total').textContent = ( parseFloat(formattedValues[89]) 
    + parseFloat(formattedValues[90]) + parseFloat(formattedValues[91])).toFixed(2);
    
    document.getElementById('feeder43_phaseA').textContent = ( parseFloat(formattedValues[92])).toFixed(2) || '';
    document.getElementById('feeder43_phaseB').textContent = ( parseFloat(formattedValues[93])).toFixed(2) || '';
    document.getElementById('feeder43_phaseC').textContent = ( parseFloat(formattedValues[94])).toFixed(2) || '';
    document.getElementById('feeder43_Total').textContent = ( parseFloat(formattedValues[92]) 
    + parseFloat(formattedValues[93]) + parseFloat(formattedValues[94])).toFixed(2);
    
    document.getElementById('feeder44_phaseA').textContent = ( parseFloat(formattedValues[95])).toFixed(2) || '';
    document.getElementById('feeder44_phaseB').textContent = ( parseFloat(formattedValues[96])).toFixed(2) || '';
    document.getElementById('feeder44_phaseC').textContent = ( parseFloat(formattedValues[97])).toFixed(2) || ''; 
    
    document.getElementById('feeder45_phaseA').textContent = ( parseFloat(formattedValues[98])).toFixed(2) || '';
    document.getElementById('feeder45_phaseB').textContent = ( parseFloat(formattedValues[99])).toFixed(2) || '';
    document.getElementById('feeder45_phaseC').textContent = ( parseFloat(formattedValues[100])).toFixed(2) || '';
    document.getElementById('feeder45_Total').textContent = ( parseFloat(formattedValues[98]) 
    + parseFloat(formattedValues[99]) + parseFloat(formattedValues[100])).toFixed(2);
    
    document.getElementById('feeder46_phaseA').textContent = ( parseFloat(formattedValues[101])).toFixed(2) || '';
    document.getElementById('feeder46_phaseB').textContent = ( parseFloat(formattedValues[102])).toFixed(2) || '';
    document.getElementById('feeder46_phaseC').textContent = ( parseFloat(formattedValues[103])).toFixed(2) || '';
    
    document.getElementById('feeder47_phaseA').textContent = ( parseFloat(formattedValues[104])).toFixed(2) || '';
    document.getElementById('feeder47_phaseB').textContent = ( parseFloat(formattedValues[105])).toFixed(2) || '';
    document.getElementById('feeder47_phaseC').textContent = ( parseFloat(formattedValues[106])).toFixed(2) || '';
    document.getElementById('feeder47_Total').textContent = ( parseFloat(formattedValues[104]) 
    + parseFloat(formattedValues[105]) + parseFloat(formattedValues[106])).toFixed(2);
    
    document.getElementById('feeder48_phaseA').textContent = ( parseFloat(formattedValues[107])*(0.1)).toFixed(2) || '';
    document.getElementById('feeder48_phaseB').textContent = ( parseFloat(formattedValues[108])*(0.1)).toFixed(2) || '';
    document.getElementById('feeder48_phaseC').textContent = ( parseFloat(formattedValues[109])*(0.1)).toFixed(2) || '';
    document.getElementById('feeder48_Total').textContent = ( (parseFloat(formattedValues[107]) 
    + parseFloat(formattedValues[108]) + parseFloat(formattedValues[109]))*(0.1)).toFixed(2);
    
    document.getElementById('feeder49_phaseA').textContent = ( parseFloat(formattedValues[110])).toFixed(2) || '';
    document.getElementById('feeder49_phaseB').textContent = ( parseFloat(formattedValues[111])).toFixed(2) || '';
    document.getElementById('feeder49_phaseC').textContent = ( parseFloat(formattedValues[112])).toFixed(2) || '';
    document.getElementById('feeder49_Total').textContent = ( parseFloat(formattedValues[110]) 
    + parseFloat(formattedValues[111]) + parseFloat(formattedValues[112])).toFixed(2);
  }


  // -------------TOTAL CONSOMSION PHASE A--------------------
  // Total Active Power Phase A
  document.getElementById('total1_phaseA').textContent = ( parseFloat(formattedValues[2]) + parseFloat(formattedValues[30]) 
  + parseFloat(formattedValues[58]) + parseFloat(formattedValues[86])).toFixed(2);

    // Total Reactive Power Phase A
    document.getElementById('total2_phaseA').textContent = ( parseFloat(formattedValues[5]) + parseFloat(formattedValues[33]) 
    + parseFloat(formattedValues[61]) + parseFloat(formattedValues[89])).toFixed(2);

    // Total Apparent Phase A
    document.getElementById('total3_phaseA').textContent = ( parseFloat(formattedValues[8]) + parseFloat(formattedValues[36]) 
    + parseFloat(formattedValues[64]) + parseFloat(formattedValues[92])).toFixed(2);

    // Total Voltage Phase A
    document.getElementById('total4_phaseA').textContent = ( parseFloat(formattedValues[11])).toFixed(2) || '';

    // Total Current Phase A
    document.getElementById('total5_phaseA').textContent = ( parseFloat(formattedValues[14]) + parseFloat(formattedValues[42]) 
    + parseFloat(formattedValues[70]) + parseFloat(formattedValues[98])).toFixed(2); 

    // Total Power Factor Phase A
    document.getElementById('total6_phaseA').textContent = ( parseFloat(formattedValues[17]) + parseFloat(formattedValues[45]) 
    + parseFloat(formattedValues[73]) + parseFloat(formattedValues[101])).toFixed(2); 

    // Total Zero Sequence Current Phase A
    document.getElementById('total7_phaseA').textContent = ( parseFloat(formattedValues[20]) + parseFloat(formattedValues[48]) 
    + parseFloat(formattedValues[76]) + parseFloat(formattedValues[104])).toFixed(2); 

    // Total Current Unbalance Phase A
    document.getElementById('total8_phaseA').textContent = ( (parseFloat(formattedValues[23]) + parseFloat(formattedValues[51]) 
    + parseFloat(formattedValues[79]) + parseFloat(formattedValues[107]))*(0.1)).toFixed(2); 

    // Total Energy Phase A
    document.getElementById('total9_phaseA').textContent = ( parseFloat(formattedValues[26]) + parseFloat(formattedValues[54]) 
    + parseFloat(formattedValues[82]) + parseFloat(formattedValues[110])).toFixed(2); 
  


    
  // -------------TOTAL CONSOMSION PHASE B--------------------
  // Total Active Power Phase B
    document.getElementById('total1_phaseB').textContent = ( parseFloat(formattedValues[3]) + parseFloat(formattedValues[31]) 
    + parseFloat(formattedValues[59]) + parseFloat(formattedValues[87])).toFixed(2); 

    // Total Reactive Power Phase B
    document.getElementById('total2_phaseB').textContent = ( parseFloat(formattedValues[6]) + parseFloat(formattedValues[34]) 
    + parseFloat(formattedValues[62]) + parseFloat(formattedValues[90])).toFixed(2); 

    // Total Apparent Phase B
    document.getElementById('total3_phaseB').textContent = ( parseFloat(formattedValues[9]) + parseFloat(formattedValues[37]) 
    + parseFloat(formattedValues[65]) + parseFloat(formattedValues[93])).toFixed(2); 

    // Total Voltage Phase B
    document.getElementById('total4_phaseB').textContent = ( parseFloat(formattedValues[12])).toFixed(2) || '';

    // Total Current Phase B
    document.getElementById('total5_phaseB').textContent = ( parseFloat(formattedValues[15]) + parseFloat(formattedValues[43]) 
    + parseFloat(formattedValues[71]) + parseFloat(formattedValues[99])).toFixed(2); 

    // Total Power Factor Phase B
    document.getElementById('total6_phaseB').textContent = ( parseFloat(formattedValues[18]) + parseFloat(formattedValues[46]) 
    + parseFloat(formattedValues[74]) + parseFloat(formattedValues[102])).toFixed(2); 

    // Total Zero Sequence Current Phase B
    document.getElementById('total7_phaseB').textContent = ( parseFloat(formattedValues[21]) + parseFloat(formattedValues[49]) 
    + parseFloat(formattedValues[77]) + parseFloat(formattedValues[105])).toFixed(2); 

    // Total Current Unbalance Phase B
    document.getElementById('total8_phaseB').textContent = ( (parseFloat(formattedValues[24]) + parseFloat(formattedValues[52]) 
    + parseFloat(formattedValues[80]) + parseFloat(formattedValues[108]))*(0.1)).toFixed(2); 

    // Total Energy Phase B
    document.getElementById('total9_phaseB').textContent = ( parseFloat(formattedValues[27]) + parseFloat(formattedValues[55]) 
    + parseFloat(formattedValues[83]) + parseFloat(formattedValues[111])).toFixed(2); 



  // -------------TOTAL CONSOMSION PHASE C--------------------
  // Total Active Power Phase C
    document.getElementById('total1_phaseC').textContent = ( parseFloat(formattedValues[4]) + parseFloat(formattedValues[32]) 
    + parseFloat(formattedValues[60]) + parseFloat(formattedValues[88])).toFixed(2); 

    // Total Reactive Power Phase C
    document.getElementById('total2_phaseC').textContent = ( parseFloat(formattedValues[7]) + parseFloat(formattedValues[35]) 
    + parseFloat(formattedValues[63]) + parseFloat(formattedValues[91])).toFixed(2); 

    // Total Apparent Phase C
    document.getElementById('total3_phaseC').textContent = ( parseFloat(formattedValues[10]) + parseFloat(formattedValues[38]) 
    + parseFloat(formattedValues[66]) + parseFloat(formattedValues[94])).toFixed(2); 

    // Total Voltage Phase C
    document.getElementById('total4_phaseC').textContent = ( parseFloat(formattedValues[13])).toFixed(2) || ''; 

    // Total Current Phase C
    document.getElementById('total5_phaseC').textContent = ( parseFloat(formattedValues[16]) + parseFloat(formattedValues[44]) 
    + parseFloat(formattedValues[72]) + parseFloat(formattedValues[100])).toFixed(2); 

    // Total Power Factor Phase C
    document.getElementById('total6_phaseC').textContent = ( parseFloat(formattedValues[19]) + parseFloat(formattedValues[47]) 
    + parseFloat(formattedValues[75]) + parseFloat(formattedValues[103])).toFixed(2); 

    // Total Zero Sequence Current Phase C
    document.getElementById('total7_phaseC').textContent = ( parseFloat(formattedValues[22]) + parseFloat(formattedValues[50]) 
    + parseFloat(formattedValues[78]) + parseFloat(formattedValues[106])).toFixed(2); 

    // Total Current Unbalance Phase C
    document.getElementById('total8_phaseC').textContent = ( (parseFloat(formattedValues[25]) + parseFloat(formattedValues[53]) 
    + parseFloat(formattedValues[81]) + parseFloat(formattedValues[109]))*(0.1)).toFixed(2); 

    // Total Energy Phase C
    document.getElementById('total9_phaseC').textContent = ( parseFloat(formattedValues[28]) + parseFloat(formattedValues[56]) 
    + parseFloat(formattedValues[84]) + parseFloat(formattedValues[112])).toFixed(2); 



  // -------------TOTAL CONSOMSION TOTAL CONSUMSION--------------------
  // Total Active Power TOTAL CONSUMSION
    document.getElementById('total1_Total').textContent = 
    ( parseFloat(formattedValues[2]) + parseFloat(formattedValues[3]) + parseFloat(formattedValues[4]) + parseFloat(formattedValues[30])
    + parseFloat(formattedValues[31]) + parseFloat(formattedValues[32]) + parseFloat(formattedValues[58]) + parseFloat(formattedValues[59]) 
    + parseFloat(formattedValues[60]) + parseFloat(formattedValues[86]) + parseFloat(formattedValues[87]) + parseFloat(formattedValues[88]) ).toFixed(2); 

    // Total Reactive Power TOTAL CONSUMSION
    document.getElementById('total2_Total').textContent =
    ( parseFloat(formattedValues[5]) + parseFloat(formattedValues[6]) + parseFloat(formattedValues[7]) + parseFloat(formattedValues[33])
    + parseFloat(formattedValues[34]) + parseFloat(formattedValues[35]) + parseFloat(formattedValues[61]) + parseFloat(formattedValues[62]) 
    + parseFloat(formattedValues[63]) + parseFloat(formattedValues[89]) + parseFloat(formattedValues[90]) + parseFloat(formattedValues[91]) ).toFixed(2);

    // Total Apparent TOTAL CONSUMSION
    document.getElementById('total3_Total').textContent = 
    ( parseFloat(formattedValues[8]) + parseFloat(formattedValues[9]) + parseFloat(formattedValues[10]) + parseFloat(formattedValues[36])
    + parseFloat(formattedValues[37]) + parseFloat(formattedValues[38]) + parseFloat(formattedValues[64]) + parseFloat(formattedValues[65]) 
    + parseFloat(formattedValues[66]) + parseFloat(formattedValues[92]) + parseFloat(formattedValues[93]) + parseFloat(formattedValues[94]) ).toFixed(2);

    // Total Voltage TOTAL CONSUMSION

    // Total Current TOTAL CONSUMSION
    document.getElementById('total5_Total').textContent = 
    ( parseFloat(formattedValues[14]) + parseFloat(formattedValues[15]) + parseFloat(formattedValues[16]) + parseFloat(formattedValues[42])
    + parseFloat(formattedValues[43]) + parseFloat(formattedValues[44]) + parseFloat(formattedValues[70]) + parseFloat(formattedValues[71]) 
    + parseFloat(formattedValues[72]) + parseFloat(formattedValues[98]) + parseFloat(formattedValues[99]) + parseFloat(formattedValues[100]) ).toFixed(2);

    // Total Power Factor TOTAL CONSUMSION

    // Total Zero Sequence Current TOTAL CONSUMSION
    document.getElementById('total7_Total').textContent = 
    ( parseFloat(formattedValues[20]) + parseFloat(formattedValues[21]) + parseFloat(formattedValues[22]) + parseFloat(formattedValues[48])
    + parseFloat(formattedValues[49]) + parseFloat(formattedValues[50]) + parseFloat(formattedValues[76]) + parseFloat(formattedValues[77]) 
    + parseFloat(formattedValues[78]) + parseFloat(formattedValues[104]) + parseFloat(formattedValues[105]) + parseFloat(formattedValues[106]) ).toFixed(2);

    // Total Current Unbalance TOTAL CONSUMSION
    document.getElementById('total8_Total').textContent = 
    ( (parseFloat(formattedValues[23]) + parseFloat(formattedValues[24]) + parseFloat(formattedValues[25]) + parseFloat(formattedValues[51])
    + parseFloat(formattedValues[52]) + parseFloat(formattedValues[53]) + parseFloat(formattedValues[79]) + parseFloat(formattedValues[80]) 
    + parseFloat(formattedValues[81]) + parseFloat(formattedValues[107]) + parseFloat(formattedValues[108]) + parseFloat(formattedValues[109]))*(0.1) ).toFixed(2);

    // Total Energy TOTAL CONSUMSION
    document.getElementById('total9_Total').textContent = 
    ( parseFloat(formattedValues[26]) + parseFloat(formattedValues[27]) + parseFloat(formattedValues[28]) + parseFloat(formattedValues[54])
    + parseFloat(formattedValues[55]) + parseFloat(formattedValues[56]) + parseFloat(formattedValues[82]) + parseFloat(formattedValues[83]) 
    + parseFloat(formattedValues[84]) + parseFloat(formattedValues[110]) + parseFloat(formattedValues[111]) + parseFloat(formattedValues[112]) ).toFixed(2);
}

     

