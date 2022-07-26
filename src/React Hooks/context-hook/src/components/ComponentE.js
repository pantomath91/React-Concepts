import React, { useContext, useEffect, useState } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {
  console.log('E');
  const [name, setName] = useState('abhisek')
  useEffect(() => {
    setName('dfgdfg');
  }, [])

  console.log('F');
  return (<ComponentF />)
}

export default React.memo(ComponentE)
