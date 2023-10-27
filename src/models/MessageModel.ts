class MessageModel{
    id?: number;
    title: string;
    userEmail?: string;
    question: string;
    response?: string;
    adminEmail?: string;
    closed?: boolean
    constructor(title: string, question: string){
        this.title = title;
        this.question = question;
        // this.id = id;
        // this.userEmail = userEmail;
        // this.response = response;
        // this.adminEmail = adminEmail;
        // this.closed = closed;
    }
}

export default MessageModel;