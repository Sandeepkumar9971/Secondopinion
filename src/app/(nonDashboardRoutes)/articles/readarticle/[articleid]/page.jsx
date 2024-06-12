import React from 'react'
import ReadArticle from '@/pages/ReadArticle'

const page = ({param}) => {
  console.log(param)
  return (
    <div>
      <ReadArticle/>
    </div>
  )
}

export default page