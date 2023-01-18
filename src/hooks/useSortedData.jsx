import React, { useEffect, useState } from 'react'

const useSortedData = (data,columnObj) => {



    const [toggle,setToogle]=useState(columnObj)
    const [sortedData,setSortedData]=useState(data)

    useEffect(() => {
        setSortedData(data)
    },[data])



    const handleSort=(arg,type)=> {
        setToogle({...toggle, [arg]: toggle[arg] * (-1)});
        setSortedData(
          [...sortedData]?.sort((a,b)=> {
            if(type==="number"){
            return (a[arg] - b[arg]) * toggle[arg]
            }else {
              if(toggle[arg]===1){
                return b[arg] > a[arg]  ? 1 : b[arg] < a[arg] ? -1 : 0
              }else {
               return a[arg] > b[arg]  ? 1 : a[arg] < b[arg] ? -1 : 0
              }
            }
          })
        
        )
  }







  return {handleSort,toggle,sortedData}
}

export default useSortedData