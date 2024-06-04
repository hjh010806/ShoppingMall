"use client"

import { useState } from "react"


export default function Page(){
    const[canSee,setCanSee] = useState(false);
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    function Sumbit(){
        console.log({username:username,password:password});
    }
    return <div className="w-full h-screen">
        <div className="flex flex-col items-center justify-center h-full relative">
            <img src="/logo.png" className="w-[75px] h-[32px] mb-[40px]"/>
            <input type='text' className="w-[396px] h-[46px] input input-bordered rounded-[0]" style={{outline:'0px'}} placeholder="아이디 입력"  onFocus={e=>e.target.style.border='2px solid red'} onBlur={e=>e.target.style.border=''} onChange={e=>setUsername(e.target.value)}/>
            <input type={canSee?'text': 'password'} className="w-[396px] h-[46px] input input-bordered rounded-[0]" style={{outline:'0px'}} placeholder="비밀번호 8자~20자" onFocus={e=>e.target.style.border='2px solid red'} onBlur={e=>e.target.style.border=''} onChange={e=>setPassword(e.target.value)}/>
            <div className="w-[396px] mt-1"><input type="checkbox" onChange={()=>setCanSee(!canSee)}/> <label>비밀번호 확인</label></div>
            <button className="btn btn-error text-white text-lg w-[396px] mt-[24px]" onClick={()=>Sumbit()}>로그인</button>
            <div className="flex justify-evenly w-[396px] mt-[12px]">
                <a href="/">아이디찾기</a>
                <a href="/">비밀번호찾기</a>
                <a href="/account/register">회원가입</a>
            </div>
            <label className="text-gray-400 text-sm mt-[50px]">Copyright © 2019 11Street Co.,Ltd. All Rights Reserved.</label>
        </div>
    </div>
}