import {
  doc,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

function useProgress() {
  const db = getFirestore();
  const ref = collection(db, "progress");
  const createProgress = (progress) => addDoc(ref, progress);
  const getProgress = () => getDocs(ref);

  const createProgressComment = (progressID, comment) => {
    const ref = collection(db, "progress", progressID, "comments");
    return addDoc(ref, comment);
  };

  const getProgressComments = (progressID) => {
    const ref = collection(db, "progress",progressID, "comments");
    return getDocs(ref);
  };

  const getProgressCommentsSnap = (progressID, callback) => {
    const ref = collection(db, "progress", progressID, "comments");
    const q = query(ref, orderBy("time"));
    return onSnapshot(q, callback);
  };

  return {
    createProgress,
    getProgress,
    createProgressComment,
    getProgressComments,
    getProgressCommentsSnap,
  };
}
export default useProgress;
