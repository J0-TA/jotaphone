export const safelyDisplayValue = (value) => {
  if (Array.isArray(value)) {
    return value.join(", ");
  }
  return value || "";
};

export const buildDetailsList = (product) => {
  const {
    cpu,
    ram,
    os,
    displayResolution,
    displaySize,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
  } = product;

  return [
    ["CPU", safelyDisplayValue(cpu)],
    ["RAM", safelyDisplayValue(ram)],
    ["OS", safelyDisplayValue(os)],
    ["Display Resolution", safelyDisplayValue(displayResolution)],
    ["Display Size", safelyDisplayValue(displaySize)],
    ["Battery", safelyDisplayValue(battery)],
    ["Primary Camera", safelyDisplayValue(primaryCamera)],
    ["Secondary Camera", safelyDisplayValue(secondaryCmera)],
    ["Dimensions", safelyDisplayValue(dimentions)],
    ["Weight", `${safelyDisplayValue(weight)}g`],
  ];
};

export const formatKey = (key) => {
  let result = key.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const renderValue = (value) => {
  if (Array.isArray(value)) {
    return value.join(", ");
  } else if (typeof value === "object") {
    return Object.entries(value)
      .map(([k, v]) => `${formatKey(k)}: ${v}`)
      .join(", ");
  } else {
    return value;
  }
};

export const excludeKeys = ["id", "brand", "model", "price", "options", "imgUrl"];

