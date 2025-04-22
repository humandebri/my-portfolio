import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';


function GitHubIconLink({repoUrl}:{repoUrl:string;}) {
  return (
    <a
      href= { repoUrl }
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-black transition-colors text-3xl ml-4 mt-2"
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
          className="fixed inset-0 top-14 z-10 pointer-events-none opacity-0 group-hover/card1:opacity-50 transition-opacity duration-800"
          style={{
            backgroundImage: `url(${bg_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        </Link>
      <div className='flex px-4  mt-4  flex-col space-y-2 max-w-[250px]'>
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{explain}</h3>
          <GitHubIconLink repoUrl={repoUrl} />
        </div>
        <h1 className="font-shippori-mincho">使用技術 : {tech}</h1>
      </div>
    </div>
  );
}

export default function Page() {
  
  return (
    
    <div className="flex flex-col">
      <h1 className="px-4 text-2xl">Works Page</h1>
      <p className="mt-4 px-4 flex">Allow me to present the projects I have created to date.</p>

      <div className="flex flex-row flex-wrap gap-6 my-4 mx-4">
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
      </div>
    </div>
    
  );
  }