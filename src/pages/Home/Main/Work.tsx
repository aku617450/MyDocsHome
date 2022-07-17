import bb_black from './../../../img/work/bb_black.png'
import bb_green from './../../../img/work/bb_green.png'
import infinityScroller from './../../../img/work/infinityScroller.png'
import portfolio_pc from './../../../img/work/portfolio_pc.png'
import portfolio_phone from './../../../img/work/portfolio_phone.png'

export default function Work () {
  const boxContent = [
    { src: bb_black, alt: 'Black bulletin board', title: 'Black bulletin board', detail: `DockerとPHPとJSで作成した非同期の掲示板です` },
    { src: bb_green, alt: 'Green bulletin board', title: 'Green bulletin board', detail: 'DockerとLaravelとReactとTypeScriptで作成した非同期の掲示板です' },
    { src: infinityScroller, alt: 'Infinity Scroller', title: 'Infinity Scroller', detail: 'ViteとReactとTypeScriptでスクロールでページネーションを実装しました' },
    { src: portfolio_pc, alt: 'Portfolio for PC', title: 'Portfolio for PC', detail: 'Portfolio初期案です、画像が主役となるデザインは気に入っていますが、画像が全くないという始末ということでやめました、いつか作成したいです' },
    { src: portfolio_phone, alt: 'Portfolio for phone', title: 'Portfolio for phone', detail: 'Portfolio初期案のスマホ版です' },
  ]
  return(
    <div className='py-20 px-8'>
      <div className='container mx-auto h-full flex items-center justify-center'>
        <div className='w-full'>
          <div>
            <h1 className='font-bold mb-8 text-4xl'>Portfolio</h1>
          </div>
          <div>
            <h2 className='mb-8 text-neutral-700 text-base'>
              これらは趣味で作成した物です。<br />
              前職で4つ、フリーランスで2つ案件に携わりました。
            </h2>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-5">
            {
              boxContent.map((val, key) => {
                return(
                  <Box key={ key } src={ val.src } alt={ val.alt } title={ val.title } detail={ val.detail } />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

type Props = {
  src: any,
  alt: string,
  title: string,
  detail: string,
}

const Box = (props: Props) => {
  return(
    <div className='rounded-md flex flex-col justify-center bg-neutral-700 mb-4 md:m-0'>
      <div className='relative'>
        <img src={ props.src } alt={ props.alt } className='rounded' />
        <div className='flex flex-col justify-center items-center p-3 absolute top-0 left-0 w-full h-full bg-neutral-900 transition-all duration-300 opacity-0 hover:opacity-100'>
          <h3 className='mb-1 font-bold text-lg'>{ props.title }</h3>
          <p className='mt-1 text-sm whitespace-pre-wrap'>{ props.detail }</p>
        </div>
      </div>
    </div>
  )
}