import Typearticle from '@/pages/Typearticle'
const page = ({params}) =>{
    return <>
     <Typearticle param = {params.searchname} mod={'search'}/>
    </>
}
export default page;