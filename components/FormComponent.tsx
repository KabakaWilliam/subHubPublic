import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  Timestamp,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import toast from "react-hot-toast";
interface props {
  selectedSoftware: string;
  setSelectedSoftware: Function;
  loggedInUser: User | null | undefined;
}
declare global {
  interface userFromFirestore {
    photoURL: string;
    displayName: string;
    dateCreated: Timestamp;
    authID: string;
    email: string;
    AddedSoftware: [string];
  }
}
const FormComponent = ({
  selectedSoftware,
  setSelectedSoftware,
  loggedInUser,
}: props) => {
  const [software, setSoftware] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const store = [
    "Zoom",
    "Slack",
    "Playstation+",
    "Xbox Live",
    "Vercel",
    "SPSS",
    "Notion",
    "Disney+",
    "New York Times",
  ];
  const getIndex = () => {
    let index = Math.floor(Math.random() * 100);
    index = index % 8;
    return index;
  };

  const getSoftware = () => {
    const index = getIndex();
    setSoftware(store[index]);
  };
  useEffect(() => {
    getSoftware();
  }, []);

  const saveToFirestore = async (selectedSoftware: string) => {
    if (loggedInUser) {
      const userRef = doc(db, "users", loggedInUser?.uid);
      const userSnap = await getDoc(userRef);
      console.log("userSnap", userSnap);

      if (!userSnap.exists()) {
        const batch = writeBatch(db);
        batch.set(userRef, {
          photoURL: loggedInUser.photoURL,
          displayName: loggedInUser.displayName,
          dateCreated: serverTimestamp(),
          authID: loggedInUser?.uid,
          email: loggedInUser.email,
          AddedSoftware: [selectedSoftware],
        });
        await batch.commit();
      } else {
        const data = userSnap.data() as userFromFirestore;
        if (!data.AddedSoftware.includes(selectedSoftware)) {
          setIsValid(true);
          await updateDoc(userRef, {
            AddedSoftware: arrayUnion(selectedSoftware),
          });
        } else {
        }
      }
      setSelectedSoftware("");
    }
  };
  const sendToFirestore = async (e: any) => {
    e.preventDefault();
    saveToFirestore(selectedSoftware);
  };

  const onChange = (e: any) => {
    const val = e.target.value.toLowerCase();
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    if (val.length < 3) {
      setSelectedSoftware(val);
      setLoading(false);
      setIsValid(false);
    }

    if (re.test(val)) {
      setSelectedSoftware(val);
      setLoading(true);
      setIsValid(false);
    }
  };
  return (
    <div className="text-center  pt-3 flex flex-col gap-y-5">
      <div className="text-white text-3xl">Or</div>
      <form
        onSubmit={(e) => {
          const myPromise = sendToFirestore(e);
          toast.promise(myPromise, {
            loading: "Working on it 🕺🏾",
            success: "Thanks 🚀",
            error: "Could not update. Try again 🥺",
          });
        }}
      >
        <input
          className="w-[300px] h-[40px] bg-transparent border border-[#cf0fcf99] rounded-lg outline-black text-[#cf0fcf99] text-center"
          type="text"
          value={selectedSoftware}
          placeholder={`how about ${software}?`}
          onChange={(e) => {
            onChange(e);
            // setSelectedSoftware(e.target.value);
          }}
        />
      </form>

      <SelectedSoftwareMessage
        selectedSoftware={selectedSoftware}
        isValid={isValid}
        loading={loading}
      />
    </div>
  );
};

export default FormComponent;

interface selectedSoftwareCheck {
  selectedSoftware: string;
  isValid: boolean;
  loading: boolean;
}

function SelectedSoftwareMessage({
  selectedSoftware,
  isValid,
  loading,
}: selectedSoftwareCheck) {
  if (loading) {
    return <p>Checking...</p>;
  } else if (isValid) {
    return <p className="text-green-300">{selectedSoftware} looks good!</p>;
  } else if (selectedSoftware && !isValid) {
    return (
      <p className="text-red-300">
        {selectedSoftware} Already exists. Try something else{" "}
      </p>
    );
  } else {
    return <p></p>;
  }
}
