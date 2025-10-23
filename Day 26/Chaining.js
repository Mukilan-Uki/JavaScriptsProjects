function getUserCity(user) {
  return user?.address?.city;
}
const user1 = {
  name: 'Alice',
  address: { city: 'New York', country: 'USA' }
};
const user2 = {
  name: 'Bob'
};
const user3 = null;
console.log(getUserCity(user1));
console.log(getUserCity(user2));
console.log(getUserCity(user3));