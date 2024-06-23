import dotenv from "dotenv";

dotenv.config();

const env = process.env;

export const SAJ_INVERTER_IP = env.SAJ_INVERTER_IP || "localhost";

export const SAJ_STATUS_URL =
  env.SAJ_INVERTER_URL || `http://${SAJ_INVERTER_IP}/status/status.php`;

export const POLLING_INTERVAL = Number(env.POLLING_INTERVAL) || 8000;

export const MQTT_BROKER_IP = env.MQTT_BROKER_IP;
export const MQTT_BROKER_PORT = env.MQTT_BROKER_PORT || 1883;
export const MQTT_BROKER_USER = env.MQTT_BROKER_USER || "admin";
export const MQTT_BROKER_PWD = env.MQTT_BROKER_PWD || "password";

export const MQTT_SAJ2MQTT_TOPIC = env.MQTT_SAJ2MQTT_TOPIC || "saj2mqtt/state";
