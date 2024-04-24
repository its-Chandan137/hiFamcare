import React from 'react'

export const Comments = ({data}) => {
  return (
    <div className='h-full w-[450px] p-6 border border-none rounded-3xl mt-20'>
        <div className="relative flex text-slate-400 text-sm leading-6">
            <div className="mt-1 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
                {data.id}
            </div>
            <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl">
                    <p className="mt-2 mr-2 text-xs flex justify-end">0{data.id}</p>
                </div>
            </div>
        </div>

        <div className="relative">
            <div className="h-[120px] w-full text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
                <data className="w-1/4 h-[90px] p-5 flex flex-col justify-center items-center mt-6">
                    <img
                        src={data.image}
                        alt="Img"
                        className="h-[60px] w-[60px] rounded-full bg-contain"
                        />
                    <span></span>
                </data>
                <div className="w-3/4 max-h-max p-3 overflow-hidden overflow-y-auto relative">
                    <p className="text-primary-gray">
                        {data.review}
                    </p>
                    {/* <details className="text-primary-darkBlue">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elitpsum dolor, sit amet consectetur adipisicing elit.psum dolor, sit amet consectetur adipisicing elit Quaerat, expedita ex enim deserunt dolorem quae in adipisci officia
                    </details>  */}
                </div>
            </div>
            {/* <BodyOne className="text-sm  absolute right-5 top-10">Weight : <span>58kg</span></BodyOne> */}
        </div>
    </div>
  )
}
