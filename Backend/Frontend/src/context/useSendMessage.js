import React, { useState } from 'react'
import useConversation from '../stateManage/useConversation.js';
import { useEffect } from 'react';
import axios from 'axios';

function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();


    const sendMessages = async (message) => {
        setLoading(true);
        if (selectedConversation && selectedConversation._id) {
            try {
                const response = await axios.post(`/api/message/send/${selectedConversation._id}`,
                     {
                        message
                    });
                setMessages([...message, response.data]);
                setLoading(false);
            } catch (error) {
                console.error("Error occurred in useSendMessages:", error);
                setLoading(false);
            }
        }
    };



    return {
        loading, sendMessages
    };
}

export default useSendMessage