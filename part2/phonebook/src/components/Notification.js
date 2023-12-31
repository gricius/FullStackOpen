// Notification.js
const Notification = ({notification}) => {
    const {message, type} = notification;
    const notificationStyle = {
        color: type === 'success' ? 'green' : 'red',
        background: 'lightgrey',
        fontStyle: 'italic',
        fontSize: 16,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    };

    if (message === null) {
        return null;
    }

    return <div style={notificationStyle}>{message}</div>;
};

export default Notification;