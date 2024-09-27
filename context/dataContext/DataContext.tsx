import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer } from "./DataReducer";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
import { DefaultResponse, PostProps } from "@/interfaces/postInterface";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";
import { AuthContext } from "../authContext/AuthContext";

export interface DataState {

}

const dataStateDefault = {

}

interface DataContextProps {
    state: DataState,
    newPost: (newPost: PostProps) => Promise<DefaultResponse>
}

export const DataContext = createContext({} as DataContextProps);

export function DataProvider({ children }: any) {

    const [state, dispatch] = useReducer(dataReducer, dataStateDefault);
    const { state: { user } } = useContext(AuthContext)

    useEffect(() => {

    }, []);


    const uploadImage = async (uri: string) => {
        const storage = getStorage();
        const storageRef = ref(storage, 'posts');

        try {
            const response = await fetch(uri);
            const blob = await response.blob();
            const snapshot = await uploadBytes(storageRef, blob)
            const url = await getDownloadURL(storageRef)

            console.log('Uploaded a raw string!');
            console.log({
                snapshot
            })

            return url
        } catch (error) {
            console.log(error)
            return ""
        }
    }

    const getPosts = async () => {

    }


    const newPost = async (newPost: PostProps): Promise<DefaultResponse> => {
        try {
            const urlImage = await uploadImage(newPost.image);
            console.log({
                urlImage
            })
            const docRef = await addDoc(collection(db, "posts"), {
                ...newPost,
                image: urlImage,
                date: new Date(),
                username: user.email,
                postedBy: user.uid,
                likes: 0,
            });
            console.log("Document written with ID: ", docRef.id);
            return {
                isSuccess: true,
                message: "Creado con exito"
            }
        } catch (error) {
            console.log(error);
            return {
                isSuccess: false,
                message: "Hubo un error: " + error
            }
        }
    }

    const updatePost = async () => {
    }

    const deletePost = async () => {
    }


    return <DataContext.Provider
        value={{
            state,
            newPost
        }}
    >
        {children}
    </DataContext.Provider>
}