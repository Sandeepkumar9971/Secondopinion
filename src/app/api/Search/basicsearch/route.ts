import { NextResponse, NextRequest } from 'next/server'
import {connect} from '@/config/dbConfig'

export const GET = (req: NextRequest) => {
    
    const { searchParams } = new URL(req.url);
    console.log(searchParams)
    const data = searchParams.get('data');
    let param = JSON.parse(data)
    console.log(param);
    try{
        connect()
        // const serachdata = [
        //     {
        //         $match:{

        //         }
        //     }
        // ]
        return NextResponse.json({data:param,command:1},{status:200});
    }
    catch(err:any){
  return NextResponse.json({data:err,command:0},{status:500});
    }
  
   
}