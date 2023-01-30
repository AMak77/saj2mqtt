import axios from "axios";
import mqtt from "mqtt";

import {
  MQTT_BROKER_IP,
  MQTT_BROKER_PORT,
  MQTT_BROKER_PWD,
  MQTT_BROKER_USER,
  MQTT_SAJ2MQTT_TOPIC,
  POLLING_INTERVAL,
  SAJ_INVERTER_IP,
} from "./config";
import { getSAJInverterState } from "./formatter";

const mqttClient = mqtt.connect(
  `mqtt://${MQTT_BROKER_IP}:${MQTT_BROKER_PORT}`,
  { username: MQTT_BROKER_USER, password: MQTT_BROKER_PWD }
);

mqttClient.on("connect", () =>
  console.log(`Connected to: mqtt://${MQTT_BROKER_IP}:${MQTT_BROKER_PORT}`)
);

mqttClient.on("error", (err) => console.error(err));

async function SAJ2MQTT() {
  try {
    const { data } = await axios.get(
      `http://${SAJ_INVERTER_IP}/status/status.php`
    );

    if (!data) return;

    const SAJ_JSON = getSAJInverterState(data);

    if (!Object.keys(SAJ_JSON).length) return;

    const date = new Date();
    mqttClient.publish(MQTT_SAJ2MQTT_TOPIC, JSON.stringify(SAJ_JSON));

    console.info(
      `${MQTT_SAJ2MQTT_TOPIC}   |   ${date.toISOString()} - ${JSON.stringify(
        SAJ_JSON
      )} \n *****`
    );
  } catch (err) {
    console.error(err);
  }
}

setInterval(SAJ2MQTT, POLLING_INTERVAL);
