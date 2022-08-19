import React, { useState } from 'react';
import axios from 'axios';

import { useSnackbar } from 'react-simple-snackbar';

const Contact = () => {
  const options = {
    position: 'top-center',
    style: {
      color: 'lightblue',
      fontFamily: 'Menlo, monospace',
      textAlign: 'center',
    },
    closeStyle: {
      color: 'lightcoral',
      fontSize: '16px',
    },
  };

  const [openSnackbar, closeSnackbar] = useSnackbar(options);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    messagebody: '',
  });
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  const handleTalkClicked = async (e) => {
    e.preventDefault();
    const validEmail = ValidateEmail(userInfo.email);
    if (validEmail) {
      try {
        await axios.post('https://apiportfol.herokuapp.com/api/v1/addinfo', {
          name: userInfo.name,
          email: userInfo.email,
          messagebody: userInfo.messagebody,
        });
        openSnackbar('Message Sent Succefully');
      } catch (err) {
        console.error(`error occured : ${err}`);
      }
    } else {
      openSnackbar('Not A Valid Email');
    }
  };
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-56"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Contact Me Right Now to get job done quiqly</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleTalkClicked}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) =>
                setUserInfo({ ...userInfo, messagebody: e.target.value })
              }
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
