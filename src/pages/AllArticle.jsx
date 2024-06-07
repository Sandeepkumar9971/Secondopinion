"use client"

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {useRouter} from 'next/navigation'
// import { Button } from '@material-tailwind/react';
const AllArticle = () => {
    let router = useRouter()
    const toparticle = [
        {
            id: 1,
            img: "/120124d439d42764bad2d37d5bc7e9a800033017.jpg",
            heading: "How does sleep affect weight loss?",
            text: "wieosfldjcbx eskfdhcxb",
            docname: "Ms.Geetanjali, Dietitian/Nutritionist",
            like: 3,
            info: "Wondering what sleeping has to do with weight loss? You might follow the best diet and have a great fitness ...",
            subcategory: ['Dental Care', 'Oral Hygiene']
        },
        {
            id: 2,
            img: "/49babec8e21c7ea4b59e1c2f51109308268b3960.jpg",
            heading: "The Magic of Invisible Braces",
            text: "wieosfldjcbx eskfdhcxb",
            docname: "Dr.Pamela Bhattacharjee, Dentist",
            like: 35,
            info: "We have been seeing braces on many people since time immemorial and most of us shudder by the thought of ...",
            subcategory: ['Dental Care', 'Oral Hygiene']
        },
        {
            id: 3,
            img: "/11d605bf888ffe75c61b667e9c3a49186e409535.jpg",
            heading: "Can Male Sexual Problems Be Cured Like Any Other Disease ?",
            text: "wieosfldjcbx eskfdhcxb",
            docname: "Dr.Mahesh Shah, Ayurveda",
            like: 31,
            info: "Yes, sexual problem in men is just a common health issue for which there is nothing wrong to be concerned ... ",
            subcategory: ['Dental Care', 'Oral Hygiene']
        },
        {
            id: 3,
            img: "/11d605bf888ffe75c61b667e9c3a49186e409535.jpg",
            heading: "Can Male Sexual Problems Be Cured Like Any Other Disease ?",
            text: "wieosfldjcbx eskfdhcxb",
            docname: "Dr.Mahesh Shah, Ayurveda",
            like: 31,
            info: "Yes, sexual problem in men is just a common health issue for which there is nothing wrong to be concerned ... ",
            subcategory: ['Dental Care', 'Oral Hygiene']
        },
        {
            id: 3,
            img: "/11d605bf888ffe75c61b667e9c3a49186e409535.jpg",
            heading: "Can Male Sexual Problems Be Cured Like Any Other Disease ?",
            text: "wieosfldjcbx eskfdhcxb",
            docname: "Dr.Mahesh Shah, Ayurveda",
            like: 31,
            info: "Yes, sexual problem in men is just a common health issue for which there is nothing wrong to be concerned ... ",
            subcategory: ['Dental Care', 'Oral Hygiene']
        },
        {
            id: 3,
            img: "/11d605bf888ffe75c61b667e9c3a49186e409535.jpg",
            heading: "Can Male Sexual Problems Be Cured Like Any Other Disease ?",
            text: "wieosfldjcbx eskfdhcxb",
            docname: "Dr.Mahesh Shah, Ayurveda",
            like: 31,
            info: "Yes, sexual problem in men is just a common health issue for which there is nothing wrong to be concerned ... ",
            subcategory: ['Dental Care', 'Oral Hygiene']
        },
    ]
    return (
        <>
            <div className="flex flex-col mt-5 ">
                <div className="flex flex-col text-center">
                    <h2 className="text-3xl">Top health articles</h2>
                    <h3 className="text-sm">Trending tips from doctors and health experts</h3>
                </div>
                <div>

                    <div className="flex flex-col flex-wrap lg:flex-row mt-3">
                        <div className="w-full lg:w-1/2 lg:pl-4">
                            <div className="grid grid-cols-12 md:grid-cols-3 lg:grid-cols-3 gap-4">
                                {
                                    toparticle?.map((article) => {
                                        return (
                                            <>
                                                <div
                                                    className="bg-white p-2 shadow-lg rounded-lg transition transform hover:-translate-y-2"
                                                    onClick={()=>{router.push(`/articles/readarticle/${article.id}`)}}
                                                >
                                                    <img
                                                        src={article.img}
                                                        alt={article.heading}
                                                        className="inline-block shrink-0 rounded-[.35rem] shadow aspect-[6/6] cursor-pointer"
                                                    />
                                                    <h3 className="text-lg font-semibold mb-2">{article.heading}</h3>
                                                    <p className="text-sm text-gray-600 mb-2">{article.docname}</p>
                                                    <p className="text-sm mb-4">{article.info}</p>
                                                    <div className='flex flex-row flex-wrap gap-2'>
                                                        {
                                                            article?.subcategory?.map((sub) => {
                                                                return <span className='border p-2 cursor-pointer' onClick={() => { alert(sub) }}>{sub}</span>
                                                            })
                                                        }

                                                    </div>
                                                    <div className="flex items-center mt-4 gap-5">
                                                        <FavoriteIcon style={{ color: 'red' }} />
                                                        <span className="text-sm text-gray-600">{article.like}</span>
                                                        <ShareIcon className='cursor-pointer text-sm ml-5' />
                                                    </div>

                                                </div>

                                            </>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AllArticle;