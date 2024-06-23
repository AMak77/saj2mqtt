import { SAJField } from "../types";

export const SAJUnits: Record<SAJField, string> = {
  [SAJField.TOTAL_GENERATED]: "kWh",
  [SAJField.TOTAL_RUNNING_TIME]: "h",
  [SAJField.TODAY_GENERATED]: "kWh",
  [SAJField.TODAY_RUNNING_TIME]: "h",

  [SAJField.PV1_VOLTAGE]: "V",
  [SAJField.PV1_CURRENT]: "A",
  [SAJField.PV2_VOLTAGE]: "V",
  [SAJField.PV2_CURRENT]: "A",

  [SAJField.GRID_CONNECTED_POWER]: "W",
  [SAJField.GRID_CONNECTED_FREQUENCY]: "Hz",

  [SAJField.LINE1_VOLTAGE]: "V",
  [SAJField.LINE1_CURRENT]: "A",
  [SAJField.LINE2_VOLTAGE]: "V",
  [SAJField.LINE2_CURRENT]: "A",
  [SAJField.LINE3_VOLTAGE]: "V",
  [SAJField.LINE3_CURRENT]: "A",

  [SAJField.BUS_VOLTAGE]: "V",
  [SAJField.DEVICE_TEMPERATURE]: "ºC",
  [SAJField.CO2_EMISSION_REDUCTION]: "Kg",
};
