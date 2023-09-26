import cardLayoutStyles from '@/app/information/information-layout.module.css'

function CardLayout({ children }: { children: React.ReactNode }) {
	return <div className={cardLayoutStyles.informationLayout}>{children}</div>
}

export default CardLayout
