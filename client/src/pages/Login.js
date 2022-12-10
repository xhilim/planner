import { useState } from 'react'

function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			localStorage.setItem('user', email)
			alert('Login successful')
			window.location.href = '/calendar'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
	<div className='flex justify-center items-center h-screen'>
		<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={loginUser}>
			<div className='mb-4'>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Nazwa użytkownika:
				</label>
				<input className='shadow appearance-none border border-fuchsia-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								placeholder="Email"
					/>	
				</div>
				<div className='mb-6'>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Hasło:
				</label>
				<input className='shadow appearance-none border border-fuchsia-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline '
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								placeholder="Password"
					/>
				<p className='text-fuchsia-900 text-xs italic'>Pamiętaj, że hasło musi spełniać wymogi bezpieczeństwa.</p>
				</div>
				<div className='flex items-center justify-between'>
				<input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' value="Zaloguj"/>
				</div>
			<p className='text-center text-gray-500 text-xs'></p>
		</form>
	</div>
	)
}

export default App