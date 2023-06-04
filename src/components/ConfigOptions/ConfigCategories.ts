import { ConfigOptions } from "./ConfigOptions"

type ConfigCategories = {
    imageUrl: string,
    text: string
    options: ConfigOptions[]
  }

  export const ConfigCategories: ConfigCategories[] = [
    {imageUrl: 'https://via.placeholder.com/150', text: 'MAIN', 
    options: [
        {imageUrl: 'https://via.placeholder.com/150', text: '1'}, 
        {imageUrl: 'https://via.placeholder.com/150', text: '2'}
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
