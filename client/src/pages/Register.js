import { useState } from 'react'

function Register() {

	const [nick, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
                nick,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			window.location.href = '/login'
            alert("Register uccesful")
		}
        else {
            alert("User with that email exists")
        }
	}

	return (
		<div className='flex justify-center items-center h-screen'>
		<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={registerUser}>
			<div className='mb-4'>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Nazwa użytkownika:
				</label>
				<input className='shadow appearance-none border border-fuchsia-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
								value={nick}
								onChange={(e) => setName(e.target.value)}
								type="text"
								placeholder="Nick"
					/>	
				</div>
				<div className='mb-4'>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Adres email:
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
				<p className='text-fuchsia-900 text-xs italic '>Pamiętaj, że hasło musi spełniać wymogi bezpieczeństwa.</p>
				</div>
				<div className='flex items-center justify-between'>
				<input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' value="Zaloguj"/>
				</div>
			<p className='text-center text-gray-500 text-xs'></p>
		</form>
	</div>
		
	)
}

export default Register


/*
<div className='w-full max-w-sm'>
			<div className='md:flex md:items-center mb-6'>
				<form onSubmit={registerUser}>
					<input className='w-48 h-14 rounded-r-lg'
						value={nick}
						onChange={(e) => setName(e.target.value)}
						type="text"
						placeholder="Nick"
					/>
					<br />
					<input className='w-48 h-14 rounded-r-lg'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="Email"
					/>
					<br />
					<input className='w-48 h-14 rounded-r-lg'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Password"
					/>
					<br />
					<input className='mt-2 text-4xl bg-sky-500/100 w-120 rounded-md ml-14 p-2' type="submit" value="Register" />
				</form>
			</div>
		</div>



/*
<div className='flex justify-center items-center h-screen'>
		<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={loginUser}>
			<div className='mb-4'>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Username
				</label>
				<input className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								placeholder="Email"
					/>	
				</div>
				<div className='mb-6'>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Password
				</label>
				<input className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline '
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								placeholder="Password"
					/>
				<p className='text-red-500 text-xs italic'>Please choose a password.</p>
				</div>
				<div className='flex items-center justify-between'>
				<input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' value="Zaloguj"/>
				</div>
			<p className='text-center text-gray-500 text-xs'></p>
		</form>
	</div>
	*/