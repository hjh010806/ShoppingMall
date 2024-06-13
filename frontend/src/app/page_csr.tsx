'use client'
import { useEffect, useState } from 'react';
import Main from './Global/Layout/MainLayout';
import { getUser } from './API/UserAPI';
import ReactStars from 'react-stars'


interface pageProps {
    productList: any[];
}
export default function Page(props: pageProps) {
    const [user, setUser] = useState(null as any);
    const [productList, setProductList] = useState(props.productList);
    const ACCESS_TOKEN = typeof window === 'undefined' ? null : localStorage.getItem('accessToken');
    useEffect(() => {
        if (ACCESS_TOKEN)
            getUser()
                .then(r => {
                    setUser(r);
                    console.log(props.productList);
                })
                .catch(e => console.log(e));
    }, [ACCESS_TOKEN]);
    function MonthDate(){
        const now = new Date();
        let week = ''
        switch(now.getDay()+2)
        {
            case 0: week = "일"; break;
            case 1: week = "월"; break;
            case 2: week = "화"; break;
            case 3: week = "수"; break;
            case 4: week = "목"; break;
            case 5: week = "금"; break;
            case 6: week = "토"; break;
        }
        return (now.getMonth()+1)+"/"+(now.getDate()+2)+"("+week+")";
    }
    return <>
        <Main user={user} >
            <div className='w-full h-full flex justify-center'>
                <div className='flex flex-wrap w-[1240px]'>
                    {productList.map((product, index) =>
                        <a href={'/product/' + product.id} key={index}>
                            <div className='w-[394px] h-[431px] flex flex-col p-4 hover:border border-gray-500'>
                                <img src='/empty_product.png' className='w-[190px] h-[190px]' />
                                <label className='text-lg mt-2'>{product?.title}</label>
                                {/* <span className='text-xl mt-2'><label className='text-red-500 text-2xl'>9% </label> <label className='font-bold text-2xl'>10,400원</label>~ <label className='text-gray-300 line-through'>11,550원</label></span> */}
                                <label className='text-xl mt-2 font-bold text-2xl'>{product?.price.toLocaleString('ko-KR')}원</label>
                                <div className='mt-2 flex'>
                                    <ReactStars count={5} size={16} color2={'#ffd700'} edit={false} value={1.5} />
                                    <label className='text-xs self-center mt-1 ml-2'>6,523</label></div>
                                <label className='mt-1 text-sm'>포인트 최대 <label className='text-blue-400'>{product?.price/100}P</label> 적립</label>
                                <div className='text-sm flex justify-between w-full mt-auto'>
                                    <label>무료배송 <label className='text-blue-400'>{MonthDate()} 도착</label></label>
                                    <label>{product?.count.toLocaleString('ko-KR')}개 남음</label>
                                </div>
                            </div>
                        </a>
                    )}
                    {/* <a href='/'>
                        <div className='w-[394px] h-[431px] flex flex-col p-4 hover:border border-gray-500'>
                            <img src='/empty_product.png' className='w-[190px] h-[190px]' />
                            <label className='text-lg mt-2'>제목</label>
                            <span className='text-xl mt-2'><label className='text-red-500 text-2xl'>9%</label> <label className='font-bold text-2xl'>10,400원</label>~ <label className='text-gray-300 line-through'>11,550원</label></span>
                            <div className='mt-4'>
                                <div className='rating rating-xs'>
                                    <input type='radio' name='rating-5' className='mask mask-star-2 bg-orange-400' />
                                    <input type='radio' name='rating-5' className='mask mask-star-2 bg-orange-400' checked />
                                    <input type='radio' name='rating-5' className='mask mask-star-2 bg-orange-400' />
                                    <input type='radio' name='rating-5' className='mask mask-star-2 bg-orange-400' />
                                    <input type='radio' name='rating-5' className='mask mask-star-2 bg-orange-400' />
                                </div>
                                <label className='text-xs'> 6,123</label></div>
                            <label className='mt-1 text-sm'>포인트 최대 <label className='text-blue-400'>150P</label> 적립</label>
                            <div className='text-sm flex justify-between w-full mt-auto'>
                                <label>무료배송 <label className='text-blue-400'>6/15(토) 도착</label></label>
                                <label>1,523개 남음</label>
                            </div>
                        </div>
                    </a> */}
                </div>
            </div>
        </Main>
    </>
}