import { Button } from "@/components/ui/button"
import { faEnvelope, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProfileCardButtons() {
    const mail = <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />;
    const bookmark = <FontAwesomeIcon icon={faBookmark} className="w-5 h-5" />;

    const buttons = [
        { icon: mail, key: 'mail' },
        { icon: bookmark, key:'bookmark' },
    ]

    return (
        <>
            {
                buttons.map(button => (
                    <Button key={button.key} variant="outline" size="icon" className="rounded-full border-2 border-black w-8 h-8">
                        {button.icon}
                    </Button>
                ))
            }
        </>
    )
}
