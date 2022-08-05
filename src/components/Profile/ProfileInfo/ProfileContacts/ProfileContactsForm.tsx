import { Button } from "antd";
import { Form, Field, Formik, ErrorMessage } from "formik"
import { createField, Input } from "../../../../Forms/Forms";
import { dataType } from "../../../../redux/auth-reducer";
import { ProfileContactsType, ProfileType } from "../../../../redux/GlobalTypes";
import { validateProfile } from "../../../../validate/validate";
import incClass from '../../../Profile/Posts/Posts.module.scss'
import classProfile from '../../Profile.module.scss';
import ProfileStatusContainer from "../ProfileStatus/ProfileStatusContainer";
type Props = {
    statusText: string
    activeContacts: boolean
    item: ItemType
    userData: dataType
    userProfile: Array<ProfileType>
    activeContactsProps: boolean
    ProfileItem: ProfileType
    changeText: boolean
    changeMode: boolean
    itemProfile: any
    addChangeText: ()=> void
    removeChangeText: ()=> void
    updatePhoto: (e:HTMLInputElement)=> void
    changeTextFunc: (ref:any)=> void
    getStatus: (userId: number) => void
    updateStatus: (statusText: string|null) => void
    updateAccountProfile: (values: any) => void
    setActiveContacts: (boolean: boolean) => void
    setChangeMode: (boolean: boolean) => void
}
export type ItemType = {
    aboutMe: string
    contacts: ProfileContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    userId: number
}
export type PhotosType = {
    small: string | null
    large: string | null
} | string
type RequestValuesType = ItemType
type RequestValuesKeysType = keyof RequestValuesType
const ProfileContactsForm: React.FC<Props> = (props) => {
    const validateProfileHelper = validateProfile(props.itemProfile)
    return <Formik initialValues={{ ...props.userProfile[0], someUrlIsWrong: "" }}
        // validate={validateProfileHelper}
        onSubmit={async (values:RequestValuesType) => {
            await props.updateAccountProfile(values)
            props.setChangeMode(false)
        }}>
        <div key={props.itemProfile.userId}>
            <div className={incClass.Profile__text}>
                <div className={incClass.ProfileInfo}>
                    <div className={incClass.ProfileTextStyle}>
                        <Form>
                            <div className={classProfile.Id}>
                                <span className={classProfile.ProfileTextHeader}>ID:</span>
                                {props.userProfile[0].userId}
                            </div>
                            <div className={classProfile.Profile__name}>
                                <span className={classProfile.ProfileTextHeader}>UserName:</span>
                                {createField<RequestValuesKeysType>(classProfile.form, "fullName", Input, "FullName")}
                            </div>
                            <div className={classProfile.Profile__name}>
                                {/* <ProfileStatusContainer {...props} item={props.userProfile[0]} /> */}
                                <ProfileStatusContainer removeChangeText={props.removeChangeText} addChangeText={props.addChangeText} changeTextFunc={props.changeTextFunc} changeText={props.changeText} userDataProps={props.userData} itemProps = {props.item} updateStatus={props.updateStatus} statusText={props.statusText} statusTextProps = {props.statusText} getStatus={props.getStatus} item={props.userProfile[0]} />
                            </div>
                            <div className={classProfile.ProfileTextStyle}>
                                <span className={classProfile.ProfileTextHeader}>
                                    AboutMe:
                                </span> {createField<RequestValuesKeysType>(classProfile.form, "aboutMe", Input, "AboutMe")}
                            </div>
                            <div>
                                <div className={classProfile.ProfileJobSearch}>
                                    <span className={classProfile.ProfileJobSearchTitle}>Job Search:</span>
                                    {createField<RequestValuesKeysType>(classProfile.form, "lookingForAJob", Input, "LookingForAJob", "checkbox")}
                                    {createField<RequestValuesKeysType>(classProfile.form, "lookingForAJobDescription", Input, "LookingForAJobDescription")}
                                </div>
                            </div>
                            <ErrorMessage className={incClass.errorLogin} name="someUrlIsWrong" component={'div'} />
                            <div onClick={() => props.setActiveContacts(!props.activeContacts)}
                                className={classProfile.ProfileTextHeader}>
                                <span>Contacts <span>{props.activeContacts === false ? '+' : '-'}</span></span>
                            </div>
                            {Object.keys(props.userProfile[0].contacts).map(key => {
                                return <Contacts key={key}
                                    contactTitle={'contacts.' + key} contactValue={key} activeContacts={props.activeContacts} />
                            })}
                            <Button style={{backgroundColor: 'white', border: '1px black solid', color: 'black'}} htmlType={"submit"} type="primary" size={'large'}>
                                Save
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </Formik>
}
type ContactsType = {
    contactTitle: string
    contactValue: string
    activeContacts: boolean
}

const Contacts = ({ contactTitle, contactValue, activeContacts }: ContactsType) => {
    type contactTitleKey = typeof contactTitle
    return <div className={activeContacts === true ? classProfile.ContactsFormContainer : classProfile.ContactsFormContainer + ' ' + classProfile.active}>
        <span className={classProfile.ContactLinkHeader}>{contactValue}: </span>
        {createField<contactTitleKey>(classProfile.form, contactTitle, Input, contactValue)}
    </div>
}
export default ProfileContactsForm