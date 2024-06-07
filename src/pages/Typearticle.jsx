"use client"
import { Breadcrumbs } from "@material-tailwind/react";
import Link from 'next/link'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Typearticle = ({ param, mod }) => {
    const carddata = [
        {
            id: 1,
            image: '/story.jpg',
            tittle: '7 Health Benefits of Dates',
            text: 'Dates are the sweet and chewy fruit of the date palm tree (Phoenix dactylifera). Dates have been the stap...',
            docname: 'Dr.Prabha Acharya',
            like: 10,

        },
        {
            id: 2,
            image: '/story.jpg',
            tittle: '7 Health Benefits of Dates',
            text: 'Dates are the sweet and chewy fruit of the date palm tree (Phoenix dactylifera). Dates have been the stap...',
            docname: 'Dr.Prabha Acharya',
            like: 10,

        },
        {
            id: 3,
            image: '/story.jpg',
            tittle: '7 Health Benefits of Dates',
            text: 'Dates are the sweet and chewy fruit of the date palm tree (Phoenix dactylifera). Dates have been the stap...',
            docname: 'Dr.Prabha Acharya',
            like: 10,

        },
        {
            id: 4,
            image: '/story.jpg',
            tittle: '7 Health Benefits of Dates',
            text: 'Dates are the sweet and chewy fruit of the date palm tree (Phoenix dactylifera). Dates have been the stap...',
            docname: 'Dr.Prabha Acharya',
            like: 10,

        },
        {
            id: 5,
            image: '/story.jpg',
            tittle: '7 Health Benefits of Dates',
            text: 'Dates are the sweet and chewy fruit of the date palm tree (Phoenix dactylifera). Dates have been the stap...',
            docname: 'Dr.Prabha Acharya',
            like: 10,

        },
    ]
    const heading = (param) => {
        let p = param.split('_')
        let h = p[0] + " " + p[1]
        return h
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between'
            }}>
                <div className="article-section">
                    <div className="article-content shadow-lg">
                        <div>
                            <Breadcrumbs>
                                <Link href={'/articles'} className="opacity-60">
                                    HOME
                                </Link>
                                <Link href={'/articles'} className="opacity-60">
                                    {mod == 'search' ? 'Search' : 'Article'}
                                </Link>
                                <Link href={'/articles'}>{mod == 'search' ? param : heading(param)}</Link>
                            </Breadcrumbs>
                        </div>
                        <h2 className="text-2xl mt-4"><span style={{ color: '#B4B4BE' }}>Articles on</span> {mod == 'search' ? param : heading(param)}</h2>
                        <div className="mt-5 flex flex-col flex-wrap gap-4">
                            {
                                carddata?.map((item) => {
                                    return (
                                        <>
                                            <Card className="w-full max-w-[48rem] flex-row">
                                                <CardHeader
                                                    shadow={false}
                                                    floated={false}
                                                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt="card-image"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </CardHeader>

                                                <CardBody>
                                                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                                        {item.docname}
                                                    </Typography>
                                                    <Typography variant="h4" color="blue-gray" className="mb-2">
                                                        {item.tittle}
                                                    </Typography>
                                                    <Typography color="gray" className="mb-8 font-normal">
                                                        {item.text}
                                                    </Typography>
                                                    <Link href={`/articles/readarticle/${item.id}`} className="inline-block">
                                                        <Button variant="text" className="flex items-center gap-2">
                                                            READ
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                className="h-4 w-4"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                                />
                                                            </svg>
                                                        </Button>
                                                    </Link>
                                                    <Typography color="gray" className="mb-8 font-normal flex flex-row gap-10">
                                                        <div>
                                                            <FavoriteIcon className='text-red-700' /><span>{item.like}</span>
                                                        </div>
                                                        <div>
                                                            <ShareIcon />
                                                        </div>
                                                    </Typography>
                                                </CardBody>
                                            </Card>
                                            <hr className="mt-2" />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="popular-articles-section shadow-lg">
                    <h2 className="text-sm ml-4 mt-4">RELATED TAGS</h2>
                    <div className="popular-article">
                        <img src="/mailinbox.svg" alt="Popular Article" className="popular-article-image" />
                        <input className='border p-3 popular-article-input' type="text" placeholder="Your Email Address" onChange={(e) => { console.log(e.target.value) }} />
                        <Button onClick={() => { router.push(`/articles`) }} className="popular-article-button">Send Mail</Button>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
            body {
                scroll-behavior: smooth;
            }
            .article-text {
                width: 60ch;
                word-break: break-word;
                line-height: 1.6;
            }
            .article-section {
                display: flex;
                flex: 3;
                flex-direction: column;
                padding: 1%;
            }
            .article-content {
                padding: 20px;
                background-color: #fff;
            }
            .author-info {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
            }
            .author-image {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-right: 10px;
            }
            .author-name {
                font-size: 1.2em;
                font-weight: bold;
                color: #333;
            }
           .popular-articles-section {
            flex: 1;
            flex-direction: column;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .popular-article {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .popular-article img {
            width: 80px;
            height: 80px;
            margin-bottom: 10px;
        }
        .popular-article-input {
            width: 100%;
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .popular-article-button {
            background:#80BFEA;
            color: #000;
            padding: 10px 20px;
            border-radius: 4px;
        }
        @media (max-width: 768px) {
            .popular-article {
                padding: 10px;
            }
            .popular-article img {
                width: 60px;
                height: 60px;
            }
            .popular-article-input {
                padding: 8px;
            }
            .popular-article-button {
                padding: 8px 16px;
            }
        }
        @media (max-width: 1024px) {
            .popular-articles-section {
                padding: 15px;
            }
            .popular-article {
                padding: 15px;
            }
        }

            @media (max-width: 768px) {
                .article-section,
                .popular-articles-section {
                    flex: 1 1 100%;
                    padding: 10px;
                }
                .article-content,
                .popular-articles-section {
                    margin-bottom: 20px;
                }
                .article-content h2 {
                    font-size: 1.5rem;
                }
                .article-content .card {
                    flex-direction: column;
                }
                .article-content .card img {
                    width: 100%;
                    height: auto;
                }
            }

            @media (max-width: 1024px) {
                .article-section,
                .popular-articles-section {
                    width: 48%;
                }
                .container {
                    flex-direction: row;
                    justify-content: space-between;
                }
            }

            @media (min-width: 1024px) {
                .container {
                    max-width: 1024px;
                    margin: 0 auto;
                }
            }

            @media (min-width: 1200px) {
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
            }

            @media (min-width: 1440px) {
                .container {
                    max-width: 1440px;
                    margin: 0 auto;
                }
            }
        `}
            </style>
        </div>
    );
}

export default Typearticle