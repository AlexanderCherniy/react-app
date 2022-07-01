import { Form, Field, Formik, ErrorMessage } from "formik"
import { ProfileContactsType, ProfileType } from "../../../../api/api-dal";
import { createField, Input } from "../../../../Forms/Forms";
import { dataType } from "../../../../redux/auth-reducer";
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
}
const ProfileContactsForm: React.FC<Props> = (props) => {
    const validateProfileHelper = validateProfile(props.item)
    return <Formik initialValues={{ ...props.userProfile[0], someUrlIsWrong: "" }}
        // validate={validateProfileHelper}
        onSubmit={async values => {
            await props.updateAccountProfile(values)
            props.setChangeMode(false)
        }}>
        <div key={props.item.userId}>
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
                                {createField(classProfile.form, "fullName", Input, "FullName")}
                            </div>
                            <ProfileStatusContainer {...props} item={props.userProfile[0]} />
                            <div className={classProfile.ProfileTextStyle}>
                                <span className={classProfile.ProfileTextHeader}>
                                    AboutMe:
                                </span> {createField(classProfile.form, "aboutMe", Input, "AboutMe")}
                            </div>
                            <div>
                                <div className={classProfile.ProfileJobSearch}>
                                    <span className={classProfile.ProfileJobSearchTitle}>Job Search:</span>
                                    {createField(classProfile.form, "lookingForAJob", Input, "LookingForAJob", "checkbox")}
                                    {createField(classProfile.form, "lookingForAJobDescription", Input, "LookingForAJobDescription")}
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
                            <button className={classProfile.changeButton} type="submit">GO FORM</button>
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
    console.log(activeContacts);
    return <div className={activeContacts === true ? classProfile.ContactsFormContainer : classProfile.ContactsFormContainer + ' ' + classProfile.active}>
        <span className={classProfile.ContactLinkHeader}>{contactValue}: </span>
        {createField(classProfile.form, contactTitle, Input, contactValue)}
    </div>
}
export default ProfileContactsForm