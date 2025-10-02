import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <div className='mb-8 text-primaryBase'>
            <div className='flex justify-end'>
                <a href='https://react.dev/' target='_blank'>
                    <span>
                        Power by React.js and Tailwindcss
                        <FontAwesomeIcon className="pl-2 text-xl" icon={faReact} />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Footer