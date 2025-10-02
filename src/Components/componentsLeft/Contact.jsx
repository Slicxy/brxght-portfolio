import { faDiscord, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
  return (
    <div className='flex items-end gap-2 text-xl'>
      <a href=''><FontAwesomeIcon className='hover:text-2xl hover:text-primaryContent duration-1000' icon={faDiscord}/></a>
      <a href=''><FontAwesomeIcon className='hover:text-2xl hover:text-primaryContent duration-1000' icon={faGithub}/></a>
      <a href=''><FontAwesomeIcon className='hover:text-2xl hover:text-primaryContent duration-1000' icon={faYoutube}/></a>
    </div>
  )
}

export default Contact