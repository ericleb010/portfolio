import * as React from 'react';

const TAB_NAMES : string[] = ['Home', 'Projects', 'LinkedIn'];


/**
 *
 */
class NavHeadTabContainer extends React.Component<any, any> {
    constructor() { 
        super();
    }

    render() {
        return  <div>
                    { TAB_NAMES.map(name => <NavHeadTab label={name} />) }
                </div>;
    }
}

/**
 *
 */
class NavHeadTab extends React.Component<any, any> {
    private name : string;

    constructor() {
        super();
        this.name = this.props.label;
    }

    render() {
        return  <a href={'#' + this.name}>
                    <div class="nav nav-tabs">
                        { this.name }
                    </div>
                </a>;
    }
}

export default NavHeadTabContainer;