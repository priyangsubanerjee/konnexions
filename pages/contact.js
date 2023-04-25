import React, { useEffect, useState } from 'react'

const Contact = () => {
    const [gmailError, setGmailError] = useState('')
    const [formSubmit, setFormSubmit] = useState(false)
    const [contactDetails, setContactDetails] = useState({
        name: "",
        email: "",
        message: "",
    })

    useEffect(() => {
        if (contactDetails.name.length == 0 || contactDetails.email.length == 0 || contactDetails.message.length == 0) {
            setFormSubmit(false)
            return;
        }
        else if (!contactDetails.email.includes("@")) {
            setGmailError("Enter a valid email address")
            setFormSubmit(false)
            return;
        }
        else setFormSubmit(true);
        setGmailError("");
    }, [contactDetails])
  return (
    <>
    <div className='flex flex-col justify-center h-screen bg-black'>
        <img src="./images/mail.png" alt="mail" className='absolute w-[412px] top-[-10%] left-0'/>
        <div>
            <h1 className='text-white text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] text-center max-w-[1440px] m-auto'>Lorem ipsum dolor sit amet.</h1> 
            <div className='text-white text-center mt-4 text-[.7rem] md:text-[1rem]  lg:text-[1.25rem] w-[100vw]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate.</div>
            <div className='flex justify-center'>
            <div className='w-[80vw] md:w-[700px] lg:w-[800px] 2xl:w-[900px] mt-8 md:mt-12 lg:mt-16'>
                <form action="submit" >
                    <div className='flex flex-col justify-center md:flex-row gap-8 mt-8 w-[100%]'>
                        <div className='md:w-[50%] w-[100%]'>
                            <div className='text-white mb-4'>Name</div>
                            <input 
                            value={contactDetails.name}
                            onChange={(e) => setContactDetails({...contactDetails, name: e.target.value})}
                            className='bg-[#333] rounded-sm h-12 w-[100%] text-white px-6 outline-none'
                            type="text" placeholder='Joseph' />
                        </div>
                        <div className='md:w-[50%] w-[100%]'>
                            <div className='text-white mb-4'>Email</div>
                            <input 
                            value={contactDetails.email}
                            onChange={(e) => setContactDetails({...contactDetails, email: e.target.value})}
                            className='bg-[#333] rounded-sm h-12 w-[100%] px-6 outline-none text-white' 
                            type="gmail" placeholder='Joseph@gmail.com'/>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center mt-8'>
                        <div className='text-white mb-4'>Message</div>
                        <textarea name="message"
                            type="text"
                            value={contactDetails.message}
                            onChange={(e) => setContactDetails({...contactDetails, message: e.target.value})}
                            className='w-[100%] h-[12rem] rounded-md pt-6 pl-6 bg-[#333] resize-none text-white outline-none' 
                            placeholder='Enter a message'
                        ></textarea>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='text-red-700'>{gmailError}</div>
                        <button disabled={!formSubmit} className='bg-white text-black text-lg py-1 px-8 rounded-md mt-8 cursor-pointer hover:bg-gray-200'>Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact