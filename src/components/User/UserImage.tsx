type UserImageProps = {
	src: string
}

const UserImage: React.FC<UserImageProps> = ({ src }) => {
	return (
		<img
			className='w-full h-full object-cover rounded-full bg-gray-200'
			src={src}
			alt=''
			onError={({ currentTarget }) => {
				currentTarget.onerror = null // prevents looping
				currentTarget.src = '/src/assets/notfound.png'
			}}
		/>
	)
}

export default UserImage
