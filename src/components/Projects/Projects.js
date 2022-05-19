import React from 'react'


const Projects=()=>{
    return(
        <>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-900">
        <a href="#">
        <img className=" rounded-t-xl" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500" alt=""/>
         </a>
        <div className="p-3">
        <a href="#">
        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy <br/> technology</h5>
        </a>
       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise.</p>
       <a href="#" className ="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-blue-800">
       Visite
       <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
      </div>
       </div>

        </>
    )
}

export default Projects