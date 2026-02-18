import imageA from '../assets/image.jpg'
import countries from '../assets/countries.jpg'
import ipaddress from "../assets/IPaddress.jpg"

type cardData = {
  id: number,
  num: string,
  title: string,
  image: string,
  about: string,
  // stack: string[]


}

export const ProjectItems : cardData[] = [
  {
    id: 1,
    num: "01",
    title: "Positivus",
    image: imageA,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus sapiente aspernatur a. Sequi illum nesciunt necessitatibus, molestiae ea eveniet earum rem placeat dolores blanditiis veritatis, recusandae veniam eum labore."
  },
  {
    id: 2,
    num: "02",
    title: "Github Search",
    image: imageA,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus sapiente aspernatur a. Sequi illum nesciunt necessitatibus, molestiae ea eveniet earum rem placeat dolores blanditiis veritatis, recusandae veniam eum labore."
  },
  {
    id: 3,
    num: "03",
    title: "REST Countries Explorer",
    image: countries,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus sapiente aspernatur a. Sequi illum nesciunt necessitatibus, molestiae ea eveniet earum rem placeat dolores blanditiis veritatis, recusandae veniam eum labore."
  },
  {
    id: 4,
    num: "04",
    title: "Furnihome",
    image: imageA,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus sapiente aspernatur a. Sequi illum nesciunt necessitatibus, molestiae ea eveniet earum rem placeat dolores blanditiis veritatis, recusandae veniam eum labore."
  },
  {
    id: 5,
    num: "05",
    title: "IP Address Tracker",
    image: ipaddress,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus sapiente aspernatur a. Sequi illum nesciunt necessitatibus, molestiae ea eveniet earum rem placeat dolores blanditiis veritatis, recusandae veniam eum labore."
  }

]