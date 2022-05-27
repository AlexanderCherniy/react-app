import { useLocation, useNavigate, useParams } from 'react-router-dom'


const WithRouters = (WrapperComponent) => {
    const ComponentWithRouterProp = props => {
        const location = useLocation()
        const navigate = useNavigate()
        const params = useParams()
        return <WrapperComponent {...props} router={{ location, navigate, params }} />
    }
    return ComponentWithRouterProp
}
export default WithRouters