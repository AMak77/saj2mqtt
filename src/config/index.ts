import dotenv from "dotenv";

dotenv.config();

export const SAJ_INVERTER_IP = process.env.SAJ_INVERTER_IP;
export const POLLING_INTERVAL = Number(process.env.POLLING_INTERVAL) || 8000;

export const MQTT_BROKER_IP = process.env.MQTT_BROKER_IP;
export const MQTT_BROKER_PORT = process.env.MQTT_BROKER_PORT || 1883;
export const MQTT_BROKER_USER = process.env.MQTT_BROKER_USER || "admin";
export const MQTT_BROKER_PWD = process.env.MQTT_BROKER_PWD || "password";

export const MQTT_SAJ2MQTT_TOPIC =
  process.env.MQTT_SAJ2MQTT_TOPIC || "saj2mqtt/state";
