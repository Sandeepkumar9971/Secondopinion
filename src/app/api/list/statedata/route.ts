import {NextResponse,NextRequest} from 'next/server'
import { connect } from '@/config/dbConfig';
import {statedata} from '@/models/list/list'
import {encryptData} from '@/Utils/Sceret'

export const GET = async () =>{
    try{
        connect()
        const data = await statedata.find({country_id:101},{name:1,id:1})
        const encryp = encryptData(JSON.stringify(data))
        return NextResponse.json({data:encryp,success:true},{status:200})
    }
    catch(e){
        return NextResponse.json({ message: 'Internal Server Error', success: false }, { status: 500 });
    }

}