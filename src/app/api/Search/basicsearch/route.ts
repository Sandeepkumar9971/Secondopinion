import { NextResponse, NextRequest } from 'next/server'
import { connect } from '@/config/dbConfig'
import { encryptData, decryptData } from '@/Utils/Sceret'
import { Doctor } from '@/models/doctorModel'

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  console.log(searchParams)
  const data = searchParams.get('data');
  let param = JSON.parse(data)
  console.log("param==>", param.spec);
  let specialist = JSON.parse(decryptData(param.spec));
  console.log(specialist, "specialist");
  let specialist_ID = parseInt(specialist?.id)
  
  
  try {
    await connect()
    const searchagg = [
      {
        $match: {
          $or: [
            { specialization:specialist_ID},
            { fullname: specialist?.fullname }
          ]
        }
      },
      {
        $lookup: {
          from:"cities",
          localField:"city",
          foreignField: "id",
          as: "cityname"
        }
      },

      {
        $lookup: {
          from:"states",
          localField:"state",
          foreignField: "id",
          as: "statename"
        }
      },

      {
        $lookup: {
          from:"specializations",
          localField:"specialization",
          foreignField: "id",
          as: "spcename"
        }
      },
     
      {
        $project: {
          _id: 1,
          fullname: 1,
          Collage: 1,
          yearofcompletion: 1,
          specialization: 1,
          countryCode: 1,
          mobileNumber: 1,
          about: 1,
          email: 1,
          degrees: 1,
          facebook: 1,
          linkedin: 1,
          twitter: 1,
          youtube: 1,
          address: 1,
          gender: 1,
          city: 1,
          state: 1,
          experience: 1,
          feePerCunsultation: 1,
          availableSlots: 1,
          popular: 1,
          allAppointments: 1,
          sumOfRatings: 1,
          "cityname.name":1,
          "statename.name":1,
          "spcename.spec":1,
        }
      }
    ]
    
    const findspecilist = await Doctor.aggregate(searchagg);
    console.log("findspecilist==>", findspecilist);
    const encryp = encryptData(JSON.stringify(findspecilist));
    return NextResponse.json({ data:encryp, command: 1 }, { status: 200 });
  } catch (err: any) {
    console.error("Error:", err);
    return NextResponse.json({ data: err.message, command: 0 }, { status: 500 });
  }
}
