import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function profile() {
  return (
    <div className="cardprofile">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="roundimg w-full"
          src="/images/profile.png"
          alt="profile image"
        ></img>
        <div className="px-6 py-4">
          <div className="textcenter font-bold text-xl mb-2 justify-content-center py-4">
            강형욱
          </div>
          <p className="cardprofiletext">중부대학교</p>
          <p className="cardprofiletext">91912074</p>
          <p className="cardprofiletext">게임소프트웨어전공</p>
          <p className="cardprofiletext">010-9950-3538</p>
          <p className="cardprofiletext">comonhuman@gmail.com</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span>
            <Link href='https://github.com/C0mm4'>
              <img className='inline-block w-16 h-16 rounded-full'
              src="/images/GitHub-Mark.png"
              alt="github"></img>
            </Link>
          </span>
          
        </div>
        <div className="px-6 pt-4 pb-2 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #c++
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #c#
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #python
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #java
          </span>
        </div>
      </div>
    </div>
  );
}
