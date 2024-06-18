import {NextResponse,NextRequest} from 'next/server'
import { connect } from '@/config/dbConfig';
import {citydata} from '@/models/list/list'
import {encryptData} from '@/Utils/Sceret'

export const POST = async (req:NextRequest) =>{
    const body = await req.json()
    const {stateid} = body
    const sid = parseInt(stateid)
    try{
        connect()
        const data = await citydata.find({state_id:sid},{name:1,id:1})
        const encryp = encryptData(JSON.stringify(data))
        return NextResponse.json({data:encryp,success:true},{status:200})
    }
    catch(e){
        return NextResponse.json({ message: 'Internal Server Error', success: false }, { status: 500 });
    }

}