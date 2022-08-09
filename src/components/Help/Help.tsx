import { OldURL } from '../../noc/oldURL'
import BreadCrumbContainer from '../BreadCrumb/BreadCrumb'
import CssClass from './HelpCss.module.css'
const Help: React.FC = props => {

    return (
        <div>
            <BreadCrumbContainer page='Help' containerPage='HelpPage'/>
            <div className={CssClass.Help}></div>
        </div>
    )
}
const HelpUrlContainer = OldURL(Help)
export default HelpUrlContainer