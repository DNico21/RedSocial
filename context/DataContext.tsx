import React, { createContext, useReducer, useEffect } from "react";
import { db } from "@/utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { dataReducer } from "./DataReducer";

export interface DataState {
  posts?: any[];
  messages?: any[];
}

const dataStateDefault = {
  posts: [],
  messages: [],
};

interface DataContextProps {
  state: DataState;
  fetchPosts: () => Promise<void>;
  fetchMessages: () => Promise<void>;
}

export const DataContext = createContext({} as DataContextProps);

export function DataProvider({ children }: any) {
  const [state, dispatch] = useReducer(dataReducer, dataStateDefault);

  useEffect(() => {
    // Llamadas iniciales para cargar datos al montar el contexto
    fetchPosts();
    fetchMessages();
  }, []);

  const fetchPosts = async (): Promise<void> => {
    try {
      const postsCollection = collection(db, "Posts");
      const postSnapshot = await getDocs(postsCollection);
      const postList = postSnapshot.docs.map((doc) => doc.data());
      dispatch({ type: "set_posts", payload: postList });
    } catch (error) {
      console.log("Error fetching posts: ", error);
    }
  };

  const fetchMessages = async (): Promise<void> => {
    try {
      const messagesCollection = collection(db, "Messages");
      const messageSnapshot = await getDocs(messagesCollection);
      const messageList = messageSnapshot.docs.map((doc) => doc.data());
      dispatch({ type: "set_messages", payload: messageList });
    } catch (error) {
      console.log("Error fetching messages: ", error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        state,
        fetchPosts,
        fetchMessages,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
