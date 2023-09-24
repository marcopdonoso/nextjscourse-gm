import { type Metadata } from 'next'
import Image from 'next/image'

async function getData() {
	const response = await fetch('https://rickandmortyapi.com/api/character/2')
	return await response.json()
}

export const metadata: Metadata = {
	title: 'dashboard',
	description: 'this is the description',
}

async function Dashboard() {
	const data = await getData()
	return (
		<div>
			<Image width='100' height='100' src={data.image} alt='Morty' />
		</div>
	)
}

export default Dashboard
