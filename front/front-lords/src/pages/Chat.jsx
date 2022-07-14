import React from 'react'

function Chat() {
  return (
    <div className="flex flex-col">
        <div className="overflow-y-scroll h-96">

        </div>
        <form className="p-3 border-t-2" onSubmit={(e)=>{
            e.preventDefault()
        }}>
            <textarea className="w-full bg-transparent" placeholder="enter message"></textarea>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
        </form>
      
    </div>
  )
}

export default Chat
