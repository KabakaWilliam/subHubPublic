import { User } from "firebase/auth";
import {
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import mixpanel from "mixpanel-browser";
import Image from "next/image";
import { useContext } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../lib/context";
import { db } from "../lib/firebase";

const SoftwareContainerLogged = () => {
  const { loggedInUser } = useContext(UserContext);
  console.log("loggedInUser container:", loggedInUser);
  const saveToFirestore = async (selectedSoftware: string) => {
    if (loggedInUser) {
      console.log("runss 1");
      const userRef = doc(db, "users", loggedInUser?.uid);
      const userSnap = await getDoc(userRef);
      console.log("runss");
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
          //   setIsValid(true);
          if (process.env.NEXT_PUBLIC_PROJECT_TOKEN) {
            mixpanel.init(process.env.NEXT_PUBLIC_PROJECT_TOKEN);
            mixpanel.track(`${selectedSoftware}`);
          }
          await updateDoc(userRef, {
            AddedSoftware: arrayUnion(selectedSoftware),
          });
        } else {
        }
      }
    }
  };
  return (
    <div className="  w-[100%] h-[60%] overflow-x-hidden items-center justify-center flex-wrap md:w-[30vw] md:h-[35vh] flex md:flex-wrap gap-0  ">
      <div
        onClick={() => {
          let data = "Premiere Pro";
          const myPromise = saveToFirestore(data);
          toast.promise(myPromise, {
            loading: "Working on it 🕺🏾",
            success: "Finito 🚀",
            error: "Could not update. Try again 🥺",
          });
        }}
        className="icons"
      >
        <Image
          src={"/premierePro.png"}
          width={80}
          height={80}
          className="z-50 hover:animate-pulse"
        />
      </div>
      <div className="icons">
        <Image
          src={"/netflix.png"}
          width={80}
          height={80}
          onClick={() => {
            let data = "Netflix";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent object-contain hover:animate-pulse"
        />
      </div>
      <div className="icons">
        <Image
          src={"/spotify.png"}
          width={80}
          height={80}
          onClick={() => {
            let data = "spotify";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent hover:animate-pulse object-contain"
        />
      </div>
      <div className="icons">
        <Image
          src={"/gcp.png"}
          width={130}
          height={80}
          onClick={() => {
            let data = "Google Cloud";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent hover:animate-pulse"
        />
      </div>
      <div className="icons">
        <Image
          src={"/photoshop.png"}
          width={80}
          height={80}
          onClick={() => {
            let data = "Photoshop";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent hover:animate-pulse"
        />
      </div>
      <div className="icons">
        <Image
          src={"/canva.png"}
          width={80}
          height={80}
          onClick={() => {
            let data = "Canva";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent hover:animate-pulse"
        />
      </div>
      <div className="icons">
        <Image
          src={"/skillShare.png"}
          width={80}
          height={80}
          onClick={() => {
            let data = "Skill Share";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent hover:animate-pulse"
        />
      </div>
      <div className="icons">
        <Image
          src={"/figma.png"}
          width={80}
          height={80}
          onClick={() => {
            let data = "Figma";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent hover:animate-pulse object-contain"
        />
      </div>
      <div className="icons">
        <Image
          src={"/notion.png"}
          width={80}
          height={80}
          onClick={() => {
            let data = "Notion";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent hover:animate-pulse object-contain"
        />
      </div>
      <div className="icons">
        <Image
          src={"/appleTv.png"}
          width={80}
          height={80}
          onClick={() => {
            let data = "Apple TV";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent hover:animate-pulse object-contain"
        />
      </div>
      <div className="icons">
        <Image
          src={"/aws.png"}
          width={80}
          height={80}
          onClick={() => {
            let data = "AWS";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent hover:animate-pulse object-contain"
        />
      </div>
      <div className="icons">
        <Image
          src={"/Azure.png"}
          width={80}
          height={80}
          onClick={() => {
            let data = "Azure";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent hover:animate-pulse object-contain"
        />
      </div>
      <div className="icons">
        <Image
          src={"/Hulu.png"}
          width={80}
          height={80}
          onClick={() => {
            let data = "Hulu";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent hover:animate-pulse object-contain"
        />
      </div>
      <div className="icons">
        <Image
          src={"/crunchyRoll.png"}
          width={80}
          height={80}
          onClick={() => {
            let data = "Crunchy Roll";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent hover:animate-pulse object-contain"
        />
      </div>
      <div className="icons">
        <Image
          src={"/mixpanel.png"}
          width={80}
          height={80}
          onClick={() => {
            let data = "Mixpanel";
            const myPromise = saveToFirestore(data);
            toast.promise(myPromise, {
              loading: "Working on it 🕺🏾",
              success: "Finito 🚀",
              error: "Could not update. Try again 🥺",
            });
          }}
          className="z-50 bg-transparent hover:animate-pulse object-contain"
        />
      </div>
    </div>
  );
};

export default SoftwareContainerLogged;
