import {useEffect} from 'react'

export function useTitle({openFood,orders}){
  useEffect(()=>{
    if(openFood){
      document.title = openFood.name
    }else{
      document.title = orders.length ===0 ? `吃殺毀` : `[${orders.length}] 個項目` 
    }
  })
}