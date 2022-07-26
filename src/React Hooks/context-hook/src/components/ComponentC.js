import React from 'react'
import ComponentE from './ComponentE'

export const ComponentC = React.memo(() => {
	console.log('C');
	return <ComponentE />
})
