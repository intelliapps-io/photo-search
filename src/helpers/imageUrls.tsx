const baseUrl = 'https://dabd70rkyp6.cloudfront.net'

interface IImageUrlList {
  dog: string[]
  fish: string[]
  land: string[]
  snow: string[]
  water: string[]
}

const imagesUrls: IImageUrlList = {
  dog: [
    baseUrl + '/dog/dog1.jpg',
    baseUrl + '/dog/dog2.jpg',
    baseUrl + '/dog/dog3.jpg',
    baseUrl + '/dog/dog4.jpg',
    baseUrl + '/dog/dog5.png',
  ],
  fish: [
    baseUrl + '/fish/fish1.jpg',
    baseUrl + '/fish/fish2.jpg',
    baseUrl + '/fish/fish3.jpg',
    baseUrl + '/fish/fish4.jpg',
    baseUrl + '/fish/fish5.jpg',
  ],
  land: [
    baseUrl + '/land/landscape1.jpg',
    baseUrl + '/land/landscape2.jpg',
    baseUrl + '/land/landscape3.jpg',
    baseUrl + '/land/landscape4.jpg',
    baseUrl + '/land/landscape5.jpg',
  ], 
  snow: [
    baseUrl + '/snow/snow1.jpg',
    baseUrl + '/snow/snow2.jpg',
    baseUrl + '/snow/snow3.jpg',
  ], 
  water: [
    baseUrl + '/water/water1.jpg',
    baseUrl + '/water/water2.jpg',
    baseUrl + '/water/water3.jpg',
    baseUrl + '/water/water4.jpg',
    baseUrl + '/water/water5.jpg',
  ]
}

type ImageType = 'dog' | 'fish' | 'land' | 'snow' | 'water'
export type ImageArrayItem = {type: ImageType, url: string }
type ImagesArray = ImageArrayItem[]

export const getImageUrls = (): ImagesArray => {
  let images: ImagesArray = []

  const pushImages = (type: ImageType, urls: string[]) => {
    urls.forEach(url => images.push({ type, url }))
  }
  
  pushImages('dog', imagesUrls.dog)
  pushImages('fish', imagesUrls.fish)
  pushImages('land', imagesUrls.land)
  pushImages('snow', imagesUrls.snow)
  pushImages('water', imagesUrls.water)

  shuffleArray(images)

  return images
}

function shuffleArray(arr: Array<any>) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export function randBetween(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
