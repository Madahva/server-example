import Users from "../../models/user.model";

export default async function createUser(userData: any) {
  const { wallet_address } = userData;
  const [user, created] = await Users.findOrCreate({
    where: {
      wallet_address,
    },
  });

  return user;
}
