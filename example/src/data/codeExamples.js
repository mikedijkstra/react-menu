import React from 'react';
import { LibName } from '../components/LibName';
import { HashLink as Link } from 'react-router-hash-link';

const menuLink = <Link to={'/documentation#menu'}>Menu</Link>;
const menuItemLink = <Link to={'/documentation#menu-item'}>MenuItem</Link>;
const menuButtonLink = <Link to={'/documentation#menu-button'}>MenuButton</Link>;
const menuStateHookLink = <Link to={'/documentation#use-menu-state'}>useMenuState</Link>;
const styleGuideLink = <Link to={'/style-guide'}>style guide</Link>;

export const codeExamples = {
    menu: {
        id: 'basic-menu',

        title: 'Menu',

        list: {
            basicMenu: {
                id: 'basic-menu',

                title: 'Basic menu',

                desc:
                    <p>The most basic menu consists of several <code>MenuItem</code>s wrapped
                    in a <code>Menu</code>, and is controlled by a <code>MenuButton</code>.</p>,

                source:
                    `<Menu menuButton={<MenuButton>Open menu</MenuButton>}>
    <MenuItem>New File</MenuItem>
    <MenuItem>Save</MenuItem>
    <MenuItem>Close Window</MenuItem>
</Menu>`,

                fullSource:
                    `import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    return (
        <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
            <MenuItem>New File</MenuItem>
            <MenuItem>Save</MenuItem>
            <MenuItem>Close Window</MenuItem>
        </Menu>
    );
}`
            },

            subMenu: {
                id: 'submenu',

                title: 'Submenu',

                desc:
                    <p><code>SubMenu</code> can be placed in a <code>Menu</code> and has its
                    own <code>MenuItem</code>s as children. You might also create nested submenus under a submenu.</p>,

                source:
                    `<Menu menuButton={<MenuButton>Open menu</MenuButton>}>
    <MenuItem>New File</MenuItem>
    <SubMenu label={'Open Recent'}>
        <MenuItem>index.html</MenuItem>
        <MenuItem>example.js</MenuItem>
        <MenuItem>about.css</MenuItem>
    </SubMenu>
    <MenuItem>Save</MenuItem>
</Menu>`,

                fullSource:
                    `import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    return (
        <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
            <MenuItem>New File</MenuItem>
            <SubMenu label={'Open Recent'}>
                <MenuItem>index.html</MenuItem>
                <MenuItem>example.js</MenuItem>
                <MenuItem>about.css</MenuItem>
            </SubMenu>
            <MenuItem>Save</MenuItem>
        </Menu>
    );
}`
            },

            eventHandling: {
                id: 'event-handling',

                title: 'Event handling',

                desc:
                    <>
                        <p>When a menu item is activated, the <code>onClick</code> event first fires on
                        the menu item and then bubbles up to the root <code>Menu</code> component. To stop
                        bubbling, return <code>false</code> from the menu item event handler.</p>
                        <p>For details of the event object, please refer to {menuItemLink}.</p>
                    </>,

                source:
                    `const [text, setText] = useState('');
        
const handleMenuClick = e => {
    setText(t => t + \`[Menu] \${e.value} clicked\\n\\n\`);
};

const handleFileClick = e => {
    setText(t => t + \`[MenuItem] \${e.value} clicked\\n\`);
};

const handleSaveClick = e => {
    setText(t => t + \`[MenuItem] \${e.value} clicked\\n\\n\`);
    return false;
};

<div className="buttons">
    <Menu menuButton={<MenuButton>Open menu</MenuButton>}
        onClick={handleMenuClick}>

        <MenuItem value={'File'} onClick={handleFileClick}>
            New File
        </MenuItem>

        <MenuItem value={'Save'} onClick={handleSaveClick}>
            Save
        </MenuItem>

        <MenuItem value={'Close'}>Close Window</MenuItem>
    </Menu>

    <button className="btn btn btn-dark"
        onClick={() => setText('')}>
        Clear
    </button>
</div>

<textarea readOnly value={text} />`,

                fullSource:
                    `import React, { useRef, useState, useLayoutEffect } from 'react';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    const ref = useRef(null);
    const [text, setText] = useState('');

    const handleMenuClick = e => {
        setText(t => t + \`[Menu] \${e.value} clicked\\n\\n\`);
    };

    const handleFileClick = e => {
        setText(t => t + \`[MenuItem] \${e.value} clicked\\n\`);
    };

    const handleSaveClick = e => {
        setText(t => t + \`[MenuItem] \${e.value} clicked\\n\\n\`);
        return false;
    };

    useLayoutEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight;
    }, [text]);

    return (
        <>
            <div className="buttons">
                <Menu menuButton={<MenuButton>Open menu</MenuButton>}
                    onClick={handleMenuClick}>

                    <MenuItem value={'File'} onClick={handleFileClick}>
                        New File
                    </MenuItem>

                    <MenuItem value={'Save'} onClick={handleSaveClick}>
                        Save
                    </MenuItem>

                    <MenuItem value={'Close'}>Close Window</MenuItem>
                </Menu>

                <button className="btn btn btn-dark"
                    onClick={() => setText('')}>
                    Clear
                </button>
            </div>

            <textarea readOnly ref={ref} value={text} />
        </>
    );
}`
            },

            radioGroup: {
                id: 'radio-group',

                title: 'Radio group',

                desc:
                    <p>You could make menu items behave like radio buttons by wrapping them under a <code>MenuRadioGroup</code>.
                    The children menu item which has the same value (strict equality ===) as the radio group is marked as checked.</p>,

                source:
                    `const [textColor, setTextColor] = useState('red');
        
<Menu menuButton={<MenuButton>Text color</MenuButton>}>
    <MenuRadioGroup
        value={textColor}
        onChange={e => setTextColor(e.value)}>
        <MenuItem value={'red'}>Red</MenuItem>
        <MenuItem value={'green'}>Green</MenuItem>
        <MenuItem value={'blue'}>Blue</MenuItem>
    </MenuRadioGroup>
</Menu>`,

                fullSource:
                    `import React, { useState } from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuRadioGroup
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    const [textColor, setTextColor] = useState('red');

    return (
        <>
            <Menu menuButton={<MenuButton>Text color</MenuButton>}>
                <MenuRadioGroup
                    value={textColor}
                    onChange={e => setTextColor(e.value)}>
                    <MenuItem value={'red'}>Red</MenuItem>
                    <MenuItem value={'green'}>Green</MenuItem>
                    <MenuItem value={'blue'}>Blue</MenuItem>
                </MenuRadioGroup>
            </Menu>

            <div className="sample-text"
                style={{ color: textColor }}>
                Sample text
            </div>
        </>
    );
}`
            },

            checkBox: {
                id: 'checkbox',

                title: 'Checkbox',

                desc:
                    <p>You could make menu items behave like checkboxs by setting <code>type="checkbox"</code>.</p>,

                source:
                    `const [isBold, setBold] = useState(true);
const [isItalic, setItalic] = useState(false);
const [isUnderline, setUnderline] = useState(false);

<Menu menuButton={<MenuButton>Text style</MenuButton>}>
    <MenuItem type="checkbox" checked={isBold} 
        onClick={e => setBold(e.checked)}>
        Bold
    </MenuItem>
    <MenuItem type="checkbox" checked={isItalic} 
        onClick={e => setItalic(e.checked)}>
        Italic
    </MenuItem>
    <MenuItem type="checkbox" checked={isUnderline} 
        onClick={e => setUnderline(e.checked)}>
        Underline
    </MenuItem>
</Menu>`,

                fullSource:
                    `import React, { useState } from 'react';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    const [isBold, setBold] = useState(true);
    const [isItalic, setItalic] = useState(false);
    const [isUnderline, setUnderline] = useState(false);

    return (
        <>
            <Menu menuButton={<MenuButton>Text style</MenuButton>}>
                <MenuItem type="checkbox" checked={isBold}
                    onClick={e => setBold(e.checked)}>
                    Bold
                </MenuItem>
                <MenuItem type="checkbox" checked={isItalic}
                    onClick={e => setItalic(e.checked)}>
                    Italic
                </MenuItem>
                <MenuItem type="checkbox" checked={isUnderline}
                    onClick={e => setUnderline(e.checked)}>
                    Underline
                </MenuItem>
            </Menu>

            <div className="sample-text" style={{
                fontWeight: isBold ? 'bold' : 'initial',
                fontStyle: isItalic ? 'italic' : 'initial',
                textDecoration: isUnderline ? 'underline' : 'initial'
            }}>Sample text</div>
        </>
    );
}`

            },

            headerAndDivider: {
                id: 'header-divider',

                title: 'Header and divider',

                desc:
                    <p>You could use <code>MenuHeader</code> and <code>MenuDivider</code> to group related menu items.
                    In addition, <code>MenuHeader</code> can wrap anything for presentational purposes.</p>,

                source:
                    `<Menu menuButton={<MenuButton>Open menu</MenuButton>}>
    <MenuItem>New File</MenuItem>
    <MenuItem>Save</MenuItem>
    <MenuItem>Close Window</MenuItem>
    <MenuDivider />
    <MenuHeader>Edit</MenuHeader>
    <MenuItem>Cut</MenuItem>
    <MenuItem>Copy</MenuItem>
    <MenuItem>Paste</MenuItem>
    <MenuDivider />
    <MenuItem>Print</MenuItem>
</Menu>`,

                fullSource:
                    `import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuHeader,
    MenuDivider
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {

    return (
        <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
            <MenuItem>New File</MenuItem>
            <MenuItem>Save</MenuItem>
            <MenuItem>Close Window</MenuItem>
            <MenuDivider />
            <MenuHeader>Edit</MenuHeader>
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
            <MenuDivider />
            <MenuItem>Print</MenuItem>
        </Menu>
    );
}`
            },

            combined: {
                id: 'combined',

                title: 'Combined example',

                desc: <p>An example combines the usage of several components.</p>,

                fullSource:
                    `import React, { useState } from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu,
    MenuHeader,
    MenuDivider,
    MenuRadioGroup
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {

    const [textColor, setTextColor] = useState('red');
    const [isBold, setBold] = useState(true);
    const [isItalic, setItalic] = useState(false);
    const [isUnderline, setUnderline] = useState(false);

    return (
        <>
            <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuDivider />
                <MenuHeader>Text settings</MenuHeader>

                <SubMenu label="Text color">
                    <MenuRadioGroup
                        value={textColor}
                        onChange={e => setTextColor(e.value)}>
                        <MenuItem value={'red'}>Red</MenuItem>
                        <MenuItem value={'green'}>Green</MenuItem>
                        <MenuItem value={'blue'}>Blue</MenuItem>
                    </MenuRadioGroup>
                </SubMenu>

                <SubMenu label="Text style">
                    <MenuItem type="checkbox" checked={isBold}
                        onClick={e => setBold(e.checked)}>
                        Bold
                        </MenuItem>
                    <MenuItem type="checkbox" checked={isItalic}
                        onClick={e => setItalic(e.checked)}>
                        Italic
                        </MenuItem>
                    <MenuItem type="checkbox" checked={isUnderline}
                        onClick={e => setUnderline(e.checked)}>
                        Underline
                        </MenuItem>
                </SubMenu>
            </Menu>

            <div className="sample-text" style={{
                color: textColor,
                fontWeight: isBold ? 'bold' : 'initial',
                fontStyle: isItalic ? 'italic' : 'initial',
                textDecoration: isUnderline ? 'underline' : 'initial'
            }}>Sample text</div>
        </>
    );
}`
            },
        }
    },

    menuItem: {
        id: 'link-disabled',

        title: 'Menu item',

        list: {
            linkAndDisabled: {
                id: 'link-disabled',

                title: 'Link and disabled',

                desc:
                    <p><code>MenuItem</code> can be made a hyperlink by giving it a <code>href</code> prop. Even if
                    it's a link, the <code>onClick</code> event still fires as normal. You might also disable
                    a menu item using the <code>disabled</code> prop.</p>,

                source:
                    `<Menu menuButton={<MenuButton>Open menu</MenuButton>}>
    <MenuItem href="https://www.google.com/">Google</MenuItem>
    <MenuItem href="https://github.com/szhsin/react-menu/"
        target="_blank">
        GitHub (new window)
    </MenuItem>
    <MenuItem>Regular item</MenuItem>
    <MenuItem disabled>Disabled item</MenuItem>
</Menu>`,

                fullSource:
                    `import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    return (
        <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
            <MenuItem href="https://www.google.com/">Google</MenuItem>
            <MenuItem href="https://github.com/szhsin/react-menu/"
                target="_blank">
                GitHub (new window)
            </MenuItem>
            <MenuItem>Regular item</MenuItem>
            <MenuItem disabled>Disabled item</MenuItem>
        </Menu>
    );
}`
            },

            iconAndImage: {
                id: 'icon-image',

                title: 'Icon and image',

                desc:
                    <p><LibName /> doesn't include any imagery. However, you are free to use you own or
                third-party icons and images, as you could wrap anything in a <code>MenuItem</code>. This
                example use Google's Material icons.</p>,

                source:
                    `<Menu menuButton={<MenuButton>Open menu</MenuButton>}>
    <MenuItem>
        <i className="material-icons">content_cut</i>Cut
    </MenuItem>
    <MenuItem>
        <i className="material-icons">content_copy</i>Copy
    </MenuItem>
    <MenuItem>
        <i className="material-icons">content_paste</i>Paste
    </MenuItem>
    <MenuDivider />
    <MenuItem href="https://github.com/">
        <img src="octocat.png" alt="" role="presentation" />GitHub
    </MenuItem>
</Menu>`,

                fullSource:
                    `import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuDivider
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    return (
        <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
            <MenuItem>
                <i className="material-icons">content_cut</i>Cut
            </MenuItem>
            <MenuItem>
                <i className="material-icons">content_copy</i>Copy
            </MenuItem>
            <MenuItem>
                <i className="material-icons">content_paste</i>Paste
            </MenuItem>
            <MenuDivider />
            <MenuItem href="https://github.com/">
                <img src="octocat.png" alt="" role="presentation" />GitHub
            </MenuItem>
        </Menu>
    );
}`
            },

            hoverAndActive: {
                id: 'hover-active',

                title: 'Hover and active',

                desc:
                    <>
                        <p><code>MenuItem</code> manages a number of internal states such as 'hover' and 'active'.
                        If you need to display different contents under different states, you are able to
                        use <code>children</code> as a render prop and pass it a callback function.</p>
                        <p>For more menu item states, please refer to {menuItemLink}.</p>
                    </>,

                source:
                    `<Menu menuButton={<MenuButton>Open menu</MenuButton>}>
    <MenuItem>
        {({ hover, active }) =>
            active ? 'Active' : hover ? 'Press me' : 'Hover me'
        }
    </MenuItem>
    <MenuDivider />
    <MenuItem styles={{ justifyContent: 'center' }}>
        {({ hover, active }) =>
            <i className="material-icons md-48">
                {active ? 'sentiment_very_satisfied'
                    : hover ? 'sentiment_satisfied_alt'
                        : 'sentiment_very_dissatisfied'}
            </i>
        }
    </MenuItem>
</Menu>`,

                fullSource:
                    `import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuDivider
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    return (
        <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
            <MenuItem>
                {({ hover, active }) =>
                    active ? 'Active' : hover ? 'Press me' : 'Hover me'
                }
            </MenuItem>
            <MenuDivider />
            <MenuItem styles={{ justifyContent: 'center' }}>
                {({ hover, active }) =>
                    <i className="material-icons md-48">
                        {active ? 'sentiment_very_satisfied'
                            : hover ? 'sentiment_satisfied_alt'
                                : 'sentiment_very_dissatisfied'}
                    </i>
                }
            </MenuItem>
        </Menu>
    );
}`
            },

        }
    },

    menuButton: {
        id: 'open-state',

        title: 'Menu button',

        list: {
            openState: {
                id: 'open-state',

                title: 'Menu open state',

                desc:
                    <p>If you need to change the contents of a menu button when the menu opens,
                    you could use the <code>menuButton</code> as a render prop and pass it a callback function.</p>,

                source:
                    `<Menu menuButton={({ open }) =>
    <MenuButton>{open ? 'Close' : 'Open'}</MenuButton>}>
    <MenuItem>New File</MenuItem>
    <MenuItem>Save</MenuItem>
    <MenuItem>Close Window</MenuItem>
</Menu>`,

                fullSource:
                    `import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    return (
        <Menu menuButton={({ open }) =>
            <MenuButton>{open ? 'Close' : 'Open'}</MenuButton>}>
            <MenuItem>New File</MenuItem>
            <MenuItem>Save</MenuItem>
            <MenuItem>Close Window</MenuItem>
        </Menu>
    );
}`
            },

            customised: {
                id: 'customised-btn',

                title: 'Customised button',

                desc:
                    <>
                        <p>You are free to use a native button element with <code>Menu</code>, or use your
                        own React button component which implements a forwarding ref and
                        accepts <code>onClick</code> and <code>onKeyDown</code> event props.</p>
                        <p><code>Menu</code> also works well with third-party React libraries,
                        such as the Material-UI.</p>
                        <p>The benefit of {menuButtonLink} is its has additional <code>aria</code> attributes, and you will
                        always be able to style it by following the {styleGuideLink}.</p>
                    </>,

                source:
                    `<Menu menuButton={
    <button className="btn btn-primary">Open menu</button>}>
    <MenuItem>New File</MenuItem>
    <MenuItem>Save</MenuItem>
    <MenuItem>Close Window</MenuItem>
</Menu>`,

                fullSource:
                    `import React from 'react';
import {
    Menu,
    MenuItem
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    return (
        <Menu menuButton={
            <button className="btn btn-primary">Open menu</button>}>
            <MenuItem>New File</MenuItem>
            <MenuItem>Save</MenuItem>
            <MenuItem>Close Window</MenuItem>
        </Menu>
    );
}`
            },
        }
    },

    menuPlacement: {
        id: 'menu-direction',

        title: 'Menu placement',

        list: {
            direction: {
                id: 'menu-direction',

                title: 'Direction',

                desc:
                    <>
                        <p>You could control the direction in which a menu expands using the <code>direction</code> prop.</p>
                        <p>Please note the actual direction might be different depending on the available
                            viewport space, please see {menuLink} for more details.</p>
                    </>,

                source:
                    `['top', 'left', 'right', 'bottom'].map(direction =>
<Menu menuButton={<MenuButton>{direction}</MenuButton>}
    key={direction} direction={direction}>
    <MenuItem>New File</MenuItem>
    <MenuItem>Save</MenuItem>
    <MenuItem>Close Window</MenuItem>
</Menu>)`,

                fullSource:
                    `import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    return (
        ['top', 'left', 'right', 'bottom'].map(direction =>
            <Menu menuButton={<MenuButton>{direction}</MenuButton>}
                key={direction} direction={direction}>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
            </Menu>)
    );
}`
            },

            alignment: {
                id: 'menu-alignment',

                title: 'Alignment',

                desc:
                    <p>You could control how a menu aligns with its menu button using the <code>align</code> prop.
                    It has effect <strong>only</strong> when <code>direction</code> is set to 'top' or 'bottom'.</p>,

                source:
                    `['start', 'center', 'end'].map(align =>
<Menu menuButton={<MenuButton>{align}</MenuButton>}
    key={align} align={align}>
    <MenuItem>New File</MenuItem>
    <MenuItem>Save</MenuItem>
    <MenuItem>Close Window</MenuItem>
</Menu>)`,

                fullSource:
                    `import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    return (
        ['start', 'center', 'end'].map(align =>
            <Menu menuButton={<MenuButton>{align}</MenuButton>}
                key={align} align={align}>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
            </Menu>)
    );
}`
            },
        }
    },

    controlled: {
        id: 'controlled-menu',

        title: 'Controlled menu',

        list: {
            controlledMenu: {
                id: 'controlled-menu',

                title: 'Managing state',

                desc:
                    <>
                        <p>In some use cases you may need to control how and when a menu is open or closed, and it can
                            be implemented using a <code>ControlledMenu</code>.</p>
                        <p>The minimum props you need to provide are a boolean <code>isOpen</code> state, and
                        a <code>ref</code> of an element to which menu will be positioned. You also need to
                        update <code>isOpen</code> in response to the <code>onClose</code> event.</p>
                    </>,

                source:
                    `const [isOpen, setOpen] = useState(false);
const ref = useRef(null);

<button ref={ref} className="btn btn-dark"
    onClick={() => setOpen(true)}>
    Open menu
</button>

<ControlledMenu anchorRef={ref} isOpen={isOpen}
    onClose={() => setOpen(false)}>
    <MenuItem>New File</MenuItem>
    <MenuItem>Save</MenuItem>
    <MenuItem>Close Window</MenuItem>
</ControlledMenu>`,

                fullSource:
                    `import React, { useState, useRef } from 'react';
import {
    ControlledMenu,
    MenuItem
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    return (
        <>
            <button ref={ref} className="btn btn-dark"
                onClick={() => setOpen(true)}>
                Open menu
            </button>

            <ControlledMenu anchorRef={ref} isOpen={isOpen}
                onClose={() => setOpen(false)}>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
            </ControlledMenu>
        </>
    );
}`
            },

            contextMenu: {
                id: 'context-menu',

                title: 'Context menu',

                desc:
                    <>
                        <p>Context menu is implemented using a <code>ControlledMenu</code>.</p>
                        <p>The minimum props you need to provide are a boolean <code>isOpen</code> state, and
                        an <code>anchorPoint</code> of viewport coordinates to which menu will be positioned. You also need to
                        update <code>isOpen</code> in response to the <code>onClose</code> event.</p>
                    </>,

                source:
                    `const [isOpen, setOpen] = useState(false);
const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

<div onContextMenu={e => {
    e.preventDefault();
    setAnchorPoint({ x: e.clientX, y: e.clientY });
    setOpen(true);
}}>
    Right click to open context menu

    <ControlledMenu anchorPoint={anchorPoint} isOpen={isOpen}
        onClose={() => setOpen(false)}>
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
    </ControlledMenu>
</div >`,

                fullSource:
                    `import React, { useState } from 'react';
import {
    ControlledMenu,
    MenuItem
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    const [isOpen, setOpen] = useState(false);
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

    return (
        <div onContextMenu={e => {
            e.preventDefault();
            setAnchorPoint({ x: e.clientX, y: e.clientY });
            setOpen(true);
        }}>
            Right click to open context menu

            <ControlledMenu anchorPoint={anchorPoint} isOpen={isOpen}
                onClose={() => setOpen(false)}>
                <MenuItem>Cut</MenuItem>
                <MenuItem>Copy</MenuItem>
                <MenuItem>Paste</MenuItem>
            </ControlledMenu>
        </div >
    );
}`
            },

            useMenuState: {
                id: 'use-menu-state',

                title: 'useMenuState',

                desc:
                    <>
                        <p>To fully make use of functionalities provided by <code>ControlledMenu</code>, you
                        need to give it three props: <code>isMounted, isOpen, menuItemFocus</code>. To ease this
                        task, you could use the <code>useMenuState</code> Hook which returns these three states and
                        methods that manage them.</p>
                        <p>Please see {menuStateHookLink} for more details.</p>
                    </>,

                source:
                    `const { openMenu, closeMenu, toggleMenu,
    ...menuProps } = useMenuState();
const ref = useRef(null);

<button ref={ref} className="btn btn-dark"
    onClick={() => openMenu()}>
    Open menu
</button>

<ControlledMenu {...menuProps} anchorRef={ref}
    onClose={() => closeMenu()}>
    <MenuItem>New File</MenuItem>
    <MenuItem>Save</MenuItem>
    <MenuItem>Close Window</MenuItem>
</ControlledMenu>`,

                fullSource:
                    `import React, { useRef } from 'react';
import {
    ControlledMenu,
    MenuItem,
    useMenuState
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    const { openMenu, closeMenu, toggleMenu,
        ...menuProps } = useMenuState();
    const ref = useRef(null);

    return (
        <>
            <button ref={ref} className="btn btn-dark"
                onClick={() => openMenu()}>
                Open menu
            </button>

            <ControlledMenu {...menuProps} anchorRef={ref}
                onClose={() => closeMenu()}>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
            </ControlledMenu>
        </>
    );
}`
            },
        }
    },

    customStyle: {
        id: 'custom-style',

        title: 'Customised style',

        desc: '',

        source:
            `<Menu menuButton={<MenuButton>Open menu</MenuButton>}
    styles={{
        border: '2px dashed green',
        boxShadow: 'none'
    }}>

    <MenuItem>New File</MenuItem>
    <MenuItem>Save</MenuItem>
    <MenuItem styles={{
        color: 'blue',
        backgroundColor: '#ee1',
        hover: {
            color: '#ee1',
            backgroundColor: '#bf4080'
        },
        active: {
            backgroundColor: '#333'
        }
    }}>
        I'm special
    </MenuItem>
</Menu>`,

        fullSource:
            `import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {

    return (
        <Menu menuButton={<MenuButton>Open menu</MenuButton>}
            styles={{
                border: '2px dashed green',
                boxShadow: 'none'
            }}>

            <MenuItem>New File</MenuItem>
            <MenuItem>Save</MenuItem>
            <MenuItem styles={{
                color: 'blue',
                backgroundColor: '#ee1',
                hover: {
                    color: '#ee1',
                    backgroundColor: '#bf4080'
                },
                active: {
                    backgroundColor: '#333'
                }
            }}>
                I'm special
            </MenuItem>
        </Menu>
    );
}`
    }
};
