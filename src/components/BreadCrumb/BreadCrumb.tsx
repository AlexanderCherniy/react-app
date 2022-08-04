import { Breadcrumb } from 'antd';


type BreadCrumbContainerType = {
    containerPage: string
    page: string
}

const BreadCrumbContainer: React.FC<BreadCrumbContainerType> = (props) => {
    return (
        <Breadcrumb style={{ margin: '0px 0 10px 0', background: 'white', borderRadius: 3 ,padding: '5px 22px 5px 10px', display: 'inline-block' }}>
            <Breadcrumb.Item>Start</Breadcrumb.Item>
            <Breadcrumb.Item>{props.containerPage}</Breadcrumb.Item>
            <Breadcrumb.Item>{props.page}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default BreadCrumbContainer