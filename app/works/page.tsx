import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';


function GitHubIconLink({repoUrl}:{repoUrl:string;}) {
  return (
    <a
      href= { repoUrl }
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-black transition-colors text-2xl ml-4"
      aria-label="GitHub Repository"
    >
      <FaGithub />
    </a>
  );
}

function Component({
    cardUrl,thumb,bg_image,explain,repoUrl,tech,}: {
    cardUrl: string;
    thumb: string;
    bg_image: string;
    explain:string;
    repoUrl: string;
    tech:string;
  }){

  return(
    <div className='px-10'>  
      <div className='relative mt-6 group/card1'>
        
        <Link
        href={cardUrl}
        target="_blank"
        className="block group/card relative w-[250px] overflow-hidden
                  shadow-md hover:shadow-xl transition-shadow" >

        <Image 
          src={thumb}
          alt="image_pic"
          width={250}
          height={250}
          className="shadow-md" 
        />

        <div
          className="fixed inset-0 top-0 z-10 pointer-events-none opacity-0 group-hover/card:opacity-70 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${bg_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        </Link>
        <div className="absolute left-0 transform -rotate-90 origin-bottom-left -my-7">
          使用技術 : {tech}
        </div>
      <div className='flex px-4  mt-2  flex-col space-y-2 max-w-[250px]'>
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{explain}</h3>
          <GitHubIconLink repoUrl={repoUrl} />
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default function Page() {
  
  return (
    
    <div className="flex flex-col">

      <div className="flex flex-row flex-wrap gap-6 my-10 mx-4 justify-center  pt-20">


        <Component 
        cardUrl = "https://sudoku-two-mocha.vercel.app/"
        thumb = "/images/sudoku_pic.png"
        bg_image = "/images/sudoku_image.png"
        explain = "数独ゲーム"
        repoUrl="https://github.com/humandebri/Sudoku"
        tech = "React"
        />

        <Component 
        cardUrl = "https://github.com/humandebri/novel_evaluation"
        thumb = "/images/kakuyomu_pic.png"
        bg_image = "/images/kakuyomu_image.png"
        explain = "web小説評価システム"
        repoUrl="https://github.com/humandebri/novel_evaluation"
        tech = "Python,LLM"
        />

        <Component 
        cardUrl = "https://nextjs-dashboard-nu-lac-35.vercel.app/"
        thumb = "/images/nextjs_pic.png"
        bg_image = "/images/nextjs_image.png"
        explain = "Nextjs Dashboard"
        repoUrl="https://github.com/humandebri/nextjs-dashboard"
        tech = "Nextjs,PostgreSQL"
        />

        <Component 
        cardUrl = "https://hude-portfolio.vercel.app"
        thumb = "/images/hude_pic.png"
        bg_image = "/images/hude_image.png"
        explain = "Hude's Protfolio"
        repoUrl="https://github.com/humandebri/my-portfolio"
        tech = "Nextjs,React,TS"
        />

        
      </div>
    </div>
    
  );
  }