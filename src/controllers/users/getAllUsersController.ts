import Users from "../../models/user.model";
import Properties from "../../models/property.model";

export default async function getAllUsers() {
  const users: Users[] = await Users.findAll({
    include: [
      {
        model: Properties,
        as: "publishedProperties",
      },
    ],
  });

  return users;
}
