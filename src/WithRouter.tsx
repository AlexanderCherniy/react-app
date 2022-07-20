import { JSXElementConstructor } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const WithRouters = (WrapperComponent:JSXElementConstructor<[]>) => {
    const ComponentWithRouterProp = (props: any) => {
        const location = useLocation()
        const navigate = useNavigate()
        const params = useParams()
        return <WrapperComponent {...props} router={{ location, navigate, params }} />
    }
    return ComponentWithRouterProp
}
export default WithRouters