import { Breadcrumb } from 'antd'
import { OldURL } from '../../noc/oldURL'
import CssClass from './HelpCss.module.css'
const Help: React.FC = props => {

    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0', }}>
                <Breadcrumb.Item>Start</Breadcrumb.Item>
                <Breadcrumb.Item>HelpPage</Breadcrumb.Item>
                <Breadcrumb.Item>Help</Breadcrumb.Item>
            </Breadcrumb>
            <div className={CssClass.Help}></div>
        </div>
    )
}
const HelpUrlContainer = OldURL(Help)
export default HelpUrlContainer