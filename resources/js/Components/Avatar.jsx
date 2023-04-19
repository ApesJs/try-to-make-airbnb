import React from "react"

const people = [
    {
      name: 'Asep Jaenudin Sutarji',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/100652324_2553937871603550_2059363194102611968_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pWhqFs4CAYkAX-qTvdD&_nc_oc=AQn_M4XzwINDtKtbxeKc8YbK7vTgIm4_D4ajEMbOo-2gFku6tFIgv8rZoyN_ZdxOm8Nqf-1RPK2Ems4mK57b5kcW&_nc_ht=scontent-sin6-1.xx&oh=00_AfAfnI_YHcTH_CJbpxdabDvfuYMHDidhEp_H8xm-55-XNg&oe=640DE919'
    },
  ]
  
export default function Avatar() {
    return (
        <div className="">
            <ul role="list" className="">
                {people.map((person) => (
                    <li key={person.name}>
                        <div className="">
                            <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}  