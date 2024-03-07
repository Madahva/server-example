import Properties from "../../models/property.model";

export default async function bulkCreateProperties(propertiesData: any) {
 return await Properties.bulkCreate(propertiesData);
}
