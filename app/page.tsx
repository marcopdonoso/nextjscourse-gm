import { Navigator } from '@/components'
import { Routes } from '@/models'
import Image from 'next/image'
import logo from '@/public/images/Logo IMPROMEC_tr.png'
import { impromecLogoBlur } from './information/models'
import Script from 'next/script'

function App() {
	return (
		<>
			<Script strategy='lazyOnload' src='https://example.com/script.js' />
			<div style={{ position: 'relative' }}>
				<h1>Welcome to Rick and Morty app</h1>
				<h2>What do you want to see</h2>
				<Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
				<Image
					alt='impromec logo'
					src={logo}
					blurDataURL={impromecLogoBlur}
					placeholder='blur'
				/>
			</div>
		</>
	)
}

export default App
