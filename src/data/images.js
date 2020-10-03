import etihad from '../img/hires/etihad.png'
import malta from '../img/hires/malta.png'
import qantas from '../img/hires/qantas.png'
import westjet from '../img/hires/westjet.png'

const allImages = [etihad, malta, qantas, westjet]
const getRandomImage = () => allImages[Math.floor(Math.random() * allImages.length)]

export default allImages

export { getRandomImage }
