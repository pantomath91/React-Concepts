import React from 'react';
import { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
	const user = useContext(UserContext)
	const channel = useContext(ChannelContext)

	return (
		<div> User is {user} and channel is {channel}</div>
	)
}

export default React.memo(ComponentF)
