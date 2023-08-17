import { ProjectMolecule } from '../Molecules/ProjectMolecule';
import { ProjectList } from './ProjectList';

import Chat from '../../assets/chat.gif';
import Disappointed from '../../assets/disappointed.gif';
import GithubGif from '../../assets/github.gif';
import Music from '../../assets/music.gif';
import Pacman from '../../assets/pacman.gif';
import SpotifyGif from '../../assets/spotify.gif';

import 'animate.css';

const projectList = [
  {
    image: SpotifyGif,
    title: 'My Birthday Show',
    srcRepo: 'https://github.com/gabrigomez/my-birthday-show',
    srcSite: 'https://mybirthdayshow.netlify.app/'
  },
  {
    image: Music,
    title: 'Tr4cker',
    srcRepo: 'https://github.com/gabrigomez/tr4cker',
    srcSite: 'https://tr4cker.netlify.app/'
  },
  {
    image: Chat,
    title: 'Let\'s Chat!',
    srcRepo: 'https://github.com/gabrigomez/lets-chat',
    srcSite: 'https://letschatoficial.netlify.app/'
  },
  {
    image: Disappointed,
    title: 'Esqueci meu CEP!',
    srcRepo: 'https://github.com/gabrigomez/esqueci-meu-cep',
    srcSite: 'https://esquecimeucep.netlify.app/'
  },
  {
    image: GithubGif,
    title: 'Github Repo Filter',
    srcRepo: 'https://github.com/gabrigomez/github-repo-finder',
    srcSite: 'https://finderrepo.netlify.app/'
  },
  {
    image: Pacman,
    title: 'My classic games',
    srcRepo: 'https://github.com/gabrigomez/my-classic-games',
    srcSite: 'https://myclassicgamelist.netlify.app/'
  }
];

export const Projects = () => {
  return (
    <section className='flex flex-col items-center w-full bg-gray-300 dark:bg-primaryBg' id='projects'>      
      <div className='flex flex-col items-center w-full p-4 md:p-12 rounded-2xl'>
        <div className='mb-8 text-primary dark:text-white'>
          <ProjectMolecule />
        </div> 
        <ProjectList projects={projectList} />            
      </div>
    </section>
  )
}