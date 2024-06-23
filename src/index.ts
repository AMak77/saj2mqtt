import {
  MQTT_SAJ2MQTT_TOPIC,
  POLLING_INTERVAL,
  SAJ_STATUS_URL,
} from "./config";
import { mqttClient } from "./mqtt";
import { getCurrentState } from "./state";

async function SAJ2MQTT() {
  if (!SAJ_STATUS_URL) {
    throw new Error("No SAJ status url found");
  }

  const state = await getCurrentState();

  console.log(state);

  mqttClient.publish(MQTT_SAJ2MQTT_TOPIC, JSON.stringify(state));

  setTimeout(SAJ2MQTT, POLLING_INTERVAL);
}

SAJ2MQTT();
