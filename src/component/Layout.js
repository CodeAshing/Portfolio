import React from 'react'
import {Layout,Content} from 'react-mdl'
import Main from './Main'
import HeaderComponent from './Header'
import DrawerComp from './DrawerComp'
function LayoutComponent() {
    return (
            
        /* Uses a header that scrolls with the text, rather than staying locked at the top */
        <div className="demo-big-content">
            <Layout>
                <HeaderComponent/>
                <DrawerComp/>
                <Content>
                    <Main/>
                </Content>
            </Layout>
        </div>
        
            
    )
}

export default LayoutComponent
