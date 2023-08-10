import React from 'react'
import Header from './Header'
import Options from './Options'
import List from './List'
import Modal from './Modal'
import { useSelector } from 'react-redux'

function MainComp() {

  const {open} = useSelector(state => state.modal);

  return (
    <div>
        {open && <Modal/> }      
        <Header />
        <List />
        <Options />
    </div>
  )
}

export default MainComp