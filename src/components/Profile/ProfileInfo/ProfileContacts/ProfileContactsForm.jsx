import { Form, Field, Formik, ErrorMessage } from "formik"
import { Input } from "../../../../Forms/Forms";
import { validateProfile } from "../../../../validate/validate";
import incClass from '../../../Profile/Posts/Posts.module.css'
import classProfile from '../../Profile.module.css';
import ProfileStatusContainer from "../ProfileStatus/ProfileStatusContainer";

const ProfileContactsForm = props => {
    const validateProfileHelper = validateProfile(props)
    return <Formik initialValues={{ ...props.userProfile[0], someUrlIsWrong: "" }}
        validate={validateProfileHelper}
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
                                <Field className={classProfile.form} component={Input} placeholder="FullName" type='text' name="fullName" />
                            </div>
                                <ProfileStatusContainer {...props} item={props.userProfile[0]} />
                            <div className={classProfile.ProfileTextStyle}>
                                <span className={classProfile.ProfileTextHeader}>
                                    AboutMe:
                                </span> <Field className={classProfile.form} component={Input} placeholder="AboutMe" type='text' name="aboutMe" />
                            </div>
                            <div>
                                <div className={classProfile.ProfileJobSearch}>
                                    <span className={classProfile.ProfileJobSearchTitle}>Job Search:</span>
                                    <Field component={Input} placeholder="LookingForAJob" type='checkbox' name="lookingForAJob" />
                                    <Field className={classProfile.form} component={Input} placeholder="LookingForAJobDescription" type='text' name="lookingForAJobDescription" />
                                </div>
                            </div>
                            <ErrorMessage className={incClass.errorLogin} name="someUrlIsWrong" component={'div'} />
                            <div onClick={()=> props.setActiveContacts(!props.activeContacts)} 
                            className={classProfile.ProfileTextHeader}>
                                <span>Contacts <span>{props.activeContacts === false ? '+' : '-'}</span></span>
                            </div> 
                            {Object.keys(props.userProfile[0].contacts).map(key => {
                                return <Contacts key={key}
                                    contactTitle={'contacts.' + key} contactValue={key} props={props} />
                            })}
                            <div>
                                <button className={classProfile.changeButton} type="submit">GO FORM</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </Formik>
}
const Contacts = ({ contactTitle, contactValue, props }) => {
    return <div className={props.activeContacts === true ? classProfile.ContactsFormContainer : classProfile.ContactsFormContainer + ' ' + classProfile.active}>
        <span className={classProfile.ContactLinkHeader}>{contactValue}: </span>
        <Field className={classProfile.form} component={Input} placeholder={contactValue} type='text' name={contactTitle} />
    </div>
}
export default ProfileContactsForm