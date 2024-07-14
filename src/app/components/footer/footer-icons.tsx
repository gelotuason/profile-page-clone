import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

export default function FooterIcons() {
    const facebook = <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />;
    const twitter = <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />;
    const messenger = <FontAwesomeIcon icon={faFacebookMessenger} className='w-4 h-4' />;

    const links = [
        { href: '/', icon: facebook, key: 'facebook' },
        { href: '/', icon: twitter, key: 'twitter' },
        { href: '/', icon: messenger, key: 'threads' },
    ]

    return (
        <>
            {
                links.map(link => (
                    <Link key={link.key} href={link.href}>{link.icon}</Link>
                ))
            }
        </>
    )
}
