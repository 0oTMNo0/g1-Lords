import React from 'react'

function Chat() {
  return (
    <div className="flex flex-col">
        <div className="overflow-y-scroll h-96 flex flex-col p-4 gap-3">

            {/* admin-msg */}
            <div className="flex flex-col w-2/3 shadow-lg rounded bg-slate-600 text-white text-xs">
                <div className='border-b-2 items-start p-3'>
                    <p>name</p>
                    <p>date</p>
                </div>
                <div className='p-3'>
                    <p>msg</p>
                </div>
            </div>



            {/* user-msg */}
            <div className="flex flex-col w-2/3 shadow-lg rounded bg-slate-400 text-white text-xs">
                <div className='border-b-2 items-start p-3'>
                    <p>name</p>
                    <p>date</p>
                </div>
                <div className='p-3'>
                    <p>msg</p>
                </div>
            </div>

        </div>
        <form className="p-3 border-t-2" onSubmit={(e)=>{
            e.preventDefault()
        }}>
            <textarea className="w-full bg-transparent" placeholder="enter message"></textarea>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Send</button>
        </form>
      
    </div>
  )
}

export default Chat
