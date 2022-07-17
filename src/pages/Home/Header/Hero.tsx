export default function Hero () {
  const Work = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  const Bio = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
  const Hobby = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
  const Future = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  const Portfolio = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
  const Dream = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  const techBox = [
    { src: Work, title: 'Work', detail: 'WEBフロント＆バックエンドエンジニアをしております。主にフロントをReact、バックをLaravelでアプリ、サイトを作成しております。' },
    { src: Bio, title: 'Bio', detail: '2021年4年制専門学校WEB制作学科卒業、そのまま新卒として入社。諸事情により2022年1月末退職、そのまま夢であったフリーランス開始。' },
    { src: Hobby, title: 'Hobby', detail: 'プログラム、筋トレ、作曲、ゲームをして過ごしています。特に筋トレは3ヶ月ほど続いており、身体の変化も実感し始め最高に楽しいです！' },
    { src: Future, title: 'Future', detail: '各種Componentsの作成、掲載をしたいです。その他にも筋トレ管理アプリをReact Nativeで制作し、アプリとしてリリースしたいです。' },
    { src: Portfolio, title: 'Portfolio', detail: 'Portfolio(没)、InfiniteScroller、素のPHPと素のJS、ReactとLaravelで非同期掲示板、Portfolio(こちら)を制作しました。詳細↓' },
    { src: Dream, title: 'Dream', detail: '「言語」「ライブラリ」「ブログ」等から助けて貰っているので、今後は自らアウトプットし、他のプログラマーの手助けをしたいです。' },
  ]
  return(
    <div className=' pt-32 pb-20'>
      <div className='container mx-auto h-full flex items-center justify-center'>
        <div className='w-full'>
          <div>
            <h1 className='font-bold text-center mb-10 text-6xl'>Hello, My name is Aku.</h1>
          </div>
          <div>
            <h2 className='text-center mb-20 text-neutral-700 text-4xl'>Back and Front engineer.</h2>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-5">
            { techBox.map((val, key) => {
              return(
                <TechBox key={ key } src={ val.src } title={ val.title } detail={ val.detail } />
              )
            }) }
          </div>
        </div>
      </div>
    </div>
  )
}

type TechBoxProps = {
  src: any,
  title: string,
  detail: string,
}

const TechBox = (props: TechBoxProps) => {
  return(
    <>
      <div className='rounded-md flex flex-col justify-center bg-neutral-700 p-5 mb-4 md:m-0'>
        <div className='flex mb-3'>
          <div className='w-12 h-12 p-2 rounded-md flex items-center justify-center bg-neutral-900'>{ props.src }</div>
          <h3 className='flex justify-center items-center ml-2 font-bold'>{ props.title }</h3>
        </div>
        <div>
          <p className='text-sm'>{ props.detail }</p>
        </div>
      </div>
    </>
  )
}