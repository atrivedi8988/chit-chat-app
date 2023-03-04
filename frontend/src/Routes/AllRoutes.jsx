import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChatPage from '../Pages/ChatPage'
import HomePage from '../Pages/HomePage'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/chats' element={<ChatPage/>} />
    </Routes>
  )
}

export default AllRoutes