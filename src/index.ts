import axios from "axios";

import {
  MQTT_SAJ2MQTT_TOPIC,
  POLLING_INTERVAL,
  SAJ_INVERTER_IP,
} from "./config";
import { getSAJInverterState } from "./formatter";
import { mqttClient } from "./mqtt";

const instance = axios.create();

instance.interceptors.request.use((config) => {
  config.headers["request-startTime"] = new Date().getTime();
  return config;
});

async function SAJ2MQTT() {
  try {
    if (!SAJ_INVERTER_IP) {
      throw new Error("No SAJ_INVERTER_IP found");
    }

    const res = await instance.get<string>(
      `http://${SAJ_INVERTER_IP}/status/status.php`,
    );

    if (!res.data) return;

    const SAJ_JSON = getSAJInverterState(res.data);

    if (!Object.keys(SAJ_JSON).length) {
      throw new Error("No data found");
    }

    const currentData = { status: "Online", ...SAJ_JSON };

    mqttClient.publish(MQTT_SAJ2MQTT_TOPIC, JSON.stringify(currentData));

    const date = new Date(Number(res.config.headers["request-startTime"]));

    console.info(`${MQTT_SAJ2MQTT_TOPIC}  | ${date}`);
    console.log(currentData);
    console.log("----------------");
  } catch (err) {
    const currentData = { status: "Offline", grid_connected_power: "0" };
    mqttClient.publish(MQTT_SAJ2MQTT_TOPIC, JSON.stringify(currentData));
    console.error("Something went wrong!!", err);
    console.log("----------------");
  }
}

setInterval(SAJ2MQTT, POLLING_INTERVAL);
