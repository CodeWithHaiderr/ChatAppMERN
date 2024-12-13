import React, {useState} from 'react'
import useConversation from '../stateManage/useConversation.js';
import { useEffect } from 'react';
import axios from 'axios';

function useGetMessage() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            if (selectedConversation && selectedConversation._id) {
                try {
                    const response = await axios.get(`/api/message/get/${selectedConversation._id}`);
                    setMessages(response.data);
                    setLoading(false);
                } catch (error) {
                    console.log("Error occured in useGetMessages", error);
                }
            }
        };
        getMessages();
    }, [selectedConversation, setMessages]);

    return {
        messages,
        loading
    }
}

export default useGetMessage