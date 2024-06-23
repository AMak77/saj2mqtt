import axios from "axios";
import { SAJ_STATUS_URL } from "./config";
import { formatPayload } from "./formatters/state";
import { SAJField, SAJState } from "./types";

export async function getCurrentState(url = SAJ_STATUS_URL) {
  const date = new Date().toISOString();
  let currentState: SAJState = {
    status: "Offline",
    date,
    [SAJField.GRID_CONNECTED_POWER]: "0",
  };

  try {
    const res = await axios.get<string>(url);

    if (!res.data) {
      return new Error("No data found");
    }

    currentState = {
      status: "Online",
      date,
      ...formatPayload(res.data),
    };
  } catch (e) {
    console.error(
      "Something went wrong! SAJ2MQTT cannot connect to SAJ inverter.",
    );
    //console.log(e);
  }

  return currentState;
}
