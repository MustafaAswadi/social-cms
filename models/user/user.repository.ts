import {
  addDoc,
  collection,
  getDoc,
  doc,
  DocumentData,
} from "firebase/firestore";
import { firestore } from "../../database";
import { User } from "./user.model";

const USER_COLLECTION = "users";

const userCollection = collection(firestore, USER_COLLECTION);

export const saveUserCredentials = async (user: User): Promise<void> => {
  await addDoc(userCollection, {
    phone_Number: user.getPhoneNumber(),
    access_code: user.getAccessCode(),
  });
};

export const getUserCredentials = async (
  phone_Number: number
): Promise<DocumentData | undefined> => {
  const docRef = doc(firestore, USER_COLLECTION, phone_Number.toString());
  const userDoc = await getDoc(docRef);
  if (!userDoc.exists()) {
    return undefined;
  }
  return userDoc.data();
};

export const validateAccessCode = async (
  phone_number: number,
  access_token: number
): Promise<boolean> => {
  const existingUser = await getUserCredentials(phone_number);
  if (!existingUser) {
    return false;
  }

  if (existingUser.access_code === access_token) {
    const user = new User(phone_number, access_token);
    await saveUserCredentials(user);
    return true;
  }

  return false;
};
