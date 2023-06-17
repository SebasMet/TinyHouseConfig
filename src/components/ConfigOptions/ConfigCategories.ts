import { ConfigOptions } from "./ConfigOptions"


type ConfigCategories = {
    imageUrl: string,
    text: string
    options: ConfigOptions[]
  }

  export const ConfigCategories: ConfigCategories[] = [
    {imageUrl: 'https://via.placeholder.com/150', text: 'Wood - Type', 
    options: [
        {imageUrl: 'https://i.ibb.co/SPYVWFv/Bubinga.jpg', text: 'Bubinga'}, 
        {imageUrl: 'https://i.ibb.co/Nj1GNpb/Mahowarp.jpg', text: 'Mahowarp'},
        {imageUrl: 'https://i.ibb.co/6RYTYSm/Rosewarp-ft.jpg', text: 'Rosewarp'},
        {imageUrl: 'https://i.ibb.co/zsm0DN3/Tamowarp-ft.jpg', text: 'Tamowarp'},
        {imageUrl: 'https://i.ibb.co/HNVhbdz/Whitesycamore.jpg', text: 'Whitesycamore'},
        {imageUrl: 'https://i.ibb.co/ssbprrw/Zebrano.jpg', text: 'Zebrano'},
    ]},
    {imageUrl: 'https://via.placeholder.com/150', text: 'MAIN', 
    options: [
        {imageUrl: 'https://via.placeholder.com/150', text: '1'}, 
        {imageUrl: 'https://via.placeholder.com/150', text: '2'}
    ]},
    {imageUrl: 'https://via.placeholder.com/150', text: 'MAIN', 
    options: [
        {imageUrl: 'https://via.placeholder.com/150', text: '1'}, 
        {imageUrl: 'https://via.placeholder.com/150', text: '2'}
    ]}
    
  ];
