#include <ArduinoJson.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
//#include <SPI.h>
//#include <SD.h>
#include <SocketIoClient.h>
ESP8266WiFiMulti WiFiMulti;
SocketIoClient webSocket;

//File root;

String readData;
char buff[1000];

const char* names;
const char* ssid;
const char* password;
#define USE_SERIAL Serial
bool alarmOn = false;
void event(const char * payload, size_t length) {

  USE_SERIAL.printf("got message: %s\n", payload);
  if (strcmp (payload, "adjustment_on") == 0) {
    USE_SERIAL.printf("adjustment_on");
    digitalWrite(LED_BUILTIN, LOW);
    digitalWrite(5, HIGH);
  } else if (strcmp (payload, "adjustment_off") == 0) {
    digitalWrite(LED_BUILTIN, HIGH);
    digitalWrite(5, LOW);
  } else if (strcmp (payload, "alarm_on") == 0) {
    alarmOn = true;
  } else if (strcmp (payload, "alarm_off") == 0) {
    alarmOn = false;
  } else if (strcmp (payload, "getinfo") == 0) {
    StaticJsonBuffer<200> jsonBuffer;
    JsonObject& root = jsonBuffer.createObject();
    root["temp"] = readTemp();
    root["motion"] = readMotion();
    root["sleep"] = readSleep();
    char output[200];
    root.printTo(output);
    webSocket.emit("info",output);
  }
}

//void printDirectory(File dir, int numTabs) {
//  int colcnt =0;
//  while(true) {
//    File entry =  dir.openNextFile();
//    if (! entry) {
//      // no more files
//      break;
//     }
//     if (numTabs > 0) {
//       for (uint8_t i=0; i<=numTabs; i++) {
//         USE_SERIAL.print('\t');
//       }
//     }
//     Serial.print(entry.name());
//     if (entry.isDirectory()) {
//       USE_SERIAL.println("/");
//       printDirectory(entry, numTabs+1);
//     } else
//     {
//       USE_SERIAL.print("\t");
//       USE_SERIAL.println(entry.size(), DEC);
//     }
//     entry.close();
//   }
//}
//
//void readConfig() {
//  USE_SERIAL.println("[SD] Initializing SD card...");
//
//  if (!SD.begin(4)) {
//    USE_SERIAL.println("[SD] initialization failed!");
//    return;
//  }
//  //  root = SD.open("/");
//  //  root.rewindDirectory();
//  //  printDirectory(root, 0);
//  USE_SERIAL.println("[SD] initialization done.");
//
//  root = SD.open("wifi.txt", FILE_READ);
//  if (root) {
//    USE_SERIAL.println("[SD] read file wifi.conf :");
//    while (root.available()) {
//      readData = root.readString();
//    }
//    readData.trim();
//    int length_ = readData.length() + 1;
//    buff[length_];
//
//    readData.toCharArray(buff, length_);
//    DynamicJsonBuffer json;
//    JsonObject &data = json.parseObject(buff);
//    names = data["NAME"];
//    ssid = data["SSID"];
//    password = data["PASSWORD"];
//  } else {
//    USE_SERIAL.println("[SD] error wifi.conf");
//  }
//}

//int ReadMotionSensor() {
//  int readMotions = digitalRead(16);
//  return readMotions;
//}
//
//int readDepressionSensor() {
//  int force = analogRead(D4);
//  return force;
//}
//int readTemperatureSensor() {
//  float voltage;
//  voltage = getVoltage(D0);
//  float degreesC = (voltage - 0.5) *100.0;
//  float degreesF = degreesC * (9.0/5.0) +32.0;
//  return degreesC;
//}
//float getVoltage( int pin){
//  return (analogRead(pin) * 0.004882814);
//}
//void alarmClock() {
//  int speaker = D8;
//  int melody[] = {
//    NOTE_C4, NOTE_G3, NOTE_G3, NOTE_A3, NOTE_G3, 0, NOTE_B3, NOTE_C4
//  };
//  int noteDurations[] = {
//    4,8,8,4,4,4,4,4
//  };
//  for(int i =0; i<3 ; i++){
//    for(int thisNote=0; thisNote <8; thisNote ++){
//      int noteDuration = 1000 / noteDurations[thisNote];
//      tone(8, melody[thisNote], noteDuration);
//      int pauseBetweenNotes = noteDuration *1.30;
//
//    }
//  }
//}
//void adjustment() {
//
//}
float readTemp() {
  float temperature = analogRead(A0);
  temperature = ((temperature / 1.75) * 0.48828125);
  return temperature;
}
int motionState = 0;
int readMotion() {
  int readSensor = digitalRead(16);
  if(motionState != readSensor) {
    motionState = readSensor;
    if(motionState == 1) {
      USE_SERIAL.println("Motion");
      StaticJsonBuffer<200> jsonBuffer;
      JsonObject& root = jsonBuffer.createObject();
      root["temp"] = readTemp();
      root["motion"] = 1;
      root["sleep"] = readSleep();
      char output[200];
      root.printTo(output);
      webSocket.emit("info",output);
    }
  }
}

unsigned long previousMillis = 0; 
boolean state = false; 
void alarm() {
  unsigned long currentMillis = millis();
  if(state) {
      if (currentMillis - previousMillis >= 1000) {
        previousMillis = currentMillis;
        tone(D3,1000); 
        state = false;
      }
      
  } else {
    if (currentMillis - previousMillis >= 1000) {
      previousMillis = currentMillis;
      noTone(D3); 
      state = true;
    }
  }
}
int readSleep() {
  return analogRead(D2);
}
void setup()
{
  //Scheduler.start(NULL, loop2);
  USE_SERIAL.begin(115200);
  USE_SERIAL.setDebugOutput(true);
  pinMode(LED_BUILTIN, OUTPUT);  
  pinMode(5, OUTPUT); 
  pinMode(16, INPUT);
  pinMode(D2, INPUT);
  pinMode(D3, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);
  digitalWrite(5, LOW);
  USE_SERIAL.println();
  USE_SERIAL.println();
  USE_SERIAL.println();
  for (uint8_t t = 4; t > 0; t--) {
    USE_SERIAL.printf("[SETUP] BOOT WAIT %d...\n", t);
    USE_SERIAL.flush();
    delay(1000);
  }
  
 // readConfig();
  
  WiFi.disconnect(true);
  WiFi.setAutoConnect(false);
  WiFi.setPhyMode(WIFI_PHY_MODE_11G);
  WiFiMulti.addAP("Zendoro", "123456789za");

  while (WiFiMulti.run() != WL_CONNECTED) {
    delay(100);
    USE_SERIAL.print(".");
  }
  USE_SERIAL.print("[Network] IP: ");
  USE_SERIAL.println(WiFi.localIP());
  webSocket.on("messageType", event);
  webSocket.begin("172.20.10.6", 8082);
}

void loop()
{
 webSocket.loop();
 readMotion();
 if(alarmOn) 
  alarm();
 else 
  noTone(D3); 
 //USE_SERIAL.println(analogRead(D2));
}

