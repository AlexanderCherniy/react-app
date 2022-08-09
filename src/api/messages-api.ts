import { defaultAxios } from "./api-dal";



export const DialogsApi = {
    putDialogWithUsers: (userId = 1) => defaultAxios.put(`dialogs/${userId}`).then(response => response),
    getAllDialogs: () => defaultAxios.get
        (`dialogs`).then(response => response.data),
    getConcreteUserMessages: (userId: number) => defaultAxios.get
        (`dialogs/${userId}/messages`).then(response => response.data),
    sendMessageToUser: (userId:number, body: string)=> defaultAxios.post
        (`dialogs/${userId}/messages`, {body}).then(response => response),
    deleteYourMessage: (messageId: string)=> defaultAxios.delete
        (`dialogs/messages/${messageId}`).then(response => response),
}