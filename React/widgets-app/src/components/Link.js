import React from 'react';

const Link = ({className, href, children}) => {
    const onClick = (e) => {
        //Allow command and ctrl key to open page in new tab
        if(e.metaKey || e.ctrlKey){
            return;
        }

        e.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return <a onClick={onClick} href={href} className={className}>{children}</a>
};

export default Link;

