import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,} from '@fortawesome/free-regular-svg-icons';
export default function Star({rating,star}) {
    return (
        <>
            {rating > 5 ? <span>It&#39;s too Much</span>:
            Array.from({ length: 5 - rating}, (i) => (
                <li key={i} className="list-inline-item m-0">
                    <i className={star}><FontAwesomeIcon icon={faStar} size='sm' /></i>
                </li>
            ))}
        </>
    )
}