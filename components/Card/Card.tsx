import Image from 'next/image'
import CardStyles from './Card.module.css'

export interface CardData {
	name: string
	type?: string
	created: string
	image?: string
}

interface Props {
	data: CardData
}

function Card({ data }: Props) {
	let formattedType = data.type
	formattedType ||= 'No type'

	return (
		<div className={CardStyles.Card}>
			<p>Name: {data.name}</p>
			<p>Type: {formattedType}</p>
			<p>Created: {data.created}</p>
			{data.image != null && (
				<Image width='100' height='100' alt='Image' src={data.image} priority />
			)}
		</div>
	)
}

export default Card
