import React from 'react'

const ServerDown = () => {
  return (
    <div className="flex w-[85vw] h-[90vh] items-center justify-center  ">
    <img
      src="loading.gif"
      alt="Loading..."
      className="w-16 h-16"
    />
    <p className="ml-4 text-xl font-semibold">Loading...</p>
  </div>
  )
}

export default ServerDown