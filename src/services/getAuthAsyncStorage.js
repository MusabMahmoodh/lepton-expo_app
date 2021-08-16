import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getAuthAsyncStorage() {
  const user = await AsyncStorage.getItem("userData");
  return {
    user: JSON.parse(user),
  };
}

export const getToken = async () => {
  const { user } = await getAuthAsyncStorage();
  return `Bearer ${user.token}`;
};

export async function setAuthAsyncStorage(data) {
  await AsyncStorage.setItem("userData", JSON.stringify(data));
}

export async function resetAuthAsyncStorage() {
  await AsyncStorage.removeItem("userData");
  await AsyncStorage.removeItem("userToken");
}
