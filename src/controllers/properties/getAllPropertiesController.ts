import Properties from "../../models/property.model";

export default async function getAllProperties() {
  const properties = await Properties.findAll();

  return properties;
}
