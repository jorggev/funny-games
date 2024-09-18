import { collection, addDoc } from 'firebase/firestore';
import {db} from '../firebase/config';

export const addReservedDate = async (date: Date) => {
  try {
    await addDoc(collection(db, 'reservedDates'), {
      date: date
    });
    console.log("Fecha reservada con éxito");
  } catch (e) {
    console.error("Error al agregar fecha reservada: ", e);
  }
}