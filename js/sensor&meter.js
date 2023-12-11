
var connection_status= false;
var subTopic='' ;


function button_connect(){
    clientID = document.getElementById("box_user_name").value;
    host = 'g6db6412.us-east-1.emqx.cloud';
    port = 8084;

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

    userName: 'IMPROTECH',
    password: 'improtech2024',
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

    // Split the string into an array using comma as the delimiter
    const values = message.payloadString.split(',');

    // TOPIC = document.getElementById('box_tran_ID').value;

    // Allowed location
    const inputLocation = document.getElementById('openGoogleMap');
    inputLocation.disabled = false;

    // Display value for FEEDER 1:
  if (document.getElementById('box_tran_ID').disabled = true&values[1]=='F1'){

    // Location of Transformer
    document.getElementById('openGoogleMap').value = values[0] || '' ;

    document.getElementById('feeder11_phaseA').textContent = values[2] || '';
    document.getElementById('feeder11_phaseB').textContent = values[3] || '';
    document.getElementById('feeder11_phaseC').textContent = values[4] || '';
    document.getElementById('feeder11_Total').textContent = Number(values[2])+Number(values[3])+Number(values[4]);
    
    document.getElementById('feeder12_phaseA').textContent = values[5] || '';
    document.getElementById('feeder12_phaseB').textContent = values[6] || '';
    document.getElementById('feeder12_phaseC').textContent = values[7] || '';
    document.getElementById('feeder12_Total').textContent = Number(values[5])+Number(values[6])+Number(values[7]);
    
    document.getElementById('feeder13_phaseA').textContent = values[8] || '';
    document.getElementById('feeder13_phaseB').textContent = values[9] || '';
    document.getElementById('feeder13_phaseC').textContent = values[10] || '';
    document.getElementById('feeder13_Total').textContent = Number(values[8])+Number(values[9])+Number(values[10]);
    
    document.getElementById('feeder14_phaseA').textContent = values[11] || '';
    document.getElementById('feeder14_phaseB').textContent = values[12] || '';
    document.getElementById('feeder14_phaseC').textContent = values[13] || '';
    document.getElementById('feeder14_Total').textContent = Number(values[11])+Number(values[12])+Number(values[13]);
    
    document.getElementById('feeder15_phaseA').textContent = values[14] || '';
    document.getElementById('feeder15_phaseB').textContent = values[15] || '';
    document.getElementById('feeder15_phaseC').textContent = values[16] || '';
    document.getElementById('feeder15_Total').textContent = Number(values[14])+Number(values[15])+Number(values[16]);
    
    document.getElementById('feeder16_phaseA').textContent = values[17] || '';
    document.getElementById('feeder16_phaseB').textContent = values[18] || '';
    document.getElementById('feeder16_phaseC').textContent = values[19] || '';
    document.getElementById('feeder16_Total').textContent = Number(values[17])+Number(values[18])+Number(values[19]);
    
    document.getElementById('feeder17_phaseA').textContent = values[20] || '';
    document.getElementById('feeder17_phaseB').textContent = values[21] || '';
    document.getElementById('feeder17_phaseC').textContent = values[22] || '';
    document.getElementById('feeder17_Total').textContent = Number(values[20])+Number(values[21])+Number(values[22]);
    
    document.getElementById('feeder18_phaseA').textContent = values[23] || '';
    document.getElementById('feeder18_phaseB').textContent = values[24] || '';
    document.getElementById('feeder18_phaseC').textContent = values[25] || '';
    document.getElementById('feeder18_Total').textContent = Number(values[23])+Number(values[24])+Number(values[25]);
    
    document.getElementById('feeder19_phaseA').textContent = values[26] || '';
    document.getElementById('feeder19_phaseB').textContent = values[27] || '';
    document.getElementById('feeder19_phaseC').textContent = values[28] || '';
    document.getElementById('feeder19_Total').textContent = Number(values[26])+Number(values[27])+Number(values[28]);
  }

  // Display value for FEEDER 2:
  if (values[29]=='F2'){
    document.getElementById('feeder21_phaseA').textContent = values[30] || '';
    document.getElementById('feeder21_phaseB').textContent = values[31] || '';
    document.getElementById('feeder21_phaseC').textContent = values[32] || '';
    document.getElementById('feeder21_Total').textContent = Number(values[30])+Number(values[31])+Number(values[32]);
    
    document.getElementById('feeder22_phaseA').textContent = values[33] || '';
    document.getElementById('feeder22_phaseB').textContent = values[34] || '';
    document.getElementById('feeder22_phaseC').textContent = values[35] || '';
    document.getElementById('feeder22_Total').textContent = Number(values[33])+Number(values[34])+Number(values[35]);
    
    document.getElementById('feeder23_phaseA').textContent = values[36] || '';
    document.getElementById('feeder23_phaseB').textContent = values[37] || '';
    document.getElementById('feeder23_phaseC').textContent = values[38] || '';
    document.getElementById('feeder23_Total').textContent = Number(values[36])+Number(values[37])+Number(values[38]);
    
    document.getElementById('feeder24_phaseA').textContent = values[39] || '';
    document.getElementById('feeder24_phaseB').textContent = values[40] || '';
    document.getElementById('feeder24_phaseC').textContent = values[41] || '';
    document.getElementById('feeder24_Total').textContent = Number(values[39])+Number(values[40])+Number(values[41]);
    
    document.getElementById('feeder25_phaseA').textContent = values[42] || '';
    document.getElementById('feeder25_phaseB').textContent = values[43] || '';
    document.getElementById('feeder25_phaseC').textContent = values[44] || '';
    document.getElementById('feeder25_Total').textContent = Number(values[42])+Number(values[43])+Number(values[44]);
    
    document.getElementById('feeder26_phaseA').textContent = values[45] || '';
    document.getElementById('feeder26_phaseB').textContent = values[46] || '';
    document.getElementById('feeder26_phaseC').textContent = values[47] || '';
    document.getElementById('feeder26_Total').textContent = Number(values[45])+Number(values[46])+Number(values[47]);
    
    document.getElementById('feeder27_phaseA').textContent = values[48] || '';
    document.getElementById('feeder27_phaseB').textContent = values[49] || '';
    document.getElementById('feeder27_phaseC').textContent = values[50] || '';
    document.getElementById('feeder27_Total').textContent = Number(values[48])+Number(values[49])+Number(values[50]);
    
    document.getElementById('feeder28_phaseA').textContent = values[51] || '';
    document.getElementById('feeder28_phaseB').textContent = values[52] || '';
    document.getElementById('feeder28_phaseC').textContent = values[53] || '';
    document.getElementById('feeder28_Total').textContent = Number(values[51])+Number(values[52])+Number(values[53]);
    
    document.getElementById('feeder29_phaseA').textContent = values[54] || '';
    document.getElementById('feeder29_phaseB').textContent = values[55] || '';
    document.getElementById('feeder29_phaseC').textContent = values[56] || '';
    document.getElementById('feeder29_Total').textContent = Number(values[54])+Number(values[55])+Number(values[56]);
  }

  // Display value for FEEDER 3:
  if (values[57]=='F3'){
    document.getElementById('feeder31_phaseA').textContent = values[58] || '';
    document.getElementById('feeder31_phaseB').textContent = values[59] || '';
    document.getElementById('feeder31_phaseC').textContent = values[60] || '';
    document.getElementById('feeder31_Total').textContent = Number(values[58])+Number(values[59])+Number(values[60]);
    
    document.getElementById('feeder32_phaseA').textContent = values[61] || '';
    document.getElementById('feeder32_phaseB').textContent = values[62] || '';
    document.getElementById('feeder32_phaseC').textContent = values[63] || '';
    document.getElementById('feeder32_Total').textContent = Number(values[61])+Number(values[62])+Number(values[63]);
    
    document.getElementById('feeder33_phaseA').textContent = values[64] || '';
    document.getElementById('feeder33_phaseB').textContent = values[65] || '';
    document.getElementById('feeder33_phaseC').textContent = values[66] || '';
    document.getElementById('feeder33_Total').textContent = Number(values[64])+Number(values[65])+Number(values[66]);
    
    document.getElementById('feeder34_phaseA').textContent = values[67] || '';
    document.getElementById('feeder34_phaseB').textContent = values[68] || '';
    document.getElementById('feeder34_phaseC').textContent = values[69] || '';
    document.getElementById('feeder34_Total').textContent = Number(values[67])+Number(values[68])+Number(values[69]);
    
    document.getElementById('feeder35_phaseA').textContent = values[70] || '';
    document.getElementById('feeder35_phaseB').textContent = values[71] || '';
    document.getElementById('feeder35_phaseC').textContent = values[72] || '';
    document.getElementById('feeder35_Total').textContent = Number(values[70])+Number(values[71])+Number(values[72]);
    
    document.getElementById('feeder36_phaseA').textContent = values[73] || '';
    document.getElementById('feeder36_phaseB').textContent = values[74] || '';
    document.getElementById('feeder36_phaseC').textContent = values[75] || '';
    document.getElementById('feeder36_Total').textContent = Number(values[73])+Number(values[74])+Number(values[75]);
    
    document.getElementById('feeder37_phaseA').textContent = values[76] || '';
    document.getElementById('feeder37_phaseB').textContent = values[77] || '';
    document.getElementById('feeder37_phaseC').textContent = values[78] || '';
    document.getElementById('feeder37_Total').textContent = Number(values[76])+Number(values[77])+Number(values[78]);
    
    document.getElementById('feeder38_phaseA').textContent = values[79] || '';
    document.getElementById('feeder38_phaseB').textContent = values[80] || '';
    document.getElementById('feeder38_phaseC').textContent = values[81] || '';
    document.getElementById('feeder38_Total').textContent = Number(values[79])+Number(values[80])+Number(values[81]);
    
    document.getElementById('feeder39_phaseA').textContent = values[82] || '';
    document.getElementById('feeder39_phaseB').textContent = values[83] || '';
    document.getElementById('feeder39_phaseC').textContent = values[84] || '';
    document.getElementById('feeder39_Total').textContent = Number(values[82])+Number(values[83])+Number(values[84]);
  }

  // Display value for FEEDER 4:
  if (values[85]=='F4'){
    document.getElementById('feeder41_phaseA').textContent = values[86] || '';
    document.getElementById('feeder41_phaseB').textContent = values[87] || '';
    document.getElementById('feeder41_phaseC').textContent = values[88] || '';
    document.getElementById('feeder41_Total').textContent = Number(values[86])+Number(values[87])+Number(values[88]);
    
    document.getElementById('feeder42_phaseA').textContent = values[89] || '';
    document.getElementById('feeder42_phaseB').textContent = values[90] || '';
    document.getElementById('feeder42_phaseC').textContent = values[91] || '';
    document.getElementById('feeder42_Total').textContent = Number(values[89])+Number(values[90])+Number(values[91]);
    
    document.getElementById('feeder43_phaseA').textContent = values[92] || '';
    document.getElementById('feeder43_phaseB').textContent = values[93] || '';
    document.getElementById('feeder43_phaseC').textContent = values[94] || '';
    document.getElementById('feeder43_Total').textContent = Number(values[92])+Number(values[93])+Number(values[94]);
    
    document.getElementById('feeder44_phaseA').textContent = values[95] || '';
    document.getElementById('feeder44_phaseB').textContent = values[96] || '';
    document.getElementById('feeder44_phaseC').textContent = values[97] || '';
    document.getElementById('feeder44_Total').textContent = Number(values[95])+Number(values[96])+Number(values[97]);
    
    document.getElementById('feeder45_phaseA').textContent = values[98] || '';
    document.getElementById('feeder45_phaseB').textContent = values[99] || '';
    document.getElementById('feeder45_phaseC').textContent = values[100] || '';
    document.getElementById('feeder45_Total').textContent = Number(values[98])+Number(values[99])+Number(values[100]);
    
    document.getElementById('feeder46_phaseA').textContent = values[101] || '';
    document.getElementById('feeder46_phaseB').textContent = values[102] || '';
    document.getElementById('feeder46_phaseC').textContent = values[103] || '';
    document.getElementById('feeder46_Total').textContent = Number(values[101])+Number(values[102])+Number(values[103]);
    
    document.getElementById('feeder47_phaseA').textContent = values[104] || '';
    document.getElementById('feeder47_phaseB').textContent = values[105] || '';
    document.getElementById('feeder47_phaseC').textContent = values[106] || '';
    document.getElementById('feeder47_Total').textContent = Number(values[104])+Number(values[105])+Number(values[106]);
    
    document.getElementById('feeder48_phaseA').textContent = values[107] || '';
    document.getElementById('feeder48_phaseB').textContent = values[108] || '';
    document.getElementById('feeder48_phaseC').textContent = values[109] || '';
    document.getElementById('feeder48_Total').textContent = Number(values[107])+Number(values[108])+Number(values[109]);
    
    document.getElementById('feeder49_phaseA').textContent = values[110] || '';
    document.getElementById('feeder49_phaseB').textContent = values[111] || '';
    document.getElementById('feeder49_phaseC').textContent = values[112] || '';
    document.getElementById('feeder49_Total').textContent = Number(values[110])+Number(values[111])+Number(values[112]);
  }


  // -------------TOTAL CONSOMSION PHASE A--------------------
  // Total Active Power Phase A
    document.getElementById('total1_phaseA').textContent = 
    Number(document.getElementById('feeder11_phaseA').textContent) +Number(document.getElementById('feeder21_phaseA').textContent)
    +Number(document.getElementById('feeder31_phaseA').textContent)+Number(document.getElementById('feeder41_phaseA').textContent);

    // Total Reactive Power Phase A
    document.getElementById('total2_phaseA').textContent = 
    Number(document.getElementById('feeder12_phaseA').textContent) +Number(document.getElementById('feeder22_phaseA').textContent)
    +Number(document.getElementById('feeder32_phaseA').textContent)+Number(document.getElementById('feeder42_phaseA').textContent);

    // Total Apparent Phase A
    document.getElementById('total3_phaseA').textContent = 
    Number(document.getElementById('feeder13_phaseA').textContent) +Number(document.getElementById('feeder23_phaseA').textContent)
    +Number(document.getElementById('feeder33_phaseA').textContent)+Number(document.getElementById('feeder43_phaseA').textContent);

    // Total Voltage Phase A
    document.getElementById('total4_phaseA').textContent = 
    Number(document.getElementById('feeder14_phaseA').textContent) +Number(document.getElementById('feeder24_phaseA').textContent)
    +Number(document.getElementById('feeder34_phaseA').textContent)+Number(document.getElementById('feeder44_phaseA').textContent);

    // Total Current Phase A
    document.getElementById('total5_phaseA').textContent = 
    Number(document.getElementById('feeder15_phaseA').textContent) +Number(document.getElementById('feeder25_phaseA').textContent)
    +Number(document.getElementById('feeder35_phaseA').textContent)+Number(document.getElementById('feeder45_phaseA').textContent);

    // Total Power Factor Phase A
    document.getElementById('total6_phaseA').textContent = 
    Number(document.getElementById('feeder16_phaseA').textContent) +Number(document.getElementById('feeder26_phaseA').textContent)
    +Number(document.getElementById('feeder36_phaseA').textContent)+Number(document.getElementById('feeder46_phaseA').textContent);

    // Total Zero Sequence Current Phase A
    document.getElementById('total7_phaseA').textContent = 
    Number(document.getElementById('feeder17_phaseA').textContent) +Number(document.getElementById('feeder27_phaseA').textContent)
    +Number(document.getElementById('feeder37_phaseA').textContent)+Number(document.getElementById('feeder47_phaseA').textContent);

    // Total Current Unbalance Phase A
    document.getElementById('total8_phaseA').textContent = 
    Number(document.getElementById('feeder18_phaseA').textContent) +Number(document.getElementById('feeder28_phaseA').textContent)
    +Number(document.getElementById('feeder38_phaseA').textContent)+Number(document.getElementById('feeder48_phaseA').textContent);

    // Total Energy Phase A
    document.getElementById('total9_phaseA').textContent = 
    Number(document.getElementById('feeder19_phaseA').textContent) +Number(document.getElementById('feeder29_phaseA').textContent)
    +Number(document.getElementById('feeder39_phaseA').textContent)+Number(document.getElementById('feeder49_phaseA').textContent);


    
  // -------------TOTAL CONSOMSION PHASE B--------------------
  // Total Active Power Phase B
    document.getElementById('total1_phaseB').textContent = 
    Number(document.getElementById('feeder11_phaseB').textContent) +Number(document.getElementById('feeder21_phaseB').textContent)
    +Number(document.getElementById('feeder31_phaseB').textContent)+Number(document.getElementById('feeder41_phaseB').textContent);

    // Total Reactive Power Phase B
    document.getElementById('total2_phaseB').textContent = 
    Number(document.getElementById('feeder12_phaseB').textContent) +Number(document.getElementById('feeder22_phaseB').textContent)
    +Number(document.getElementById('feeder32_phaseB').textContent)+Number(document.getElementById('feeder42_phaseB').textContent);

    // Total Apparent Phase B
    document.getElementById('total3_phaseB').textContent = 
    Number(document.getElementById('feeder13_phaseB').textContent) +Number(document.getElementById('feeder23_phaseB').textContent)
    +Number(document.getElementById('feeder33_phaseB').textContent)+Number(document.getElementById('feeder43_phaseB').textContent);

    // Total Voltage Phase B
    document.getElementById('total4_phaseB').textContent = 
    Number(document.getElementById('feeder14_phaseB').textContent) +Number(document.getElementById('feeder24_phaseB').textContent)
    +Number(document.getElementById('feeder34_phaseB').textContent)+Number(document.getElementById('feeder44_phaseB').textContent);

    // Total Current Phase B
    document.getElementById('total5_phaseB').textContent = 
    Number(document.getElementById('feeder15_phaseB').textContent) +Number(document.getElementById('feeder25_phaseB').textContent)
    +Number(document.getElementById('feeder35_phaseB').textContent)+Number(document.getElementById('feeder45_phaseB').textContent);

    // Total Power Factor Phase B
    document.getElementById('total6_phaseB').textContent = 
    Number(document.getElementById('feeder16_phaseB').textContent) +Number(document.getElementById('feeder26_phaseB').textContent)
    +Number(document.getElementById('feeder36_phaseB').textContent)+Number(document.getElementById('feeder46_phaseB').textContent);

    // Total Zero Sequence Current Phase B
    document.getElementById('total7_phaseB').textContent = 
    Number(document.getElementById('feeder17_phaseB').textContent) +Number(document.getElementById('feeder27_phaseB').textContent)
    +Number(document.getElementById('feeder37_phaseB').textContent)+Number(document.getElementById('feeder47_phaseB').textContent);

    // Total Current Unbalance Phase B
    document.getElementById('total8_phaseB').textContent = 
    Number(document.getElementById('feeder18_phaseB').textContent) +Number(document.getElementById('feeder28_phaseB').textContent)
    +Number(document.getElementById('feeder38_phaseB').textContent)+Number(document.getElementById('feeder48_phaseB').textContent);

    // Total Energy Phase B
    document.getElementById('total9_phaseB').textContent = 
    Number(document.getElementById('feeder19_phaseB').textContent) +Number(document.getElementById('feeder29_phaseB').textContent)
    +Number(document.getElementById('feeder39_phaseB').textContent)+Number(document.getElementById('feeder49_phaseB').textContent);


  // -------------TOTAL CONSOMSION PHASE C--------------------
  // Total Active Power Phase C
    document.getElementById('total1_phaseC').textContent = 
    Number(document.getElementById('feeder11_phaseC').textContent) +Number(document.getElementById('feeder21_phaseC').textContent)
    +Number(document.getElementById('feeder31_phaseC').textContent)+Number(document.getElementById('feeder41_phaseC').textContent);

    // Total Reactive Power Phase C
    document.getElementById('total2_phaseC').textContent = 
    Number(document.getElementById('feeder12_phaseC').textContent) +Number(document.getElementById('feeder22_phaseC').textContent)
    +Number(document.getElementById('feeder32_phaseC').textContent)+Number(document.getElementById('feeder42_phaseC').textContent);

    // Total Apparent Phase C
    document.getElementById('total3_phaseC').textContent = 
    Number(document.getElementById('feeder13_phaseC').textContent) +Number(document.getElementById('feeder23_phaseC').textContent)
    +Number(document.getElementById('feeder33_phaseC').textContent)+Number(document.getElementById('feeder43_phaseC').textContent);

    // Total Voltage Phase C
    document.getElementById('total4_phaseC').textContent = 
    Number(document.getElementById('feeder14_phaseC').textContent) +Number(document.getElementById('feeder24_phaseC').textContent)
    +Number(document.getElementById('feeder34_phaseC').textContent)+Number(document.getElementById('feeder44_phaseC').textContent);

    // Total Current Phase C
    document.getElementById('total5_phaseC').textContent = 
    Number(document.getElementById('feeder15_phaseC').textContent) +Number(document.getElementById('feeder25_phaseC').textContent)
    +Number(document.getElementById('feeder35_phaseC').textContent)+Number(document.getElementById('feeder45_phaseC').textContent);

    // Total Power Factor Phase C
    document.getElementById('total6_phaseC').textContent = 
    Number(document.getElementById('feeder16_phaseC').textContent) +Number(document.getElementById('feeder26_phaseC').textContent)
    +Number(document.getElementById('feeder36_phaseC').textContent)+Number(document.getElementById('feeder46_phaseC').textContent);

    // Total Zero Sequence Current Phase C
    document.getElementById('total7_phaseC').textContent = 
    Number(document.getElementById('feeder17_phaseC').textContent) +Number(document.getElementById('feeder27_phaseC').textContent)
    +Number(document.getElementById('feeder37_phaseC').textContent)+Number(document.getElementById('feeder47_phaseC').textContent);

    // Total Current Unbalance Phase C
    document.getElementById('total8_phaseC').textContent = 
    Number(document.getElementById('feeder18_phaseC').textContent) +Number(document.getElementById('feeder28_phaseC').textContent)
    +Number(document.getElementById('feeder38_phaseC').textContent)+Number(document.getElementById('feeder48_phaseC').textContent);

    // Total Energy Phase C
    document.getElementById('total9_phaseC').textContent = 
    Number(document.getElementById('feeder19_phaseC').textContent) +Number(document.getElementById('feeder29_phaseC').textContent)
    +Number(document.getElementById('feeder39_phaseC').textContent)+Number(document.getElementById('feeder49_phaseC').textContent);


  // -------------TOTAL CONSOMSION TOTAL CONSUMSION--------------------
  // Total Active Power TOTAL CONSUMSION
    document.getElementById('total1_Total').textContent = 
    Number(document.getElementById('feeder11_Total').textContent) +Number(document.getElementById('feeder21_Total').textContent)
    +Number(document.getElementById('feeder31_Total').textContent)+Number(document.getElementById('feeder41_Total').textContent);

    // Total Reactive Power TOTAL CONSUMSION
    document.getElementById('total2_Total').textContent = 
    Number(document.getElementById('feeder12_Total').textContent) +Number(document.getElementById('feeder22_Total').textContent)
    +Number(document.getElementById('feeder32_Total').textContent)+Number(document.getElementById('feeder42_Total').textContent);

    // Total Apparent TOTAL CONSUMSION
    document.getElementById('total3_Total').textContent = 
    Number(document.getElementById('feeder13_Total').textContent) +Number(document.getElementById('feeder23_Total').textContent)
    +Number(document.getElementById('feeder33_Total').textContent)+Number(document.getElementById('feeder43_Total').textContent);

    // Total Voltage TOTAL CONSUMSION
    document.getElementById('total4_Total').textContent = 
    Number(document.getElementById('feeder14_Total').textContent) +Number(document.getElementById('feeder24_Total').textContent)
    +Number(document.getElementById('feeder34_Total').textContent)+Number(document.getElementById('feeder44_Total').textContent);

    // Total Current TOTAL CONSUMSION
    document.getElementById('total5_Total').textContent = 
    Number(document.getElementById('feeder15_Total').textContent) +Number(document.getElementById('feeder25_Total').textContent)
    +Number(document.getElementById('feeder35_Total').textContent)+Number(document.getElementById('feeder45_Total').textContent);

    // Total Power Factor TOTAL CONSUMSION
    document.getElementById('total6_Total').textContent = 
    Number(document.getElementById('feeder16_Total').textContent) +Number(document.getElementById('feeder26_Total').textContent)
    +Number(document.getElementById('feeder36_Total').textContent)+Number(document.getElementById('feeder46_Total').textContent);

    // Total Zero Sequence Current TOTAL CONSUMSION
    document.getElementById('total7_Total').textContent = 
    Number(document.getElementById('feeder17_Total').textContent) +Number(document.getElementById('feeder27_Total').textContent)
    +Number(document.getElementById('feeder37_Total').textContent)+Number(document.getElementById('feeder47_Total').textContent);

    // Total Current Unbalance TOTAL CONSUMSION
    document.getElementById('total8_Total').textContent = 
    Number(document.getElementById('feeder18_Total').textContent) +Number(document.getElementById('feeder28_Total').textContent)
    +Number(document.getElementById('feeder38_Total').textContent)+Number(document.getElementById('feeder48_Total').textContent);

    // Total Energy TOTAL CONSUMSION
    document.getElementById('total9_Total').textContent = 
    Number(document.getElementById('feeder19_Total').textContent) +Number(document.getElementById('feeder29_Total').textContent)
    +Number(document.getElementById('feeder39_Total').textContent)+Number(document.getElementById('feeder49_Total').textContent);
}

     

