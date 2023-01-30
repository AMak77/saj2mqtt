import { SAJField } from "../@types/SAJField";

export function getSAJInverterState(
  payload: string
): Record<SAJField, string> | {} {
  let values = payload.split(",");

  values = values.filter(
    (_, index) =>
      (index >= 1 && index <= 8) || (index >= 23 && index < values.length - 1)
  );

  return Object.values(SAJField).reduce(
    (p, c, index) => ({ ...p, [c]: values[index] }),
    {}
  );
}
