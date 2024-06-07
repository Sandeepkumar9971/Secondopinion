import Typearticle from '@/pages/Typearticle'

const page = ({params}) =>{
    console.log("params==>",params.typename)
    return <>
  <Typearticle param = {params.typename}/>
    </>
}
export default page;