const allImages = ['/images/compressed/etihad', '/images/compressed/malta', '/images/compressed/qantas', '/images/compressed/westjet']

const getRandomImage = () => allImages[Math.floor(Math.random() * allImages.length)]

export default allImages
export { getRandomImage }
