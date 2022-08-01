import { Breadcrumb } from 'antd';


type BreadCrumbContainerType = {
    containerPage: string
    page: string
}

const BreadCrumbContainer: React.FC<BreadCrumbContainerType> = (props) => {
    return (
        <Breadcrumb style={{ margin: '16px 0', }}>
            <Breadcrumb.Item>Start</Breadcrumb.Item>
            <Breadcrumb.Item>{props.containerPage}</Breadcrumb.Item>
            <Breadcrumb.Item>{props.page}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default BreadCrumbContainer