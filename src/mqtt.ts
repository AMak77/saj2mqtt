import mqtt from "mqtt";
import {
  MQTT_BROKER_IP,
  MQTT_BROKER_PORT,
  MQTT_BROKER_PWD,
  MQTT_BROKER_USER,
} from "./config";

export const mqttClient = mqtt.connect(
  `mqtt://${MQTT_BROKER_IP}:${MQTT_BROKER_PORT}`,
  { username: MQTT_BROKER_USER, password: MQTT_BROKER_PWD },
);

mqttClient.on("connect", () => {
  console.log(`Connected to: mqtt://${MQTT_BROKER_IP}:${MQTT_BROKER_PORT}`);
});

mqttClient.on("error", (err) => {
  console.error(`Mqtt error: ${err}`);
});
