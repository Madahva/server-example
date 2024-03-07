import Properties from "../../models/property.model";
import Users from "../../models/user.model";

export default async function createProperty(propertyData: any) {
  const { owner_id } = propertyData;
  const owner: any = await Users.findByPk(owner_id);

  if (!owner) {
    throw new Error("Owner not found");
  }

  const newProperty = await Properties.create(propertyData);

    await owner.addPublishedProperties(newProperty.id);

  return newProperty;
}
